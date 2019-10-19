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
import { AccountSettings } from '@app/models/settings/account-settings';
import { UtilitiesService } from '@app/services/utilities.service';
import { ProfileService } from '@app/services/profile.service';
import { SettingsService } from '../services/settings.service';
import { PersonalContactsInfo } from '@app/models/settings/personal-contacts-info';
import { City } from '@app/models/city';


export interface PersonalForm {
  edit_name: boolean,
  edit_birthday: boolean,
  edit_gender: boolean,
  edit_location: boolean
}


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  title:string="Personal Information";
  parent_route:string="settings";
  missionModel:any={};
  accountGroup: FormGroup;
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
  parameters:any={};
  str_success_code:string;	
  str_invalid_code:string;
  code_resent:boolean=false;
  resending_code:boolean=false;
  selectedLocation:Country=new Country();
  accountModel:AccountSettings=new AccountSettings();
  utilitiesService:UtilitiesService;
  profileService:ProfileService;
  settingsService:SettingsService;
  accountForm: PersonalForm = { edit_name: false,edit_birthday: false, edit_gender: false, edit_location: false };
  Local_Account_settings:any;
  acc_gender:string='';
  acc_city_id:string='';
  acc_country_id:string='';
  acc_birthday:string='';
  acc_firstname:string='';
  acc_lastname:string='';

  stored_city_id:Number;

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
     this.loadCountries();
   }

  ngOnInit() {
    var __this=this;
    this.accountGroup = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      birthday: ['', []],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city_id: ['', [Validators.required]],  
  });
  }

  get f() { return this.accountGroup.controls; }

  correctDate(){
    if(this.accountModel.birthday.length>10){
      //this.accountModel.birthday=this.accountModel.birthday.substring(0,10);
    }
  }


  switchLocation(id: any) {
    var _this=this;
    this.filterCountry(id).subscribe((country: Country) => {
      this.selectedLocation = country;
      if(_this.acc_city_id!=''){
        _this.searchCityInSelectedCountry(Number(_this.acc_city_id)).subscribe(city=>{
            if(city){
              _this.settingsService.personal_contacts.city_id=_this.acc_city_id;
            }else{              
              _this.settingsService.personal_contacts.city_id='';
            }
        });
      }
    });
  }

  filterCountry(id: any): Observable<Country> {
    return of(this.countries.find((country: Country) => country.id == id));
  }

  loadCountries(){
    var __this=this;
    this.utilitiesService.getCountries({}).subscribe(results => {
      __this.countries = results.getResultData();
      __this.switchLocation(__this.settingsService.personal_contacts.country);
    });
  }


  searchCityInSelectedCountry(id:number):Observable<City>{
    return of(this.selectedLocation.cities.find((city: City) => city.id == id)); 
  }



  save(): void {
    this.submitted = true;
    // stop here if form is invalid
    var city:HTMLElement= document.querySelector('#inputCity');
    var country:HTMLElement= document.querySelector('#inputcountry');

    if (this.accountGroup.invalid) {
      return;
    }
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'settings/personal-info/';
    this.service.update(this.provider, this.settingsService.personal_contacts, this.parameters).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var res = result.getResultData();
        if (res.done) {
          _this.settingsService.personal_contacts=res.data as PersonalContactsInfo;
          _this.settingsService.SETTINGS.PersonalContacts=res.data as PersonalContactsInfo;
          return;
        }
      }
      else {
        _this.errors = result.getErrors();
      }
    });
    return;
  }

  FormEditName(state:boolean) {
    this.PreserveSettigns();
    this.ResetEdits();
    this.accountForm.edit_name = state;
  }

  FormEditBirthday(state:boolean) {
    this.PreserveSettigns();
    this.ResetEdits();
    this.accountForm.edit_birthday = state;
  }

  FormEditGender(state:boolean) {
    this.PreserveSettigns();
    this.ResetEdits();
    this.accountForm.edit_gender = state;
  }

  FormEditLocation(state:boolean) {
    this.PreserveSettigns();
    this.ResetEdits();
    this.accountForm.edit_location = state;
  }

  ResetEdits(){
    this.accountForm= { edit_name: false, edit_birthday: false, edit_gender: false, edit_location: false };
  }

  CanceEdit(){
    this.PreserveSettigns();
    this.ResetEdits();
    this.submitted=false;
  }

  PreserveSettigns(){ 
    if(this.accountForm.edit_name==true || this.accountForm.edit_birthday==true || this.accountForm.edit_gender==true || this.accountForm.edit_location==true){
      this.settingsService.personal_contacts.firstname=this.acc_firstname;
      this.settingsService.personal_contacts.lastname=this.acc_lastname;
      this.settingsService.personal_contacts.gender=this.acc_gender;
      this.settingsService.personal_contacts.birthday=this.acc_birthday;
      this.settingsService.personal_contacts.country=this.acc_country_id;
      this.settingsService.personal_contacts.city_id=this.acc_city_id;
    }else{
      this.acc_firstname=this.settingsService.personal_contacts.firstname;
      this.acc_lastname=this.settingsService.personal_contacts.lastname;
      this.acc_gender=this.settingsService.personal_contacts.gender;
      this.acc_birthday=this.settingsService.personal_contacts.birthday;
      this.acc_country_id=this.settingsService.personal_contacts.country;
      this.acc_city_id=this.settingsService.personal_contacts.city_id;
    }
  }

  getConfigValue(key: string): any{
    return getDeepFromObject(this.crudconfig, key, null);
   }	

}
