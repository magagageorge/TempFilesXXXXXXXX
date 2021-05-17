import { Injectable, Inject, EventEmitter } from '@angular/core';
import { PageMainCategory } from '@app/models/page/page.cagegory';
import { PageModel, PageForm, PageSummary } from '@app/models/page/page.model';
import { CrudService, CRUD_OPTIONS, CrudOptions } from '@app/@crud';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@app/@crud/helpers';
import { SysFunctions } from '@app/libs/utilities/common-functions';
import { NgxImageCompressService } from 'ngx-image-compress';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  model: PageForm = new PageForm();
  creating_page_onfly: boolean = false;
  pageCategories: PageMainCategory[];
  uploadingImage: boolean = false;
  processingImage: boolean = false;
  loadingImage: boolean = false;
  loading_my_pages: boolean = false;
  MYPAGES: PageSummary[] = [];
  newPageCreatedEmitter = new BehaviorSubject<PageSummary>(null);
  

  constructor(public service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, public imageCompress: NgxImageCompressService, router: Router) {
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.loadPageCategories();
    this.loadMyPages();
  }

  loadPageCategories() {
    this.getCategories().subscribe(results => {
      this.pageCategories = results.getResultData();
    });
  }

  loadMyPages() {
    var _this = this;
    this.loading_my_pages = true;
    this.getMyPages().subscribe(results => {
      this.loading_my_pages = false;
      this.MYPAGES = results.getResultData();
    });
  }

  getCategories(params?: {}) {
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'page/page-categories/';
    return this.service.getall(this.provider, params);
  }

  getMyPages(params?: {}) {
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'page/my-page/';
    return this.service.getall(this.provider, params);
  }


  setNewPageCreate(newValue:PageSummary): void {
    this.newPageCreatedEmitter.next(newValue);
  }

  hasNewPageCreated(): Observable<PageSummary> {
    return this.newPageCreatedEmitter.asObservable();
  }

  savePage() {
    var _this = this;
    //this.uploadingImage = true;
    this.errors = this.messages = [];
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'page/my-page/';
    formData.append("name", _this.model.name);
    formData.append("category_id", _this.model.category_id);
    //formData.append("name",_this.model.name);
    //formData.append("name",_this.model.name);

    if (_this.model.picture_preview_info.isNew == true && _this.model.picture_preview_info.file != null) {
      formData.append("PagePictureForm[org_image]", _this.model.picture_preview_info.file, _this.model.picture_preview_info.file['name']);
    }

    if (_this.model.croppedImage != '') {
      var cropped_image = SysFunctions.DataUrlToFile(_this.model.croppedImage);
      formData.append("PagePictureForm[image]", cropped_image, cropped_image['name']);
      formData.append("wh_ratio", 0);
    }

    this.service.create(this.provider, formData, {}).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var data = result.getResultData();
        _this.MYPAGES.push(data.page);
        _this.setNewPageCreate(data.page);
        _this.doneCreateOnlyPage();
      } else {
        _this.errors = result.getErrors();
      }
      //_this.uploadingImage = false;
    });
    //this.cancelEditAvatar();
  }

  UploadPictureFile() {
    var _this = this;
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      _this.processingImage = true;
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          _this.model.picture_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
          //_this.editMode.avatarEdit.selectOptions = false;
          //_this.editMode.avatarEdit.selectedOption = 'UploadAvatar';
          _this.processingImage = false;
          _this.PreviewCompressedPicture(result, 'base64');
        }
      );
    });
  }

  PreviewCompressedPicture(loadedUrl: string, urlType: string) {
    var _this = this;
    if (loadedUrl != '') {
      this.loadingImage = true;
      //this.editMode.avatarEdit.processingAvatar = true;
      var loadedImage = new Image();
      loadedImage.setAttribute('crossorigin', 'anonymous'); // works for me
      var base64Url = '';
      loadedImage.onload = (event) => {
        if (event) {
          if (urlType == 'base64') {
            var imgFile = SysFunctions.DataUrlToFile(loadedUrl);
            base64Url = loadedUrl;
            _this.model.picture_preview_info = { url: base64Url, width: loadedImage.width, height: loadedImage.height, file: imgFile, isNew: true };
            _this.loadingImage = false;
          } else {
            SysFunctions.ImageUrlToBlob(loadedUrl).subscribe(blob => {
              SysFunctions.BlobtoDataURL(blob).then(base64Url => {
                var imgFile = SysFunctions.DataUrlToFile(base64Url);
                _this.model.picture_preview_info = { url: base64Url, width: loadedImage.width, height: loadedImage.height, file: imgFile, isNew: true };
                _this.loadingImage = false;
              });
            });
          }
        }
      }
      loadedImage.src = loadedUrl;
    }
    //this.editMode.avatarEdit.processingAvatar = false;
  }

  createPageOnFly() {
    this.creating_page_onfly = true;
  }

  cancelCreateOnlyPage() {
    this.creating_page_onfly = false;
    this.model = new PageForm();
  }

  doneCreateOnlyPage() {
    this.creating_page_onfly = false;
    this.model = new PageForm();
  }

  getPage(page_id: number): Observable<PageSummary> {
    return of(this.MYPAGES.find((p: PageSummary) => p.id == page_id));
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  };
}
