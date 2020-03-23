import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Feed } from '@models/feed/feed';
import { Post } from '@models/post';
import { Visibility } from '@models/visibility';
import { Visibilities } from '@app/data/visibilities';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { FeedService } from '@app/services/feed.service';
import { WfLinkPreviewService } from '@app/libs/wf-link-preview/services/wf-link-preview.service';
import { LoadSubmitProgressService } from './load-submit-progress.service';


export interface PreviewPicture {
  url: string;
  width: number;
  height: number;
  file: File;
}

export class SharePostModel {
  inShareMode: boolean;
  sharePost: Feed;
  postingShare: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class PostingService {
  service: CrudService;
  feedService: FeedService;
  crudprovider: CrudProvider;
  linkPreviewService: WfLinkPreviewService;
  loadSubmitProgressService:LoadSubmitProgressService;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean = false;
  errors: string[];
  messages: string[];
  show_upload_img: boolean = true;
  focus_on_message_input: boolean = false;
  selected_visibility: Visibility = new Visibility();
  visibility_options: Visibility[] = Visibilities;
  feed_input_model: Post = new Post();
  filesToUpload: Array<File> = [];
  file_preview_urls: PreviewPicture[] = [];
  posted_images_in_edit: PreviewPicture[] = [];
  show_input_buttons: boolean = false;
  sharePostModel: SharePostModel = new SharePostModel();
  size: any;
  width: number;
  height: number;
  img_url: string;
  loadedImage: any;
  fileReader: any;

  constructor(service: CrudService, feedService: FeedService,loadSubmitProgressService:LoadSubmitProgressService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router, linkPreviewService: WfLinkPreviewService) {
    this.service = service;
    this.feedService = feedService;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.linkPreviewService = linkPreviewService;
    this.loadSubmitProgressService=loadSubmitProgressService;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      //this.filesToUpload = this.filesToUpload.concat(<Array<File>>event.target.files);
      var filesAmount = event.target.files.length;
      let files = event.target.files;
      for (let i = 0; i < filesAmount; i++) {
        var f = files[i];
        // Only process image files.
        if (!f.type.match('image.*')) {
          continue;
        }
        this.filesToUpload.push(<File>f);
        this.PushPreviewFiles(<File>f);
      }
      this.focus_on_message_input = true;
      this.show_input_buttons = true;
      this.show_hide_inputs();

    }
  }

  PushPreviewFiles(f: File) {
    var fileReader = new FileReader();
    var i_url;
    fileReader.onload = (e) => {
      if (e) {
        i_url = (<FileReader>e.target).result;
        var loadedImage = new Image();
        loadedImage.onload = (event) => {
          if (event) {
            this.file_preview_urls.push({ url: i_url, width: loadedImage.width, height: loadedImage.height, file: <File>f });
          }
        }
        loadedImage.src = i_url;
      }
    }
    fileReader.readAsDataURL(<File>f);
  }

  RemovePreviewImage(preview: PreviewPicture) {
    this.file_preview_urls = this.file_preview_urls.filter((x: PreviewPicture) => x.url !== preview.url);
    this.posted_images_in_edit = this.posted_images_in_edit.filter((x: PreviewPicture) => x.url !== preview.url);
    if (preview.file !== null) {
      this.filesToUpload = this.filesToUpload.filter((x: File) => x !== <File>preview.file);
    }
  }

  /* Function to Post the FORM TO THE BACKEND APPLICATION ONCE USER CLICK ON Post Button in Post Form */
  post() {
    var _this = this;
    this.errors = this.messages = [];
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/p/';
    if (this.feed_input_model.message.trim() == '' && files.length < 1 && this.file_preview_urls.length < 1 && (this.sharePostModel.inShareMode == false || this.sharePostModel.sharePost == null)) {
      return false;
    }

    if (this.linkPreviewService.links.length == 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append("PostForm[upload_files][]", files[i], files[i]['name']);
      }
      formData.append("edited_pictures", JSON.stringify(this.posted_images_in_edit));
    } else {
      this.linkPreviewService.link_Preview.code = "";
      formData.append("link", JSON.stringify(this.linkPreviewService.link_Preview));
    }
    formData.append("isNew", this.feed_input_model.isNew);
    formData.append("visibility", this.feed_input_model.visibility);
    formData.append("message", this.feed_input_model.message.trim());
    if (this.sharePostModel.inShareMode) {
      formData.append("original_id", this.sharePostModel.sharePost.id);
    }
    if (this.submitted === false) {
      this.feedService.loading_new_post = true;
      let feed_card_elem: HTMLElement = document.querySelector('#wffeed-post-card');
      //feed_card_elem.style.opacity = '0.5';
      //feed_card_elem.setAttribute('disabled','true');
      this.submitted = true;
      this.loadSubmitProgressService.submittingData=true;
      if (this.feed_input_model.isNew) {
        this.service.create(this.provider, formData, {}).subscribe(function (result) {
          _this.submitted = false;
          if (result.isSuccess()) {
            _this.messages = result.getMessages();
            var data = result.getResultData();
            if (data.done == true) {
              _this.feedService.prependFeed(data.data);
              _this.feed_input_model = new Post();
              _this.filesToUpload = [];
              _this.file_preview_urls = [];
            }
          } else {
            _this.errors = result.getErrors();
          }
          if (_this.sharePostModel.inShareMode) {
            _this.sharePostModel.inShareMode = false;
            _this.sharePostModel.sharePost = null;
          }
          _this.feedService.loading_new_post = false;
          _this.loadSubmitProgressService.submittingData=false;
        });
      } else {
        this.service.update(this.provider, formData, { 'id': _this.feed_input_model.id }).subscribe(function (result) {
          _this.submitted = false;
          if (result.isSuccess()) {
            _this.messages = result.getMessages();
            var data = result.getResultData();
            if (data.done == true) {
              _this.feedService.clearFeed(_this.feed_input_model.id);
              _this.feedService.prependFeed(data.data);
              _this.feed_input_model = new Post();
              _this.filesToUpload = [];
              _this.file_preview_urls = [];
            }
          } else {
            _this.errors = result.getErrors();
          }
          if (_this.sharePostModel.inShareMode) {
            _this.sharePostModel.inShareMode = false;
            _this.sharePostModel.sharePost = null;
          }
          _this.feedService.loading_new_post = false;
          _this.loadSubmitProgressService.submittingData=false;
        });
      }
      _this.feed_input_model = new Post();
      _this.filesToUpload = [];
      _this.file_preview_urls = [];
      this.linkPreviewService.links = [];
      this.messageBlur();
      //feed_card_elem.style.opacity = '1';
    }
  }

  /* Function to set the form Post Editing once Edit form clicked in the Feed */
  setEdititablePost(post: Post, feed: Feed) {
    var _this = this;
    this.feed_input_model = post;
    this.feed_input_model.isNew = false;
    this.filesToUpload = [];
    this.file_preview_urls = [];
    let input_box: HTMLElement = document.querySelector("#feed_form_model_input");
    if (input_box != null) {
      input_box.focus();
      input_box.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    this.feedService.searchFeed(String(post.id)).subscribe((feedd: Feed) => {
      if (feedd) {
        feedd.edit_mode = true;
      }

      if(feed.original_post!=null){
        this.shareThisPost(feed);
      }

      if (feed.images.length) {
        feed.images.forEach(picture => {
          _this.file_preview_urls.push({ url: picture.data.url, width: picture.data.width, height: picture.data.height, file: null });
          _this.posted_images_in_edit.push({ url: picture.data.url, width: picture.data.width, height: picture.data.height, file: null });
        });
      }
    });
  }


  /* Function to reset the Post Form once User Cancel Editing the Post */
  CancelPostEdit() {
    this.feedService.searchFeed(String(this.feed_input_model.id)).subscribe((feed: Feed) => {
      if (feed) {
        feed.edit_mode = false;
      }
    });
    this.feed_input_model = new Post();
    this.feed_input_model.isNew = true;
    this.filesToUpload = [];
    this.file_preview_urls = [];
    this.messageBlur();
    let elem: HTMLElement = document.querySelector("#feed_item_" + this.feed_input_model.id);
    if (elem != null) {
      elem.scrollIntoView();
    }
  }


  SelectFeedUploadImage() {
    var elem: HTMLElement = document.querySelector('#post_upload_input_id');
    if (elem != null) {
      elem.click();
    }
  }

  /* Function to swap selected visibility once user change visibility option*/
  changeVisibility(visibility: Visibility) {
    this.selected_visibility = visibility;
    this.feed_input_model.visibility = visibility.code;
  }

  show_hide_inputs() {
    if (this.feed_input_model.message != '' || this.focus_on_message_input || this.file_preview_urls.length) {
      this.show_upload_img = false;
      this.show_input_buttons = true;
    } else {
      this.show_upload_img = true;
      this.show_input_buttons = false;
    }
  }

  messageBlur() {
    if (this.sharePostModel.inShareMode) {
      this.sharePostModel.inShareMode = false;
      this.sharePostModel.sharePost = null;
      this.feed_input_model.message = '';
      this.messageBlur();
    } else {
      this.focus_on_message_input = false;
      if (this.feed_input_model.message != '') {
        this.show_upload_img = false;
      } else {
        this.show_upload_img = true;
      }
      this.show_input_buttons = false;
      this.CancelPostEdit();
    }
  }
  messageFocus() {
    this.focus_on_message_input = true;
    this.show_hide_inputs();
  }

  shareThisPost(post: Feed) {
    if (post.original_post != null) {
      this.sharePostModel.sharePost = post.original_post;
    } else {
      this.sharePostModel.sharePost = post;
    }
    this.sharePostModel.inShareMode = true;
    this.messageFocus();
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
