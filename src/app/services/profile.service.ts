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
import { PageProfileViewer } from '@app/models/page-profile-viewer';


@Injectable()
export class ProfileService {

    service: CrudService;
    crudprovider: CrudProvider;
    protected crudconfig: {};
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    provider: string;
    submitted: boolean;
    errors: string[];
    messages: string[];
    public MYPROFILE: MyProfile = null;
    loading_myprofile: boolean = false;

    constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router) {
        this.service = service;
        this.crudconfig = CRUD_OPTIONS;
        this.router = router;
        this.loading_myprofile = true;
        this.getMyProfile().subscribe(profile => {
            this.MYPROFILE = profile.getResultData() as MyProfile;
            this.loading_myprofile = false;
            if (this.MYPROFILE.init.status == false) {
                this.router.navigateByUrl('start');
            }
        });
    }

    getMyProfile(params?: {}): any {
        this.provider = this.getConfigValue('forms.getone.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'profile/my-profile/';
        return this.service.getone(this.provider, params);
    }

    getConfigValue(key: string): any {
        return getDeepFromObject(this.crudconfig, key, null);
    };
}
