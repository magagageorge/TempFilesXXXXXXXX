import { Injectable, Inject } from '@angular/core';
import { WorkExperience } from '@app/models/profile/work-experience';
import { CrudService, CrudProvider, CRUD_OPTIONS, CrudOptions } from '@app/@crud';
import { UrlViewerService } from './url-viewer.service';
import { PageService } from './page.service';
import { LoadSubmitProgressService } from './load-submit-progress.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';
import { SysFunctions } from '@app/libs/utilities/common-functions';
import { Observable } from 'rxjs';
import { getDeepFromObject } from '@app/@crud/helpers';
import { PageFeedService } from '@app/viewer/page/services/page-feed.service';
import { FeedService } from './feed.service';

export interface EditMode {
  inEdit: boolean;
  currentEditing: string;
  coverEdit: {
    selectOptions: boolean;
    selectedOption: string;
    processingCover: boolean;
  }
  pictureEdit: {
    selectOptions: boolean;
    selectedOption: string;
    processingPicture: boolean;
  },
  contacts: {
    action: string;
    inEditData: any;
    processingContacts: boolean;
  }
}

export interface DeleteMode {
  inDelete: boolean;
  currentDeleting: string;
}

export interface PreviewPicture {
  url: string;
  width: number;
  height: number;
  file: File;
  isNew: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EditPageService {

  service: CrudService;
  crudprovider: CrudProvider;
  urlViewerService: UrlViewerService;
  pageService: PageService;
  loadProcessService: LoadSubmitProgressService;
  httpClient: HttpClient;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  imageCompress: NgxImageCompressService;
  //public PAGE: Page = new Page();
  loading_page: boolean = false;
  cover_preview_info: PreviewPicture = { url: '', width: 0, height: 0, file: null, isNew: true };
  picture_preview_info: PreviewPicture = { url: '', width: 0, height: 0, file: null, isNew: true };
  editMode: EditMode = { inEdit: false, currentEditing: '', coverEdit: { selectOptions: false, selectedOption: '', processingCover: false }, pictureEdit: { selectOptions: false, selectedOption: '', processingPicture: false }, contacts: { action: '', inEditData: null, processingContacts: false } };
  deleteMode: DeleteMode = { inDelete: false, currentDeleting: '' };
  uploadingImage: boolean = false;
  processingImage: boolean = false;
  loadingImage: boolean = false;

  constructor(service: CrudService, public feedService: FeedService, public pageFeedService: PageFeedService, pageService: PageService, urlViewerService: UrlViewerService, loadProcessService: LoadSubmitProgressService, imageCompress: NgxImageCompressService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router, httpClient: HttpClient) {
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.httpClient = httpClient;
    this.imageCompress = imageCompress;
    this.urlViewerService = urlViewerService;
    this.pageService = pageService;
    this.loadProcessService = loadProcessService;
  }

  editCover() {
    this.editMode.inEdit = true;
    this.editMode.currentEditing = 'pageCover';
    this.editMode.coverEdit.selectOptions = true;
  }

  cancelEditCover() {
    this.editMode.inEdit = false;
    this.editMode.currentEditing = '';
    this.editMode.coverEdit.selectOptions = false;
    this.editMode.coverEdit.selectedOption = '';
  }

  editPicture() {
    this.editMode.inEdit = true;
    this.editMode.currentEditing = 'pagePicture';
    this.editMode.pictureEdit.selectOptions = true;
  }

  cancelEditPicture() {
    this.editMode.inEdit = false;
    this.editMode.currentEditing = '';
    this.editMode.pictureEdit.selectOptions = false;
    this.editMode.pictureEdit.selectedOption = '';
  }

  savePageCover(base64CoverUri: any) {
    var _this = this;
    this.uploadingImage = true;
    var cropped_image = SysFunctions.DataUrlToFile(base64CoverUri);
    this.errors = this.messages = [];
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'page/page-cover/';
    if (this.cover_preview_info.isNew == true && this.cover_preview_info.file != null) {
      formData.append("PageCoverForm[org_image]", this.cover_preview_info.file);
    }
    formData.append("PageCoverForm[image]", cropped_image);
    formData.append("wh_ratio", 0);

    this.service.update(this.provider, formData, { id: this.urlViewerService.PPVIEWER.page.id }).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var data = result.getResultData();
        if (data.done == true) {
          _this.urlViewerService.PPVIEWER.page.cover.picture = base64CoverUri;
          _this.cover_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
          if (data.post != null) {
            if (data.post != null) {
              _this.feedService.prependFeed(data.post, false);
              if (data.post.page != null && data.post.page.id == _this.pageFeedService.page_id) {
                _this.pageFeedService.prependFeed(data.post, false);
              }
            }
          }
        }
      } else {
        _this.errors = result.getErrors();
      }
      _this.uploadingImage = false;
    });

    this.cancelEditCover();
  }

  savePagePicture(base64PictureUri: any) {
    var _this = this;
    this.uploadingImage = true;
    var cropped_image = SysFunctions.DataUrlToFile(base64PictureUri);
    this.errors = this.messages = [];
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'page/page-picture/';

    if (this.picture_preview_info.isNew == true && this.picture_preview_info.file != null) {
      formData.append("PagePictureForm[org_image]", this.picture_preview_info.file);
    }
    formData.append("PagePictureForm[image]", cropped_image);
    formData.append("wh_ratio", 0);

    this.service.update(this.provider, formData, { id: this.urlViewerService.PPVIEWER.page.id }).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var data = result.getResultData();
        if (data.done == true) {
          _this.urlViewerService.PPVIEWER.page.picture.face = base64PictureUri;
          _this.picture_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
          if (data.post != null) {
            _this.feedService.prependFeed(data.post, false);
            if (data.post.page != null && data.post.page.id == _this.pageFeedService.page_id) {
              _this.pageFeedService.prependFeed(data.post, false);
            }
          }
        }
      } else {
        _this.errors = result.getErrors();
      }
      _this.uploadingImage = false;
    });

    this.cancelEditPicture();
  }

  postponeAddingPicture() {
    var _this = this;
    this.errors = this.messages = [];
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'page/page-picture/';
    //this.pageService.MYPAGE.avatar.show_alert = false;
    formData.append("SkipPagePicture", true);
    this.service.update(this.provider, formData, {}).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var data = result.getResultData();
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  postponeAddingCover() {
    var _this = this;
    this.errors = this.messages = [];
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'page/page-cover/';
    //this.pageService.MYPAGE.cover.show_alert = false;
    formData.append("SkipPageCover", true);
    this.service.update(this.provider, formData, {}).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var data = result.getResultData();
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  onSelectCoverFile(event) {
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
        this.editMode.coverEdit.selectOptions = false;
        this.editMode.coverEdit.selectedOption = 'UploadCover';
        this.PreviewCover(<File>f);
      }
    }
  }

  onSelectPictureFile(event) {
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
        this.editMode.coverEdit.selectOptions = false;
        this.editMode.coverEdit.selectedOption = 'UploadPicture';
        this.PreviewCover(<File>f);
      }
    }
  }

  UploadCoverFile() {
    var _this = this;
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      _this.processingImage = true;
      SysFunctions.getImageCompressionRates(image, 'PAGE_COVER').then(rts => {
        this.imageCompress.compressFile(image, orientation, rts.ratio, rts.quality).then(
          result => {
            _this.cover_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
            _this.editMode.coverEdit.selectOptions = false;
            _this.editMode.coverEdit.selectedOption = 'UploadCover';
            _this.processingImage = false;
            _this.PreviewCompressedCover(result, 'base64');
          }
        );
      });
    });
  }

  RepositionPageCover(ImgUrl: string) {
    this.cover_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
    this.editMode.coverEdit.selectOptions = false;
    this.editMode.coverEdit.selectedOption = 'RepositionCover';
    this.PreviewCompressedCover(ImgUrl, 'url');
  }

  UploadPictureFile() {
    var _this = this;
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      _this.processingImage = true;
      SysFunctions.getImageCompressionRates(image, 'PROFILE_COVER').then(rts => {
        this.imageCompress.compressFile(image, orientation, rts.ratio, rts.quality).then(
          result => {
            _this.picture_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
            _this.editMode.pictureEdit.selectOptions = false;
            _this.editMode.pictureEdit.selectedOption = 'UploadPicture';
            _this.processingImage = false;
            _this.PreviewCompressedPicture(result, 'base64');
          }
        );
      });
    });
  }

  RepositionPagePicture(ImgUrl: string) {
    this.picture_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
    this.editMode.pictureEdit.selectOptions = false;
    this.editMode.pictureEdit.selectedOption = 'RepositionPicture';
    this.PreviewCompressedPicture(ImgUrl, 'url');
  }

  PreviewCompressedCover(loadedUrl: string, urlType: string) {
    var _this = this;
    if (loadedUrl != '') {
      this.loadingImage = true;
      this.editMode.coverEdit.processingCover = true;
      var loadedImage = new Image();
      loadedImage.setAttribute('crossorigin', 'anonymous'); // works for me
      var base64Url = '';
      loadedImage.onload = (event) => {
        if (event) {
          if (urlType == 'base64') {
            var imgFile = SysFunctions.DataUrlToFile(loadedUrl);
            base64Url = loadedUrl;
            _this.cover_preview_info = { url: base64Url, width: loadedImage.width, height: loadedImage.height, file: imgFile, isNew: true };
            _this.loadingImage = false;
          } else {
            SysFunctions.ImageUrlToBlob(loadedUrl).subscribe(blob => {
              SysFunctions.BlobtoDataURL(blob).then(base64Url => {
                var imgFile = SysFunctions.DataUrlToFile(base64Url);
                _this.cover_preview_info = { url: base64Url, width: loadedImage.width, height: loadedImage.height, file: imgFile, isNew: true };
                _this.loadingImage = false;
              });
            });
          }
        }
      }
      loadedImage.src = loadedUrl;
    }
    this.editMode.coverEdit.processingCover = false;
  }

  PreviewCompressedPicture(loadedUrl: string, urlType: string) {
    var _this = this;
    if (loadedUrl != '') {
      this.loadingImage = true;
      this.editMode.pictureEdit.processingPicture = true;
      var loadedImage = new Image();
      loadedImage.setAttribute('crossorigin', 'anonymous'); // works for me
      var base64Url = '';
      loadedImage.onload = (event) => {
        if (event) {
          if (urlType == 'base64') {
            var imgFile = SysFunctions.DataUrlToFile(loadedUrl);
            base64Url = loadedUrl;
            _this.picture_preview_info = { url: base64Url, width: loadedImage.width, height: loadedImage.height, file: imgFile, isNew: true };
            _this.loadingImage = false;
          } else {
            SysFunctions.ImageUrlToBlob(loadedUrl).subscribe(blob => {
              SysFunctions.BlobtoDataURL(blob).then(base64Url => {
                var imgFile = SysFunctions.DataUrlToFile(base64Url);
                _this.picture_preview_info = { url: base64Url, width: loadedImage.width, height: loadedImage.height, file: imgFile, isNew: true };
                _this.loadingImage = false;
              });
            });
          }
        }
      }
      loadedImage.src = loadedUrl;
    }
    this.editMode.pictureEdit.processingPicture = false;
  }

  PreviewCover(f: File) {
    var fileReader = new FileReader();
    var i_url;
    fileReader.onload = (e) => {
      if (e) {
        this.editMode.coverEdit.processingCover = true;
        i_url = (<FileReader>e.target).result;
        var loadedImage = new Image();
        loadedImage.onload = (event) => {
          if (event) {
            this.cover_preview_info = { url: i_url, width: loadedImage.width, height: loadedImage.height, file: <File>f, isNew: true };
          }
        }
        loadedImage.src = i_url;
      }
    }
    fileReader.readAsDataURL(<File>f);
    this.editMode.coverEdit.processingCover = false;
  }

  /* Top Page Card */
  EditTopPageCard() {
    this.editMode.currentEditing = 'topPageCard'
    this.editMode.inEdit = true;
  }

  cancelEditTopPageCard() {
    this.editMode.inEdit = false;
    this.editMode.currentEditing = '';
  }

  savePageInfo(pageModel: any): Observable<any> {
    var _this = this;
    this.errors = this.messages = [];
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'page/my-page/';
    return Observable.create((observer) => {
      this.loadProcessService.submittingData = true;
      return this.service.update(this.provider, pageModel, {}).subscribe(result => {
        _this.loadProcessService.submittingData = false;
        if (result.isSuccess()) {
          _this.messages = result.getMessages();
          var data = result.getResultData();
          if (data.done) {
            //_this.UpdateLocalPageInfo(data.page as MyPage);
          }
        } else {
          _this.errors = result.getErrors();
        }
      });
    })
  }

  EditPageInfo() {
    this.editMode.currentEditing = 'PageInfo';
    this.editMode.inEdit = true;
  }

  cancelEditPage() {
    this.editMode.inEdit = false;
    this.editMode.currentEditing = '';
  }

  cancelDeletePage() {
    this.deleteMode.inDelete = false;
    this.deleteMode.currentDeleting = '';
  }



  isMyPageInEdit(): boolean {
    if (this.urlViewerService.PPVIEWER.page.my_page) {
      return true;
    }
    return false;
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  };

}
