import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings,CrudOptions, CRUD_OPTIONS,CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { Observable, of } from 'rxjs';
import { Country } from '@app/models/country';
import { MissionSettings } from '@app/models/settings/mission-settings';
import { UtilitiesService } from '@app/services/utilities.service';
import { ProfileService } from '@app/services/profile.service';
import { SettingsService } from '../services/settings.service';
import { UserPreferences } from '@app/models/settings/user-preference';


@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  title:string="Your Preferences";
  parent_route:string="settings";
  missionGroup: FormGroup;
  careerGroup: FormGroup;
  verifyGroup:FormGroup;
  protected service: CrudService;
  protected crudconfig: {};
  protected router: Router;
  showMessages: any;
  provider: string;
  errors: string[];
  messages: string[];
  submitted: boolean;
  countries:Country[]=[];
  curr_year:any;
  resultData:string[];
  str_success_code:string;	
  str_invalid_code:string;
  code_resent:boolean=false;
  parameters:any={};
  resending_code:boolean=false;
  selectedLocation:Country=new Country();
  missionModel:MissionSettings=new MissionSettings();
  utilitiesService:UtilitiesService;
  profileService:ProfileService;
  settingsService:SettingsService;
  constructor(settingsService:SettingsService,utilitiesService:UtilitiesService,profileService:ProfileService,private formBuilder: FormBuilder,service: CrudService,router: Router,@Inject(CRUD_OPTIONS) CRUD_OPTIONS:CrudOptions) {
     this.service = service;
     this.utilitiesService=utilitiesService;
     this.profileService=profileService;
     this.crudconfig = CRUD_OPTIONS;
     this.settingsService=settingsService;
     this.router = router;
     this.showMessages = {};
     this.provider = '';
     this.errors = [];
     this.messages = [];
     this.submitted = false;
     this.selectedLocation=new Country();
     this.provider = this.getConfigValue('forms.update.provider');
   }

  ngOnInit() {
    var __this=this;
    this.missionGroup = this.formBuilder.group({
      networking_entertainment: ['', [Validators.required]],
      find_sales_leads: ['', []],
      employ_someone: ['', []],
      find_job_opportunity: ['', []]     
  });
  }

  get m() { return this.missionGroup.controls; }
  
  save(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.missionGroup.invalid) {
      return;
    }
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'settings/preferences/';
    this.service.update(this.provider, this.settingsService.user_preferences, this.parameters).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var res = result.getResultData();
        if (res.done) {
          _this.settingsService.user_preferences=res.data as UserPreferences;
          _this.settingsService.SETTINGS.UserPreferences=res.data as UserPreferences;
          return;
        }
      }
      else {
        _this.errors = result.getErrors();
      }
    });
    return;
  }

filterCountry(id:any):Observable<Country>{
  return of(this.countries.find((country:Country)=>country.id==id));
}

  getConfigValue(key: string): any{
    return getDeepFromObject(this.crudconfig, key, null);
   }	

}
