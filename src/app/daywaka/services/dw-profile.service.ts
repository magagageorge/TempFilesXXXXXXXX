import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService, CRUD_OPTIONS, CrudOptions } from '@app/@crud';
import { BehaviorSubject, Observable } from 'rxjs';
import { DwJobPreferences } from '../models/job.model';

export interface EditMode {
  inEdit: boolean;
  currentEditing: string;
  job_preferences: {
    action: string;
    processingJobPreferences: boolean;
  }
}

export interface DeleteMode {
  inDelete: boolean;
  currentDeleting: string;
  job_preferences: {
    action: string;
    processingJobPreferences: boolean;
  }
}

export interface PreviewPicture {
  url: string;
  width: number;
  height: number;
  file: File;
  isNew: boolean;
}

@Injectable()
export class DwProfileService {

  protected crudconfig: {};
  protected router: Router;
  MY_DAYWAKA_PROFILE: any = null;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  loading_myprofile: boolean = false;
  editMode: EditMode = { inEdit: false, currentEditing: '', job_preferences: { action: '', processingJobPreferences: false } };
  deleteMode: DeleteMode = { inDelete: false, currentDeleting: '', job_preferences: { action: '', processingJobPreferences: false } };

  constructor(public service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router) {
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.provider = this.getConfigValue('forms.daywaka.provider');
    this.loading_myprofile = true;
    this.getMyDwProfile().subscribe(profile => {
      this.MY_DAYWAKA_PROFILE = profile.getResultData();
      this.loading_myprofile = false;
    });
  }

  getMyDwProfile(params?: {}): any {
    this.service.getProvider(this.provider).crudconfig.route_url = 'daywaka/my-dw-profile/';
    return this.service.getone(this.provider, params);
  }

  getDwProfile(params?: {}): any {
    this.service.getProvider(this.provider).crudconfig.route_url = 'daywaka/dw-profile/';
    return this.service.getone(this.provider, params);
  }

  getJobCategories(params?: {}): any {
    this.service.getProvider(this.provider).crudconfig.route_url = 'daywaka/my-job-preferences/';
    return this.service.getall(this.provider, params);
  }

  EditJobPreferences() {
    this.editMode.currentEditing = 'JobPreferences';
    this.editMode.job_preferences.action = 'editJobPreferences';
    this.editMode.inEdit = true;
  }

  AddJobPreferences() {
    this.editMode.currentEditing = 'JobPreferences';
    this.editMode.job_preferences.action = 'addJobPreferences';
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

  saveJobPreferences(preferences: any[]) {
    var _this = this;
    const formData: any = new FormData();
    this.service.getProvider(this.provider).crudconfig.route_url = 'daywaka/my-job-preferences/';
    formData.append("job_preferences", JSON.stringify(preferences));
    //this.loadProcessService.submittingData = true;
    this.service.create(this.provider, formData, {}).subscribe(function (result) {
      // _this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        var resp = result.getResultData();
        _this.MY_DAYWAKA_PROFILE.job_preferences = resp.data as DwJobPreferences[];
      } else {
        //_this.errors = result.getErrors();
      }
    });
  }

  deleteJobPreferences(preferences: any[]) {
    var _this = this;
    const formData: any = new FormData();
    this.service.getProvider(this.provider).crudconfig.route_url = 'daywaka/my-job-preferences/';
    formData.append("job_preferences", JSON.stringify(preferences));
    //this.loadProcessService.submittingData = true;
    this.service.update(this.provider, formData, {}).subscribe(function (result) {
      //_this.loadProcessService.submittingData = false;
      if (result.isSuccess()) {
        preferences.forEach(preference => {
          _this.MY_DAYWAKA_PROFILE.job_preferences = _this.MY_DAYWAKA_PROFILE.job_preferences.filter((x: any) => x.id !== preference.id);
        });

      } else {
        //_this.errors = result.getErrors();
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }
}
