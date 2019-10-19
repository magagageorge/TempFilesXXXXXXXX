import { Injectable } from '@angular/core';
import { Observable,of as observableOf,BehaviorSubject } from 'rxjs';
import { switchMap,map,catchError } from 'rxjs/operators';

let counter = 0;

@Injectable()
export class ProfileModel {
  user_id:number;
  firstname:string; 
  middlename:string; 
  lastname:string; 
  picture:string; 
  title:string; 
  about:string;
  gender:string; 
  language:string;
  timezone:string;
  country:string; 
  city:string; 
  state:string; 
  street:string; 
  zip:string; 
  phone_private:string; 
  phone_work:string; 
  mobile:string; 
  fax:string; 
  user_type:string;
  im_skype:string; 
  url:string; 
  url_facebook:string; 
  url_linkedin:string; 
  url_googleplus:string; 
  url_twitter:string; 
  created_at:string; 
  updated_at:string;
  isNewRecord:boolean;
  legal_areas:any;  
  
  /*
  constructor(user_id?:number,firstname?:string,middlename?:string,lastname?:string,picture?:string,title?:string,about?:string,gender?:string,language?:string,timezone?:string,country?:string,city?:string,state?:string,street?:string,zip?:string,phone_private?:string,phone_work?:string,mobile?:string,fax?:string,url?:string){
  this.user_id=user_id;
  this.firstname=firstname || ''; 
  this.middlename=middlename || '';
  this.lastname=lastname || ''; 
  this.picture=picture || ''; 
  this.title=title || ''; 
  this.about=about || '';
  this.gender=gender || ''; 
  this.language=language || '';
  this.timezone=timezone || '';
  this.country=country || ''; 
  this.city=city || '';
  this.state=state || ''; 
  this.street=street || ''; 
  this.zip=zip || ''; 
  this.phone_private=phone_private || '';
  this.phone_work=phone_work || ''; 
  this.mobile=mobile || '';
  this.fax=fax || '';
  this.isNewRecord=this.isNewRecord || true;
  }
 */ 
  
}
