import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Router } from '@angular/router';
import { Locations } from '@app/@crud/models/locations';
import { Question } from '@app/@crud/models/question-model';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';


@Injectable()
export class UtilitiesService {
    locations: Locations[];
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
    questions: Question[];
    SuggestedSkills: any[] = [];
    SuggestedIndutries: any[] = [];

    constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router) {
        this.service = service;
        this.crudconfig = CRUD_OPTIONS;
        this.router = router;
        this.loadSuggestedIndustries();
        this.loadSuggestedSkills();
    }

    loadSuggestedSkills() {
        this.getSkills({}).subscribe(results => {
            this.SuggestedSkills = results.getResultData();
        });
    }

    loadSuggestedIndustries() {
        this.getIndustries({}).subscribe(results => {
            this.SuggestedIndutries = results.getResultData();
        });
    }

    getLocations(): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'locations/';
        var _this = this;
        return this.service.getall(this.provider, this.locations);
    }

    getCities(params: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'cities/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getCountries(params: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'utilities/countries/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getSkills(params: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'utilities/skills/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getIndustries(params: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'utilities/industries/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getLanguages(): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'languages/';
        var _this = this;
        return this.service.getall(this.provider, this.locations);
    }

    getServiceCategories(params?: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'service-categories/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getMyquestions(params?: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'my-questions/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getQuestion(params: {}): any {
        this.provider = this.getConfigValue('forms.getone.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'questions/';
        var _this = this;
        return this.service.getone(this.provider, params);
    }

    getQuestions(params: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'questions/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getAnsweredQuestion(params?: {}): any {
        this.provider = this.getConfigValue('forms.getone.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'answered-questions/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getRecommendedQuestions(params: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'lawyer/recommended-questions/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getMyProfile(params?: {}): any {
        this.provider = this.getConfigValue('forms.getone.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'my-profile/';
        var _this = this;
        return this.service.getone(this.provider, params);
    }


    getProfile(params?: {}): any {
        this.provider = this.getConfigValue('forms.getone.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'profile/';
        var _this = this;
        return this.service.getone(this.provider, params);
    }

    getStartModel(params?: {}): any {
        this.provider = this.getConfigValue('forms.getone.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'start/';
        var _this = this;
        return this.service.getone(this.provider, params);
    }

    getMybookings(params?: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'client/my-bookings/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getMybooking(params?: {}): any {
        this.provider = this.getConfigValue('forms.getone.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'client/my-bookings/';
        var _this = this;
        return this.service.getone(this.provider, params);
    }


    getConsultations(params?: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'lawyer/my-consultations/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }


    getConfirmBooking(params?: {}): any {
        this.provider = this.getConfigValue('forms.getone.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'confirm-booking/';
        var _this = this;
        return this.service.getone(this.provider, params);
    }



    getBids(params?: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'client/bids/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getOpportunities(params?: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'lawyer/opportunities/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getNotifications(params?: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'notifications/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getRatingsNames(params?: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'rating-names/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }
    getHearedFrom(params?: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'heared-from/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }


    getConfigValue(key: string): any {
        return getDeepFromObject(this.crudconfig, key, null);
    };
}
