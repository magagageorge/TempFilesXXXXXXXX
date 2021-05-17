import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Observable, of as observableOf, Observer } from 'rxjs';
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
import { ProfileService } from './profile.service';
import { ProfileEducation } from '@app/models/profile/profile-education';
import { WorkExperience } from '@app/models/profile/work-experience';
import { LoadSubmitProgressService } from './load-submit-progress.service';
import { ProfileIndustry } from '@app/models/profile-industry';
import { ProfileSkill } from '@app/models/profile-skill';
import { HttpClient } from '@angular/common/http';
import { SysFunctions } from '@app/libs/utilities/common-functions';
import { FeedService } from './feed.service';
import { ProfileFeedService } from '@app/viewer/profile/services/profile-feed.service';
import { ProfileLanguage } from '@app/models/profile/profile-models';

export interface EditMode {
  inEdit: boolean;
  currentEditing: string;
  coverEdit: {
    selectOptions: boolean;
    selectedOption: string;
    processingCover: boolean;
  }
  avatarEdit: {
    selectOptions: boolean;
    selectedOption: string;
    processingAvatar: boolean;
  },
  experience: {
    action: string;
    inEditData: WorkExperience;
    processingExperience: boolean;
  },
  education: {
    action: string;
    inEditData: ProfileEducation;
    processingEducation: boolean;
  },
  skills: {
    action: string;
    processingSkills: boolean;
  },
  languages: {
    action: string;
    processingLanguages: boolean;
  },
  industries: {
    action: string;
    processingIndustries: boolean;
  }
}

export interface DeleteMode {
  inDelete: boolean;
  currentDeleting: string;
  experience: {
    action: string;
    inDeleteData: WorkExperience;
    processingExperience: boolean;
  },
  education: {
    action: string;
    inDeleteData: ProfileEducation;
    processingEducation: boolean;
  },
  skills: {
    action: string;
    processingSkills: boolean;
  },
  languages: {
    action: string;
    processingLanguages: boolean;
  }, 
  industries: {
    action: string;
    processingIndustries: boolean;
  }
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
  profileService: ProfileService;
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
  public PROFILE: Profile = new Profile();
  loading_profile: boolean = false;
  cover_preview_info: PreviewPicture = { url: '', width: 0, height: 0, file: null, isNew: true };
  avatar_preview_info: PreviewPicture = { url: '', width: 0, height: 0, file: null, isNew: true };
  editMode: EditMode = { inEdit: false, currentEditing: '', coverEdit: { selectOptions: false, selectedOption: '', processingCover: false }, avatarEdit: { selectOptions: false, selectedOption: '', processingAvatar: false }, education: { action: '', processingEducation: false, inEditData: new ProfileEducation() }, experience: { action: '', processingExperience: false, inEditData: new WorkExperience() }, skills: { action: '', processingSkills: false },languages: { action: '', processingLanguages: false }, industries: { action: '', processingIndustries: false } };
  deleteMode: DeleteMode = { inDelete: false, currentDeleting: '', education: { action: '', processingEducation: false, inDeleteData: new ProfileEducation() }, experience: { action: '', processingExperience: false, inDeleteData: new WorkExperience() }, skills: { action: '', processingSkills: false },languages: { action: '', processingLanguages: false }, industries: { action: '', processingIndustries: false } };
  uploadingImage: boolean = false;
  processingImage: boolean = false;
  loadingImage: boolean = false;


  constructor(service: CrudService, profileService: ProfileService, public feedService: FeedService, public profileFeedService: ProfileFeedService, urlViewerService: UrlViewerService, loadProcessService: LoadSubmitProgressService, imageCompress: NgxImageCompressService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router, httpClient: HttpClient) {
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.httpClient = httpClient;
    this.imageCompress = imageCompress;
    this.urlViewerService = urlViewerService;
    this.profileService = profileService;
    this.loadProcessService = loadProcessService;
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
    this.uploadingImage = true;
    var cropped_image = SysFunctions.DataUrlToFile(base64CoverUri);
    this.errors = this.messages = [];
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-cover/';
    if (this.cover_preview_info.isNew == true && this.cover_preview_info.file != null) {
      formData.append("ProfileCoverForm[org_image]", this.cover_preview_info.file);
    }
    formData.append("ProfileCoverForm[image]", cropped_image);
    formData.append("wh_ratio", 0);

    this.service.update(this.provider, formData, {}).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var data = result.getResultData();
        if (data.done == true) {
          _this.profileService.MYPROFILE.cover.picture = base64CoverUri;
          _this.profileService.MYPROFILE.cover.show_alert = false;
          _this.urlViewerService.PPVIEWER.profile.cover.picture = base64CoverUri;
          _this.cover_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
          if (data.post != null) {
            _this.feedService.prependFeed(data.post, false);
            if (data.post.profile != null && data.post.profile.url == _this.profileFeedService.profile_url) {
              _this.profileFeedService.prependFeed(data.post, false);
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

  saveProfileAvatar(base64AvatarUri: any) {
    var _this = this;
    this.uploadingImage = true;
    var cropped_image = SysFunctions.DataUrlToFile(base64AvatarUri);
    this.errors = this.messages = [];
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-avatar/';

    if (this.avatar_preview_info.isNew == true && this.avatar_preview_info.file != null) {
      formData.append("ProfileAvatarForm[org_image]", this.avatar_preview_info.file);
    }
    formData.append("ProfileAvatarForm[image]", cropped_image);
    formData.append("wh_ratio", 0);

    this.service.update(this.provider, formData, {}).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var data = result.getResultData();
        if (data.done == true) {
          _this.profileService.MYPROFILE.avatar.face = base64AvatarUri;
          _this.profileService.MYPROFILE.avatar.show_alert = false;
          _this.urlViewerService.PPVIEWER.profile.avatar.face = base64AvatarUri;
          _this.avatar_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
          if (data.post != null) {
            _this.feedService.prependFeed(data.post, false);
            if (data.post.profile != null && data.post.profile.url == _this.profileFeedService.profile_url) {
              _this.profileFeedService.prependFeed(data.post, false);
            }
          }
        }
      } else {
        _this.errors = result.getErrors();
      }
      _this.uploadingImage = false;
    });

    this.cancelEditAvatar();
  }

  postponeAddingAvatar() {
    var _this = this;
    this.errors = this.messages = [];
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-avatar/';
    this.profileService.MYPROFILE.avatar.show_alert = false;
    formData.append("SkipAddAvatar", true);
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
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-cover/';
    this.profileService.MYPROFILE.cover.show_alert = false;
    formData.append("SkipAddCover", true);
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
    var _this = this;
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      _this.processingImage = true;
      SysFunctions.getImageCompressionRates(image, 'PROFILE_COVER').then(rts => {
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

  RepositionProfileCover(ImgUrl: string) {
    this.cover_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
    this.editMode.coverEdit.selectOptions = false;
    this.editMode.coverEdit.selectedOption = 'RepositionCover';
    this.PreviewCompressedCover(ImgUrl, 'url');
  }

  UploadAvatarFile() {
    var _this = this;
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      _this.processingImage = true;
      SysFunctions.getImageCompressionRates(image, 'PROFILE_PICTURE').then(rts => {
        this.imageCompress.compressFile(image, orientation, rts.ratio, rts.quality).then(
          result => {
            _this.avatar_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
            _this.editMode.avatarEdit.selectOptions = false;
            _this.editMode.avatarEdit.selectedOption = 'UploadAvatar';
            _this.processingImage = false;
            _this.PreviewCompressedAvatar(result, 'base64');
          }
        );
      });
    });
  }

  RepositionProfileAvatar(ImgUrl: string) {
    this.avatar_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
    this.editMode.avatarEdit.selectOptions = false;
    this.editMode.avatarEdit.selectedOption = 'RepositionAvatar';
    this.PreviewCompressedAvatar(ImgUrl, 'url');
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

  PreviewCompressedAvatar(loadedUrl: string, urlType: string) {
    var _this = this;
    if (loadedUrl != '') {
      this.loadingImage = true;
      this.editMode.avatarEdit.processingAvatar = true;
      var loadedImage = new Image();
      loadedImage.setAttribute('crossorigin', 'anonymous'); // works for me
      var base64Url = '';
      loadedImage.onload = (event) => {
        if (event) {
          if (urlType == 'base64') {
            var imgFile = SysFunctions.DataUrlToFile(loadedUrl);
            base64Url = loadedUrl;
            _this.avatar_preview_info = { url: base64Url, width: loadedImage.width, height: loadedImage.height, file: imgFile, isNew: true };
            _this.loadingImage = false;
          } else {
            SysFunctions.ImageUrlToBlob(loadedUrl).subscribe(blob => {
              SysFunctions.BlobtoDataURL(blob).then(base64Url => {
                var imgFile = SysFunctions.DataUrlToFile(base64Url);
                _this.avatar_preview_info = { url: base64Url, width: loadedImage.width, height: loadedImage.height, file: imgFile, isNew: true };
                _this.loadingImage = false;
              });
            });
          }
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

  /* Top Profile Card */
  EditTopProfileCard() {
    this.editMode.currentEditing = 'topProfileCard'
    this.editMode.inEdit = true;
  }

  cancelEditTopProfileCard() {
    this.editMode.inEdit = false;
    this.editMode.currentEditing = '';
  }

  saveProfileInfo(profileModel: any): Observable<any> {
    var _this = this;
    this.errors = this.messages = [];
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile/';
    return Observable.create((observer) => {
      this.loadProcessService.submittingData = true;
      return this.service.update(this.provider, profileModel, {}).subscribe(result => {
        _this.loadProcessService.submittingData = false;
        if (result.isSuccess()) {
          _this.messages = result.getMessages();
          var data = result.getResultData();
          if (data.done) {
            _this.UpdateLocalProfileInfo(data.profile as MyProfile);
          }
        } else {
          _this.errors = result.getErrors();
        }
      });
    })
  }

  EditProfileAbout() {
    this.editMode.currentEditing = 'ProfileAbout';
    this.editMode.inEdit = true;
  }

  cancelEditProfile() {
    this.editMode.inEdit = false;
    this.editMode.currentEditing = '';
  }

  cancelDeleteProfile() {
    this.deleteMode.inDelete = false;
    this.deleteMode.currentDeleting = '';
  }

  AddProfileEducation() {
    this.editMode.currentEditing = 'ProfileEducation';
    this.editMode.education.action = 'add';
    this.editMode.inEdit = true;
  }

  EditProfileEducation(education: ProfileEducation) {
    this.editMode.currentEditing = 'ProfileEducation';
    this.editMode.education.action = 'edit';
    this.editMode.education.inEditData = education;
    this.editMode.inEdit = true;
  }

  ConfirmDeleteProfileEducation(education: ProfileEducation) {
    this.deleteMode.currentDeleting = 'education';
    this.deleteMode.education.inDeleteData = education;
    this.deleteMode.education.action = 'delete';
    this.deleteMode.inDelete = true;
  }


  AddProfileExperience() {
    this.editMode.currentEditing = 'ProfileExperience';
    this.editMode.experience.action = 'add';
    this.editMode.inEdit = true;
  }

  EditProfileExperience(experience: WorkExperience) {
    this.editMode.currentEditing = 'ProfileExperience';
    this.editMode.experience.action = 'edit';
    this.editMode.experience.inEditData = experience;
    this.editMode.inEdit = true;
  }

  ConfirmDeleteProfileExperience(experience: WorkExperience) {
    this.deleteMode.currentDeleting = 'experience';
    this.deleteMode.experience.inDeleteData = experience;
    this.deleteMode.experience.action = 'delete';
    this.deleteMode.inDelete = true;
  }

  EditProfileDealingWith() {
    this.editMode.currentEditing = 'ProfileIndustries';
    this.editMode.industries.action = 'editIndustries';
    this.editMode.inEdit = true;
  }

  AddProfileDealingWith() {
    this.editMode.currentEditing = 'ProfileIndustries';
    this.editMode.industries.action = 'addIndustries';
    this.editMode.inEdit = true;
  }

  EditProfileSkills() {
    this.editMode.currentEditing = 'ProfileSkills';
    this.editMode.skills.action = 'editSkills';
    this.editMode.inEdit = true;
  }

  AddProfileSkills() {
    this.editMode.currentEditing = 'ProfileSkills';
    this.editMode.skills.action = 'addSkills';
    this.editMode.inEdit = true;
  }

  EditProfileLanguages() {
    this.editMode.currentEditing = 'ProfileLanguages';
    this.editMode.languages.action = 'editLanguages';
    this.editMode.inEdit = true;
  }

  AddProfileLanguages() {
    this.editMode.currentEditing = 'ProfileLanguages';
    this.editMode.languages.action = 'addLanguages';
    this.editMode.inEdit = true;
  }

  saveProfileEducation(educationModel: ProfileEducation) {
    var _this = this;
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-education/';
    this.loadProcessService.submittingData = true;
    this.service.create(this.provider, educationModel, {}).subscribe(function (result) {
      _this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var resp = result.getResultData();
        if (_this.isMyProfileInEdit()) {
          _this.urlViewerService.PPVIEWER.profile.educations.push(resp.data as ProfileEducation);
        }
        _this.profileService.MYPROFILE.educations.push(resp.data as ProfileEducation);
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  updateProfileEducation(educationModel: ProfileEducation) {
    var _this = this;
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-education/';
    this.loadProcessService.submittingData = true;
    this.service.update(this.provider, educationModel, { id: educationModel.id }).subscribe(function (result) {
      _this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var resp = result.getResultData();
        if (_this.isMyProfileInEdit()) {
          _this.urlViewerService.PPVIEWER.profile.educations = _this.urlViewerService.PPVIEWER.profile.educations.filter((x: ProfileEducation) => x.id !== educationModel.id);
          _this.urlViewerService.PPVIEWER.profile.educations.unshift(resp.data as ProfileEducation);
        }
        _this.profileService.MYPROFILE.educations = _this.profileService.MYPROFILE.educations.filter((x: ProfileEducation) => x.id !== educationModel.id);
        _this.profileService.MYPROFILE.educations.unshift(resp.data as ProfileEducation);
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  deleteProfileEducation(Id: number) {
    var _this = this;
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-education/';
    this.loadProcessService.processingRequest = true;
    this.service.delete(this.provider, { id: Id }).subscribe(function (result) {
      _this.loadProcessService.processingRequest = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        if (_this.isMyProfileInEdit()) {
          _this.urlViewerService.PPVIEWER.profile.educations = _this.urlViewerService.PPVIEWER.profile.educations.filter((x: ProfileEducation) => x.id !== Id);
        }
        _this.profileService.MYPROFILE.educations = _this.profileService.MYPROFILE.educations.filter((x: ProfileEducation) => x.id !== Id);
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  saveWorkExperience(experienceModel: WorkExperience) {
    var _this = this;
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-experience/';
    this.loadProcessService.submittingData = true;
    this.service.create(this.provider, experienceModel, {}).subscribe(function (result) {
      _this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var resp = result.getResultData();
        if (_this.isMyProfileInEdit()) {
          _this.urlViewerService.PPVIEWER.profile.experiences.push(resp.data as WorkExperience);
        }
        _this.profileService.MYPROFILE.experiences.push(resp.data as WorkExperience);
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  updateWorkExperience(experienceModel: WorkExperience) {
    var _this = this;
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-experience/';
    this.loadProcessService.submittingData = true;
    this.service.update(this.provider, experienceModel, { id: experienceModel.id }).subscribe(function (result) {
      _this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var resp = result.getResultData();
        if (_this.isMyProfileInEdit()) {
          _this.urlViewerService.PPVIEWER.profile.experiences = _this.urlViewerService.PPVIEWER.profile.experiences.filter((x: WorkExperience) => x.id !== experienceModel.id);
          _this.urlViewerService.PPVIEWER.profile.experiences.unshift(resp.data as WorkExperience);
        }
        _this.profileService.MYPROFILE.experiences = _this.profileService.MYPROFILE.experiences.filter((x: WorkExperience) => x.id !== experienceModel.id);
        _this.profileService.MYPROFILE.experiences.unshift(resp.data as WorkExperience);

      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  deleteWorkExperience(Id: number) {
    var _this = this;
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-experience/';
    this.loadProcessService.processingRequest = true;
    this.service.delete(this.provider, { id: Id }).subscribe(function (result) {
      _this.loadProcessService.processingRequest = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        if (_this.isMyProfileInEdit()) {
          _this.urlViewerService.PPVIEWER.profile.experiences = _this.urlViewerService.PPVIEWER.profile.experiences.filter((x: WorkExperience) => x.id !== Id);
        }
        _this.profileService.MYPROFILE.experiences = _this.profileService.MYPROFILE.experiences.filter((x: WorkExperience) => x.id !== Id);
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  saveProfileSkills(skills: any[]) {
    var _this = this;
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-skills/';
    formData.append("profile_skills", JSON.stringify(skills));
    this.loadProcessService.submittingData = true;
    this.service.create(this.provider, formData, {}).subscribe(function (result) {
      _this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var resp = result.getResultData();
        if (_this.isMyProfileInEdit()) {
          _this.urlViewerService.PPVIEWER.profile.skills = resp.data as ProfileSkill[];
        }
        _this.profileService.MYPROFILE.skills = resp.data as ProfileSkill[];
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  deleteProfileSkills(skills: any[]) {
    var _this = this;
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-skills/';
    formData.append("profile_skills", JSON.stringify(skills));
    this.loadProcessService.submittingData = true;
    this.service.update(this.provider, formData, {}).subscribe(function (result) {
      _this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        if (_this.isMyProfileInEdit()) {
          skills.forEach(skill => {
            _this.urlViewerService.PPVIEWER.profile.skills = _this.urlViewerService.PPVIEWER.profile.skills.filter((x: any) => x.id !== skill.id);
          });
        }
        skills.forEach(skill => {
          _this.profileService.MYPROFILE.skills = _this.profileService.MYPROFILE.skills.filter((x: any) => x.id !== skill.id);
        });

      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  saveProfileLanguages(languages: any[]) {
    var _this = this;
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-languages/';
    formData.append("profile_languages", JSON.stringify(languages));
    this.loadProcessService.submittingData = true;
    this.service.create(this.provider, formData, {}).subscribe(function (result) {
      _this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var resp = result.getResultData();
        if (_this.isMyProfileInEdit()) {
          _this.urlViewerService.PPVIEWER.profile.languages = resp.data as ProfileLanguage[];
        }
        _this.profileService.MYPROFILE.languages = resp.data as ProfileLanguage[];
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  deleteProfileLanguages(languages: any[]) {
    var _this = this;
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-languages/';
    formData.append("profile_languages", JSON.stringify(languages));
    this.loadProcessService.submittingData = true;
    this.service.update(this.provider, formData, {}).subscribe(function (result) {
      _this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        if (_this.isMyProfileInEdit()) {
          languages.forEach(language => {
            _this.urlViewerService.PPVIEWER.profile.languages = _this.urlViewerService.PPVIEWER.profile.languages.filter((x: any) => x.id !== language.id);
          });
        }
        languages.forEach(language => {
          _this.profileService.MYPROFILE.languages = _this.profileService.MYPROFILE.languages.filter((x: any) => x.id !== language.id);
        });

      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  saveProfileIndustries(industries: any[]) {
    var _this = this;
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-industries/';
    formData.append("profile_industries", JSON.stringify(industries));
    this.loadProcessService.submittingData = true;
    this.service.create(this.provider, formData, {}).subscribe(function (result) {
      _this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var resp = result.getResultData();
        if (_this.isMyProfileInEdit()) {
          _this.urlViewerService.PPVIEWER.profile.dealing = resp.data as ProfileIndustry[];
        }
        _this.profileService.MYPROFILE.dealing = resp.data as ProfileIndustry[];

      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  deleteProfileIndustries(industries: any[]) {
    var _this = this;
    const formData: any = new FormData();
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile-industries/';
    formData.append("profile_industries", JSON.stringify(industries));
    this.loadProcessService.submittingData = true;
    this.service.update(this.provider, formData, {}).subscribe(function (result) {
      _this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        if (_this.isMyProfileInEdit()) {
          industries.forEach(industry => {
            _this.urlViewerService.PPVIEWER.profile.dealing = _this.urlViewerService.PPVIEWER.profile.dealing.filter((x: any) => x.id !== industry.id);
          });
        }
        industries.forEach(industry => {
          _this.profileService.MYPROFILE.dealing = _this.profileService.MYPROFILE.dealing.filter((x: any) => x.id !== industry.id);
        });

      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  isMyProfileInEdit(): boolean {
    if (this.urlViewerService.PPVIEWER.profile && (this.urlViewerService.PPVIEWER.profile.url == this.profileService.MYPROFILE.url)) {
      return true;
    }
    return false;
  }

  UpdateLocalProfileInfo(profile: MyProfile) {
    if (this.isMyProfileInEdit()) {
      this.urlViewerService.PPVIEWER.profile.firstname = profile.firstname
      this.urlViewerService.PPVIEWER.profile.lastname = profile.lastname;
      this.urlViewerService.PPVIEWER.profile.title = profile.title;
      this.urlViewerService.PPVIEWER.profile.url = profile.url;
      this.urlViewerService.PPVIEWER.profile.city = profile.city;
      this.urlViewerService.PPVIEWER.profile.country = profile.country;
      this.urlViewerService.PPVIEWER.profile.gender = profile.gender;
      this.urlViewerService.PPVIEWER.profile.language = profile.language;
      this.urlViewerService.PPVIEWER.profile.location = profile.location;
      this.urlViewerService.PPVIEWER.profile.name = profile.name;
      this.urlViewerService.PPVIEWER.profile.timezone = profile.timezone;
      this.urlViewerService.PPVIEWER.profile.about = profile.about;
      this.urlViewerService.PPVIEWER.profile.mobile = profile.mobile;
    }
    this.profileService.MYPROFILE.firstname = profile.firstname
    this.profileService.MYPROFILE.lastname = profile.lastname;
    this.profileService.MYPROFILE.title = profile.title;
    this.profileService.MYPROFILE.url = profile.url;
    this.profileService.MYPROFILE.city = profile.city;
    this.profileService.MYPROFILE.country = profile.country;
    this.profileService.MYPROFILE.gender = profile.gender;
    this.profileService.MYPROFILE.language = profile.language;
    this.profileService.MYPROFILE.location = profile.location;
    this.profileService.MYPROFILE.name = profile.name;
    this.profileService.MYPROFILE.timezone = profile.timezone;
    this.profileService.MYPROFILE.about = profile.about;
    this.profileService.MYPROFILE.mobile = profile.mobile;
    this.profileService.MYPROFILE.birth_date = profile.birth_date;
    this.profileService.MYPROFILE.birthday = profile.birthday;
    this.profileService.MYPROFILE.city_id = profile.city_id;
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  };

}
