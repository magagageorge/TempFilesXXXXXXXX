import { Component, OnInit , Inject } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings,CrudOptions, CRUD_OPTIONS,CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { UtilitiesService } from '@app/services/utilities.service';
import { Country } from '@app/models/country';
import { Observable, of } from 'rxjs';
import { Skill } from '@app/models/skill';
import { Industry } from '@app/models/industry';
import { UserPreferences } from '@app/models/settings/user-preference';


export class Location{
      country:string;
      city_id:string;
      constructor(){
          this.country='';
          this.city_id='';
      }
}

export class CareerForm{
    is_student:string;
    institution_name:string;
    startyear:string;
    endyear:string;
    non_student_type:string;
    company_name:string;
    position:string;
    knows_about:Skill[];
    businesstype:Industry[];
    constructor(){
        this.knows_about=[];
        this.businesstype=[];
        this.startyear="";
        this.endyear="";
    }
}

export interface Year{
    id:number;
    name:number;
}

export class VerifyType{
    code:string;
    constructor(){
        this.code='';
    }
}

export class ContactImport{
    email:string;
    channels:any[];
    constructor(){
        this.email='';
        this.channels=[];
    }
}


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  profileService:ProfileService;
  locationModel:Location=new Location();
  careerModel:CareerForm=new CareerForm();
  missionModel:any={};
  verifyModel:VerifyType=new VerifyType();
  locationGroup: FormGroup;
  careerGroup: FormGroup;
  missionGroup: FormGroup;
  verifyGroup:FormGroup;
  contactImportModel:ContactImport=new ContactImport();
  protected service: CrudService;
  protected crudconfig: {};
  protected router: Router;
  utilitiesService:UtilitiesService;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  errors: string[];
  messages: string[];
  submitted: boolean;
  countries:Country[]=[];
  selectedLocation:Country=new Country();
  curr_year:any;
  START_YEARS:Year[]=[];
  END_YEARS:Year[]=[];
  resultData:string[];
  str_success_code:string;	
  str_invalid_code:string;
  code_resent:boolean=false;
  resending_code:boolean=false;
  processing_request:boolean=false;

  skills_list:Skill[]=[];
  industries_list:Industry[]=[];
  user_preferences:UserPreferences=new UserPreferences();

  constructor(profileService:ProfileService,utilitiesService:UtilitiesService,private formBuilder: FormBuilder,service: CrudService,router: Router,@Inject(CRUD_OPTIONS) CRUD_OPTIONS:CrudOptions) {
     this.profileService=profileService;
     this.utilitiesService=utilitiesService;
     this.service = service;
     this.crudconfig = CRUD_OPTIONS;
     this.router = router;
     this.redirectDelay = 0;
     this.showMessages = {};
     this.provider = '';
     this.errors = [];
     this.messages = [];
     this.submitted = false;
     this.selectedLocation=new Country();
     this.provider = this.getConfigValue('forms.update.provider');
     var date=new Date();
     this.curr_year=date.getUTCFullYear();
     this.genEndYears();
     this.genStartYears();
   }


  genStartYears(){
      var i=Number(this.curr_year);
    while(i>(Number(this.curr_year)-7)){
        this.START_YEARS.push({id:i,name:i});
        i--;
    }
  }

  genEndYears(){
    var i=Number(this.curr_year);
    while(i<(Number(this.curr_year)+7)){
        this.END_YEARS.push({id:i,name:i});
        i++;
    }      
  }

  ngOnInit() {
    var __this=this;
    this.utilitiesService.getCountries({}).subscribe(results=>{
        __this.countries=results.getResultData();
        __this.switchLocation(Number(__this.profileService.MYPROFILE.country));
        __this.locationModel.country=__this.profileService.MYPROFILE.country;
        __this.locationModel.city_id=__this.profileService.MYPROFILE.city_id;
        __this.careerModel.endyear=__this.profileService.MYPROFILE.college_end_year;
        __this.careerModel.startyear=__this.profileService.MYPROFILE.college_start_year;
        __this.careerModel.institution_name=__this.profileService.MYPROFILE.colleges;
    });

    this.utilitiesService.getSkills({}).subscribe(results=>{
        this.skills_list=results.getResultData();
    });
    this.utilitiesService.getIndustries({}).subscribe(results=>{
        this.industries_list=results.getResultData();
    });

    this.locationGroup = this.formBuilder.group({
        country: ['', [Validators.required]],
        city_id: ['', [Validators.required]]
    });

    this.missionGroup = this.formBuilder.group({
        networking_entertainment: ['', [Validators.required]],
        find_sales_leads: ['', []],
        employ_someone: ['', []],
        find_job_opportunity: ['', []]     
    });

    this.careerGroup = this.formBuilder.group({
        is_student: ['', [ Validators.required]],
        non_student_type: ['', []],
        institution_name: ['', [ ]],
        endyear: ['', [ ]],
        startyear: ['', [ ]],
        company_name: ['', [ ]],
        position: ['', [ ]],
        knows_about: ['', [ ]],
        businesstype: ['', [ ]]
    }); 

    this.verifyGroup = this.formBuilder.group({
        code: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
    });
    
    this.handleFormChanges();
    this.contactImportModel.email=this.profileService.MYPROFILE.user.email;
  }

  handleFormChanges() {
    this.isStudent.valueChanges.subscribe(
       isStudent => {
         if (isStudent==='yes') {
            this.InstitutionName.setValidators([Validators.required]);
            this.StartYear.setValidators([Validators.required]);
            this.EndYear.setValidators([Validators.required]);
            this.nonStudentType.clearValidators();
            this.CompanyName.clearValidators();
            this.Position.clearValidators();
            this.KnowsAbout.clearValidators();
            this.BusinessType.clearValidators(); 
            this.nonStudentType.updateValueAndValidity();
            this.CompanyName.updateValueAndValidity();
            this.Position.updateValueAndValidity();
            this.KnowsAbout.updateValueAndValidity();
            this.BusinessType.updateValueAndValidity();               
         } else if (isStudent === 'no') {
            this.nonStudentType.setValidators([Validators.required]);
            this.InstitutionName.clearValidators();
            this.StartYear.clearValidators();
            this.EndYear.clearValidators();
            this.InstitutionName.updateValueAndValidity();
            this.StartYear.updateValueAndValidity();
            this.EndYear.updateValueAndValidity();            
         } else {
            //this.nonStudentType.setValidators([Validators.required]);
            //this.InstitutionName.setValidators([Validators.required]);
            //this.StartYear.setValidators([Validators.required]);
            //this.EndYear.setValidators([Validators.required]);     
         }        
       }
    ); 

    this.nonStudentType.valueChanges.subscribe(
        type => {
          if (type==='entrepreneur') {
             this.BusinessType.setValidators([Validators.required]);
             this.CompanyName.clearValidators();
             this.Position.clearValidators();
             this.KnowsAbout.clearValidators();
          } else if (type === 'employed') {
             this.CompanyName.setValidators([Validators.required]);
             this.Position.setValidators([Validators.required]);
             this.KnowsAbout.clearValidators();
             this.BusinessType.clearValidators();
          } else if (type === 'unemployed') {
                this.CompanyName.clearValidators();
                this.Position.clearValidators();
                this.BusinessType.clearValidators();
                this.KnowsAbout.setValidators([Validators.required]);                
          } else {
             //this.CompanyName.setValidators([Validators.required]);
             //this.Position.setValidators([Validators.required]);
             //this.KnowsAbout.setValidators([Validators.required]);
             //this.BusinessType.setValidators([Validators.required]);   
          }
          this.CompanyName.updateValueAndValidity();
          this.Position.updateValueAndValidity();
          this.KnowsAbout.updateValueAndValidity();
          this.BusinessType.updateValueAndValidity();      
        }
     );

 } 




  get isStudent() {
    return this.careerGroup.get('is_student');
  }        
  get nonStudentType() {
    return this.careerGroup.get('non_student_type');
  }  
  get InstitutionName() {
    return this.careerGroup.get('institution_name');
  } 
  get EndYear() {
    return this.careerGroup.get('endyear');
  }        
  get StartYear() {
    return this.careerGroup.get('startyear');
  }  
  get CompanyName() {
    return this.careerGroup.get('company_name');
  } 
  get Position() {
    return this.careerGroup.get('position');
  }        
  get KnowsAbout() {
    return this.careerGroup.get('knows_about');
  }  
  get BusinessType() {
    return this.careerGroup.get('businesstype');
  } 


  switchLocation(id:any){
      this.filterCountry(id).subscribe((country:Country)=>{
        this.selectedLocation=country;
      });   
  }

  filterCountry(id:any):Observable<Country>{
    return of(this.countries.find((country:Country)=>country.id==id));
  }

  saveLocation(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.locationGroup.invalid) {
        return;
    }
    var _this = this;
    this.errors = this.messages = [];
    this.processing_request=true;
    this.service.getProvider(this.provider).crudconfig.route_url='start/location/';	
    this.service.update(this.provider, this.locationModel).subscribe(function (result) {
        _this.submitted = false;
        _this.processing_request=false;
        if(result.isSuccess()){
            _this.messages = result.getMessages();
            var data=result.getResultData();
            if(data.done){
                _this.profileService.MYPROFILE=data.data;
            }				
        } else {
            _this.errors = result.getErrors();				
        }
    });		
   }

   saveCareer(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.careerGroup.invalid) {
        return;
    }
    var _this = this;
    this.errors = this.messages = [];
    this.processing_request=true;
    this.service.getProvider(this.provider).crudconfig.route_url='start/career/';	
    this.service.update(this.provider, this.careerModel).subscribe(function (result) {
        _this.submitted = false;
        _this.processing_request=false;
        if(result.isSuccess()){
            _this.messages = result.getMessages();
            var data=result.getResultData();
            if(data.done){
                _this.profileService.MYPROFILE=data.data;
            }				
        } else {
            _this.errors = result.getErrors();				
        }
    });		
   }

  saveMission(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.missionGroup.invalid) {
        return;
    }
    var _this = this;
    this.errors = this.messages = [];
    this.processing_request=true;
    this.service.getProvider(this.provider).crudconfig.route_url='start/mission/';	
    this.service.update(this.provider, this.profileService.MYPROFILE.my_preferences).subscribe(function (result) {
        _this.submitted = false;
        _this.processing_request=false;
        if(result.isSuccess()){
            _this.messages = result.getMessages();
            var data=result.getResultData();
            if(data.done){
                _this.profileService.MYPROFILE=data.data;
            }				
        } else {
            _this.errors = result.getErrors();				
        }
    });		
   }

   verify(){
    var __this=this;
    this.errors = this.messages = [];
    this.submitted = true;
    this.processing_request=true;
    this.service.getProvider(this.provider).crudconfig.route_url='start/verify/';		
    this.service.update(this.provider, this.verifyModel).subscribe(result=>{
        __this.submitted = false;
        __this.processing_request=false;
        if(result.isSuccess()){
            __this.messages = result.getMessages();
            __this.resultData=result.getResultData();				
            if(__this.resultData['success']==true){
                __this.str_success_code=this.resultData['message'];
            }else{
                __this.str_invalid_code=this.resultData['message'];					
            }
            var data=result.getResultData();
            if(data.success){
                __this.profileService.MYPROFILE=data.data;
            }           				
        }else{
            __this.errors = result.getErrors();
        }
        var redirect = result.getRedirect();
        if(redirect){
            setTimeout(function(){
                //return this.router.navigateByUrl(redirect);
            }, __this.redirectDelay);
        }
    });		  
}

resendCode(){
    this.errors = this.messages = [];
    this.submitted = true;
    var _this=this;
    this.service.getProvider(this.provider).crudconfig.route_url='start/resend/';
    this.resending_code=true;		
    this.service.update(this.provider, {}).subscribe(result=>{
        _this.submitted = false;
        _this.resending_code=false;
        if(result.isSuccess()){
        _this.resending_code=false;
        _this.resending_code=false;
        _this.messages = result.getMessages();
        _this.resultData=result.getResultData();				
            if(_this.resultData['success']==true){
                _this.code_resent=true;
            }				
        }else{
            _this.errors = result.getErrors();
        }
    });	   
}

skipContactImport(){
    this.errors = this.messages = [];
    this.submitted = true;
    var _this=this;
    this.processing_request=true;
    this.service.getProvider(this.provider).crudconfig.route_url='start/contacts/';		
    this.service.update(this.provider, {skip:true}).subscribe(result=>{
        _this.submitted = false;
        _this.processing_request=false;
        if(result.isSuccess()){
            _this.messages = result.getMessages();			
            var data=result.getResultData();
            if(data.done){
                _this.profileService.MYPROFILE=data.data;
                if(_this.profileService.MYPROFILE.init.status==true){
                    _this.router.navigateByUrl('feed');
                }
            }           				
        }else{
            _this.errors = result.getErrors();
        }
    });	    
}

  onCodeKey(value: string){
	if(value.trim()==''){
		this.str_success_code='';
		this.str_invalid_code='';
	}  
  }

  // convenience getter for easy access to form fields
  get f() { return this.locationGroup.controls; }
  get c() { return this.careerGroup.controls; }
  get m() { return this.missionGroup.controls; }
  get v() { return this.verifyGroup.controls; }

  RedirectToFeed(){
    return this.router.navigateByUrl('feed');
  }

  getConfigValue(key: string): any{
    return getDeepFromObject(this.crudconfig, key, null);
   }	

}
