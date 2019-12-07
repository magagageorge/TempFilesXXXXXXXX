import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Router } from '@angular/router';
import { ProfileModel } from '@app/@crud/models/ProfileModel';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { UtilitiesService } from '@app/services/utilities.service';
import { MyProfile } from '@app/models/profile/my-profile';
import { Profile } from '@app/models/profile/profile';
import { NgxImageCompressService } from 'ngx-image-compress';
import { UrlViewerService } from './url-viewer.service';

export interface EditMode {
  inEdit: boolean;
  currentEditing: string;
  coverEdit: {
    selectOptions: boolean;
    selectedOption: string;
    processingCover: boolean;
  }
  avatarEdit: any
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
export class EditProfileService {

  service: CrudService;
  crudprovider: CrudProvider;
  urlViewerService: UrlViewerService;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  imageCompress: NgxImageCompressService;
  public PROFILE: Profile = new Profile();
  loading_profile: boolean = false;
  cover_preview_info: PreviewPicture = { url: '', width: 0, height: 0, file: null, isNew: true };
  avatar_preview_info: PreviewPicture = { url: '', width: 0, height: 0, file: null, isNew: true };
  editMode: EditMode = { inEdit: false, currentEditing: '', coverEdit: { selectOptions: false, selectedOption: '', processingCover: false }, avatarEdit: { selectOptions: false, selectedOption: '', processingAvatar: false } }

  constructor(service: CrudService, urlViewerService: UrlViewerService, imageCompress: NgxImageCompressService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router) {
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.imageCompress = imageCompress;
    this.urlViewerService = urlViewerService;
  }


  editCover() {
    this.editMode.inEdit = true;
    this.editMode.currentEditing = 'profileCover';
    this.editMode.coverEdit.selectOptions = true;
  }

  cancelEditCover() {
    this.editMode.inEdit = false;
    this.editMode.currentEditing = '';
    this.editMode.coverEdit.selectOptions = false;
    this.editMode.coverEdit.selectedOption = '';
  }


  editAvatar() {
    this.editMode.inEdit = true;
    this.editMode.currentEditing = 'profileAvatar';
    this.editMode.avatarEdit.selectOptions = true;
  }

  cancelEditAvatar() {
    this.editMode.inEdit = false;
    this.editMode.currentEditing = '';
    this.editMode.avatarEdit.selectOptions = false;
    this.editMode.avatarEdit.selectedOption = '';
  }

  saveProfileCover(base64CoverUri: any) {
    var _this = this;
    var cropped_image = this.DataUrlToFile(base64CoverUri);
    this.errors = this.messages = [];
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-cover/';

    if (this.cover_preview_info.isNew == true && this.cover_preview_info.file != null) {
      formData.append("ProfileCoverForm[org_image]", this.cover_preview_info.file);
    }
    formData.append("ProfileCoverForm[image]", cropped_image);
    formData.append("wh_ratio",0);

      this.service.update(this.provider, formData, {}).subscribe(function (result) {
        _this.submitted = false;
        if (result.isSuccess()) {
          _this.messages = result.getMessages();
          var data = result.getResultData();
          console.log(data);
          _this.urlViewerService.PPVIEWER.profile.cover.picture = base64CoverUri;
        } else {
          _this.errors = result.getErrors();
        }
      });

    this.cancelEditCover();
  }

  saveProfileAvatar(base64AvatarUri: any) {
    var _this = this;
    var cropped_image = this.DataUrlToFile(base64AvatarUri);
    this.errors = this.messages = [];
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-avatar/';

    if (this.avatar_preview_info.isNew == true && this.avatar_preview_info.file != null) {
      formData.append("ProfileAvatarForm[org_image]", this.avatar_preview_info.file);
    }
    formData.append("ProfileAvatarForm[image]", cropped_image);
    formData.append("wh_ratio",0);

      this.service.update(this.provider, formData, {}).subscribe(function (result) {
        _this.submitted = false;
        if (result.isSuccess()) {
          _this.messages = result.getMessages();
          var data = result.getResultData();
          console.log(data);
          _this.urlViewerService.PPVIEWER.profile.avatar.face = base64AvatarUri;
        } else {
          _this.errors = result.getErrors();
        }
      });

    this.cancelEditAvatar();
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

  onSelectAvatarFile(event) {
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
        this.editMode.coverEdit.selectedOption = 'UploadAvatar';
        this.PreviewCover(<File>f);
      }
    }
  }

  UploadCoverFile() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      //this.imgResultBeforeCompress = image;
      //console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          this.editMode.coverEdit.selectOptions = false;
          this.editMode.coverEdit.selectedOption = 'UploadCover';
          this.PreviewCompressedCover(result);
          //this.PreviewCover(this.DataUrlToFile(result));
          //this.imgResultAfterCompress = result;
          //console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
        }
      );
    });
  }

  UploadAvatarFile() {
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      //this.imgResultBeforeCompress = image;
      //console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          this.editMode.avatarEdit.selectOptions = false;
          this.editMode.avatarEdit.selectedOption = 'UploadAvatar';
          this.PreviewCompressedAvatar(result);
          //this.PreviewCover(this.DataUrlToFile(result));
          //this.imgResultAfterCompress = result;
          //console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
        }
      );
    });
  }

  PreviewCompressedCover(loadedUrl: string) {
    if (loadedUrl != '') {
      this.editMode.coverEdit.processingCover = true;
      var loadedImage = new Image();
      loadedImage.onload = (event) => {
        if (event) {
          var imgFile = this.DataUrlToFile(loadedUrl);
          this.cover_preview_info = { url: loadedUrl, width: loadedImage.width, height: loadedImage.height, file: imgFile, isNew: true };
        }
      }
      loadedImage.src = loadedUrl;
    }
    this.editMode.coverEdit.processingCover = false;
  }


  PreviewCompressedAvatar(loadedUrl: string) {
    if (loadedUrl != '') {
      this.editMode.avatarEdit.processingAvatar = true;
      var loadedImage = new Image();
      loadedImage.onload = (event) => {
        if (event) {
          var imgFile = this.DataUrlToFile(loadedUrl);
          this.avatar_preview_info = { url: loadedUrl, width: loadedImage.width, height: loadedImage.height, file: imgFile, isNew: true };
        }
      }
      loadedImage.src = loadedUrl;
    }
    this.editMode.avatarEdit.processingAvatar = false;
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


  DataUrlToFile(ImageURL: string): File {

    //var ImageURL = "data:image/gif;base64,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";
    // Split the base64 string in data and contentType
    var block = ImageURL.split(";");
    // Get the content type of the image
    var contentType = block[0].split(":")[1];// In this case "image/gif"
    // get the real base64 content of the file
    var imageBase64 = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
    var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."

    // Naming the image
    const date = new Date().valueOf();
    let text = '';
    const possibleText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possibleText.charAt(Math.floor(Math.random() * possibleText.length));
    }
    // Replace extension according to your media type
    const imageName = date + '-' + text + '.' + contentType.split("/")[1];
    console.log('File Name is ' + imageName);
    //contentType = 'image/jpeg';

    // Convert it to a blob
    //var blob = this.b64toBlob(realData, contentType);
    var blob = this.dataURItoBlob(ImageURL);

    var file = new File([blob], imageName, { type: blob.type });
    return file;
  }

  /*
  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  */

  dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    //New Code
    return new Blob([ab], { type: mimeString });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  };
}
