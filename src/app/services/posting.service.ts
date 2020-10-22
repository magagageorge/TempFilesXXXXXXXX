import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Feed } from '@models/feed/feed';
import { PostForm } from '@models/post';
import { Visibility } from '@models/visibility';
import { Visibilities } from '@app/data/visibilities';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { FeedService } from '@app/services/feed.service';
import { WfLinkPreviewService } from '@app/libs/wf-link-preview/services/wf-link-preview.service';
import { LoadSubmitProgressService } from './load-submit-progress.service';
import { PageViewer } from '@app/models/page-viewer';
import { ProfileService } from './profile.service';
import { PageSummary } from '@app/models/page/page.model';
import { ProfileFeedService } from '@app/viewer/profile/services/profile-feed.service';
import { PageFeedService } from '@app/viewer/page/services/page-feed.service';
import { SysFunctions } from '@app/libs/utilities/common-functions';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ProfileModel } from '@app/@crud/models/ProfileModel';


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
  loadSubmitProgressService: LoadSubmitProgressService;
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
  feed_input_model: PostForm = new PostForm();
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
  postingAs: string;
  postingTo: string;
  postingTo_Profile: ProfileModel;
  postingTo_Page: PageSummary = new PageSummary();
  postingAs_page: PageSummary = new PageSummary();
  profileService: ProfileService;

  constructor(service: CrudService, profileService: ProfileService, feedService: FeedService, public profileFeedService: ProfileFeedService, public pageFeedService: PageFeedService, public imageCompress: NgxImageCompressService, loadSubmitProgressService: LoadSubmitProgressService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router, linkPreviewService: WfLinkPreviewService) {
    this.service = service;
    this.feedService = feedService;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.linkPreviewService = linkPreviewService;
    this.loadSubmitProgressService = loadSubmitProgressService;
    this.profileService = profileService;
    this.provider = this.getConfigValue('forms.getall.provider');
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
        this.PushPreviewFiles(<File>f);
      }
      this.focus_on_message_input = true;
      this.show_input_buttons = true;
      this.show_hide_inputs();
    }
  }

  PushPreviewFiles(f: File) {
    var _this = this;
    var fileReader = new FileReader();
    var i_url;
    console.log('Before Compression=' + (f.size / 1024));
    fileReader.onload = (e) => {
      if (e) {
        i_url = (<FileReader>e.target).result;
        SysFunctions.getImageCompressionRates(i_url, 'POST_IMAGE').then(rts => {
          SysFunctions.getImageOrientation(f).then(orientation => {
            _this.imageCompress.compressFile(i_url, orientation, rts.ratio, rts.quality).then(
              processedImageDataUrl => {
                var loadedImage = new Image();
                loadedImage.onload = (event) => {
                  if (event) {
                    var imgFile = SysFunctions.DataUrlToFile(processedImageDataUrl);
                    _this.filesToUpload.push(imgFile);
                    console.log('After Compression=' + (imgFile.size / 1024));
                    _this.file_preview_urls.push({ url: processedImageDataUrl, width: loadedImage.width, height: loadedImage.height, file: imgFile });
                  }
                }
                loadedImage.src = processedImageDataUrl;
              });
          });
        });
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

    if (this.postingAs == 'Page' && this.postingAs_page != null) {
      formData.append("page_id", this.postingAs_page.id);
    }
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
      this.loadSubmitProgressService.submittingData = true;
      if (this.feed_input_model.isNew) {
        this.service.create(this.provider, formData, {}).subscribe(function (result) {
          _this.submitted = false;
          if (result.isSuccess()) {
            _this.messages = result.getMessages();
            var data = result.getResultData();
            if (data.done == true) {
              _this.feedService.prependFeed(data.data, false);
              if (_this.postingAs == 'Page' && _this.postingAs_page != null) {
                console.log('Prepend to Page Feed');
                _this.pageFeedService.prependFeed(data.data, false);
              } else {
                _this.profileFeedService.prependFeed(data.data, false);
                console.log('Prepend to Profile Feed');
              }
              _this.feed_input_model = new PostForm();
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
          _this.loadSubmitProgressService.submittingData = false;
        });
      } else {
        this.service.update(this.provider, formData, { 'id': _this.feed_input_model.id }).subscribe(function (result) {
          _this.submitted = false;
          if (result.isSuccess()) {
            _this.messages = result.getMessages();
            var data = result.getResultData();
            if (data.done == true) {
              _this.feedService.prependFeed(data.data, true);
              if (_this.postingAs == 'Page' && _this.postingAs_page != null) {
                _this.pageFeedService.prependFeed(data.data, true);
              } else {
                _this.profileFeedService.prependFeed(data.data, true);
              }
              _this.feed_input_model = new PostForm();
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
          _this.loadSubmitProgressService.submittingData = false;
        });
      }
      _this.feed_input_model = new PostForm();
      _this.filesToUpload = [];
      _this.file_preview_urls = [];
      this.linkPreviewService.links = [];
      this.messageBlur();
      //feed_card_elem.style.opacity = '1';
    }
  }

  /* Function to set the form PostForm Editing once Edit form clicked in the Feed */
  setEdititablePost(post: PostForm, feed: Feed) {
    var _this = this;
    this.setPostForm(feed, false);
    this.filesToUpload = [];
    this.file_preview_urls = [];
    let input_box: HTMLElement = document.querySelector("#feed_form_model_input");
    if (input_box != null) {
      input_box.focus();
      input_box.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
    this.messageFocus();
    this.feedService.searchFeed(post.id).subscribe((feedd: Feed) => {
      if (feedd) {
        feedd.edit_mode = true;
      }

      if (feed.original_post != null) {
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

  setPostForm(feed: Feed, isNew: boolean) {
    this.feed_input_model.id = feed.id;
    this.feed_input_model.message = feed.message;
    this.feed_input_model.visibility = feed.visibility;
    this.feed_input_model.isNew = isNew;
    if (feed.page != null) {
      this.feed_input_model.page_id = feed.page.id;
    }
  }

  /* Function to reset the PostForm Form once User Cancel Editing the PostForm */
  CancelPostEdit() {
    if (this.feed_input_model.id != null) {
      this.feedService.searchFeed(this.feed_input_model.id).subscribe((feed: Feed) => {
        if (feed) {
          feed.edit_mode = false;
        }
      });
      let elem: HTMLElement = document.querySelector("#feed_item_" + this.feed_input_model.id);
      if (elem != null) {
        elem.scrollIntoView();
      }
    }
    this.clearPostForm();
    this.filesToUpload = [];
    this.file_preview_urls = [];
  }

  clearPostForm() {
    this.feed_input_model.message = '';
    this.feed_input_model.isNew = true;
    this.feed_input_model.id = null;
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
    }
    this.CancelPostEdit();
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


  /* The the default list of visibility
/* options for depending on
/* either the  publisher is a personal or Page */
  get visibility_options(): Visibility[] {
    if (this.postingAs == 'Page') {
      return Visibilities.filter((v: Visibility) => v.code === 'Everyone');
    } else {
      return Visibilities;
    }
  }

  get postingAsImage() {
    if (this.postingAs == 'Page' && this.postingAs_page != null) {
      return this.postingAs_page.picture.face;
    } else if (this.postingAs == 'Profile' && this.profileService.MYPROFILE != null) {
      return this.profileService.MYPROFILE.avatar.face;
    } else {
      return '';
    }
  }

  get postingAsName() {
    if (this.postingAs == 'Page' && this.postingAs_page != null) {
      return this.postingAs_page.name;
    } else if (this.postingAs == 'Profile' && this.profileService.MYPROFILE != null) {
      return (this.profileService.MYPROFILE.firstname + ' ' + this.profileService.MYPROFILE.lastname);
    } else {
      return '';
    }
  }

  deletePost(id: number) {
    this.clearFeed(id);
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/p/';
    this.service.delete(this.provider, { id: id }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data == true) {
        } else {
          //elem.style.opacity = '1';
        }
      } else {
        _this.errors = result.getErrors();
        //elem.style.opacity = '1';
      }
    });
  }

  clearFeed(feed_id: number) {
    this.feedService.feeds = this.feedService.feeds.filter((x: any) => x.id !== feed_id);
    this.profileFeedService.feeds = this.profileFeedService.feeds.filter((x: any) => x.id !== feed_id);
    this.pageFeedService.feeds = this.pageFeedService.feeds.filter((x: any) => x.id !== feed_id);
  }

  wantToShareAs() {

  }


  feedLike(feed: Feed, action: string) {
    if (feed.sending_like == true) {
      return;
    }
    this.updateFeedLike(feed, action);
    //this.profileFeedService.updateFeedLike(feed, action);
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/feed-like/';
    feed.sending_like = true;
    if (action == "like") {
      console.log(feed);
      this.service.create(this.provider, { object_id: feed.id }, {}).subscribe(function (result) {
        _this.submitted = false;
        feed.sending_like = false;
        if (result.isSuccess()) {
          var data = result.getResultData();
          if (data != true) {
            _this.updateFeedLike(feed, 'unlike');
          }
        }
        else {
          _this.errors = result.getErrors();
          _this.updateFeedLike(feed, 'unlike');
        }
      });
    } else {
      this.service.delete(this.provider, { id: feed.id }).subscribe(function (result) {
        feed.sending_like = false;
        if (result.isSuccess()) {
          var data = result.getResultData();
          if (data != true) {
            _this.updateFeedLike(feed, 'like');
          }
        } else {
          _this.errors = result.getErrors();
          _this.updateFeedLike(feed, 'like');
        }
      });
    }
  }

  updateFeedLike(feed: Feed, action: string) {
    /* Update date post status in overlay or single post in case is open and is the one one being liked */
    if (this.feedService.OVERLAY_FEED.feed != null && feed.id == this.feedService.OVERLAY_FEED.feed.id) {
      if (action == 'like') {
        this.feedService.OVERLAY_FEED.feed.no_likes = Number(this.feedService.OVERLAY_FEED.feed.no_likes) + 1;
        this.feedService.OVERLAY_FEED.feed.i_like = true;
      } else {
        if (Number(this.feedService.OVERLAY_FEED.feed.no_likes) > 0) {
          this.feedService.OVERLAY_FEED.feed.no_likes = Number(this.feedService.OVERLAY_FEED.feed.no_likes) - 1;
          this.feedService.OVERLAY_FEED.feed.i_like = false;
        }
      }
    }

    /* update post status in feed */
    this.feedService.searchFeed(feed.id).subscribe((feed: Feed) => {
      if (feed) {
        if (action == 'like') {
          feed.no_likes = Number(feed.no_likes) + 1;
          feed.i_like = true;
        } else {
          if (Number(feed.no_likes) > 0) {
            feed.no_likes = Number(feed.no_likes) - 1;
            feed.i_like = false;
          }
        }
      }
    });

    /* update post status in feed */
    this.profileFeedService.searchFeed(feed.id).subscribe((feed: Feed) => {
      if (feed) {
        if (action == 'like') {
          feed.no_likes = Number(feed.no_likes) + 1;
          feed.i_like = true;
        } else {
          if (Number(feed.no_likes) > 0) {
            feed.no_likes = Number(feed.no_likes) - 1;
            feed.i_like = false;
          }
        }
      }
    });

    /* update post status in feed */
    this.pageFeedService.searchFeed(feed.id).subscribe((feed: Feed) => {
      if (feed) {
        if (action == 'like') {
          feed.no_likes = Number(feed.no_likes) + 1;
          feed.i_like = true;
        } else {
          if (Number(feed.no_likes) > 0) {
            feed.no_likes = Number(feed.no_likes) - 1;
            feed.i_like = false;
          }
        }
      }
    });

  }

  hidePost(post_id: number) {
    var _this = this;
    this.updatePostHiding(post_id, true);
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/feed-hide/';
    this.service.create(this.provider, { object_id: post_id }, {}).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data != true) {
          _this.updatePostHiding(post_id, false);
        }
      }
      else {
        _this.errors = result.getErrors();

      }
    });
  }

  unhidePost(post_id: number) {
    var _this = this;
    this.errors = this.messages = [];
    _this.updatePostHiding(post_id, false);
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/feed-hide/';
    this.service.delete(this.provider, { id: post_id }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data == true) {
          _this.updatePostHiding(post_id, true);
        } else {

        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  updatePostHiding(postId: number, status: boolean) {
    this.feedService.searchFeed(postId).subscribe(feed => {
      if (feed) {
        feed.hidden_post = status;
      }
    });
    this.profileFeedService.searchFeed(postId).subscribe(feed => {
      if (feed) {
        feed.hidden_post = status;
      }
    });
    this.pageFeedService.searchFeed(postId).subscribe(feed => {
      if (feed) {
        feed.hidden_post = status;
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
