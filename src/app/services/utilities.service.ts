import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Router } from '@angular/router';
import { Locations } from '@app/@crud/models/locations';
import { Question } from '@app/@crud/models/question-model';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { ReportContentType } from '@app/models/report-content-type';
import { Currency } from '@app/models/currency';
import { Country } from '@app/models/country';


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
    report_types: ReportContentType[] = [];
    currencies: Currency[] = [];
    countries: Country[] = [];
    constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router) {
        this.service = service;
        this.crudconfig = CRUD_OPTIONS;
        this.router = router;
        this.loadSuggestedIndustries();
        this.loadSuggestedSkills();
        this.loadReportTypes();
        this.loadCurrencies();
    }

    loadReportTypes() {
        this.ReportTypes().subscribe(results => {
            this.report_types = results.getResultData();
        });
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

    loadCurrencies() {
        this.getCurrencies({}).subscribe(results => {
            this.currencies = results.getResultData();
        });
    }

    ReportTypes(params?: {}) {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'feed/content-report-types/';
        return this.service.getall(this.provider, params);
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

    getCurrencies(params: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'utilities/currencies/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getSkills(params: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'utilities/skills/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getLanguages(params: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'utilities/languages/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getIndustries(params: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'utilities/industries/';
        var _this = this;
        return this.service.getall(this.provider, params);
    }

    getServiceCategories(params?: {}): any {
        this.provider = this.getConfigValue('forms.getall.provider');
        this.service.getProvider(this.provider).crudconfig.route_url = 'service-categories/';
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

    public get COUNTRIES(): Country[] {
        var __this = this;
        if (this.countries.length == 0) {
            this.getCountries({}).subscribe(results => {
                __this.countries = results.getResultData();
            });
        }
        return this.countries;
    }

    getConfigValue(key: string): any {
        return getDeepFromObject(this.crudconfig, key, null);
    };
}
