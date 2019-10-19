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
import { PrivacySettings } from '@app/models/settings/privacy-settings';
import { UtilitiesService } from '@app/services/utilities.service';
import { ProfileService } from '@app/services/profile.service';
import { SettingsService } from '../services/settings.service';


export class POPTIONS{
  key:string;
  value:string;
}

@Component({
  selector: 'app-privacy-security',
  templateUrl: './privacy-security.component.html',
  styleUrls: ['./privacy-security.component.scss']
})
export class PrivacySecurityComponent implements OnInit {
  title:string="Privacy Settings";
  parent_route:string="settings";
  missionModel:any={};
  privacyGroup: FormGroup;
  careerGroup: FormGroup;
  missionGroup: FormGroup;
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
  resending_code:boolean=false;
  selectedLocation:Country=new Country();
  privacy_settings:PrivacySettings=new PrivacySettings();
  utilitiesService:UtilitiesService;
  profileService:ProfileService;
  settingsService:SettingsService;
  parameters:any={};

  privacy_options:POPTIONS[]=[{key:'Everyone',value:'Everyone'},{key:'Network',value:'My Network'}, {key:'OnlyMe',value:'OnlyMe'} ];
  privacy_options2:POPTIONS[]=[{key:'Everyone',value:'Everyone'},{key:'2nd level Connections',value:'2nd level Connections'} ];

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
    this.privacyGroup = this.formBuilder.group({
      show_email_to: ['', [Validators.required]],
      show_posts_to: ['', [Validators.required]],
      show_phone_to: ['', [Validators.required]],
      show_online_status_to: ['', [Validators.required]],
      show_birthdate_to: ['', [Validators.required]],
      who_send_request: ['', [Validators.required]],
      who_post_onwall: ['', [Validators.required]]      
  });
  }

  get f() { return this.privacyGroup.controls; }


  save(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.privacyGroup.invalid) {
      return;
    }
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'settings/privacy/';
    this.service.update(this.provider, this.settingsService.privacy_settings, this.parameters).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var res = result.getResultData();
        if (res.done) {
          _this.settingsService.privacy_settings=res.data as PrivacySettings;
          _this.settingsService.SETTINGS.PrivacySettings=res.data as PrivacySettings;
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
