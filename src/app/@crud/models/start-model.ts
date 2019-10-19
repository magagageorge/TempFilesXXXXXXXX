import { ServiceCategoryModel } from 'app/@crud/models/service-category';

export class StartModel {
	id:number;
	title:string;
	mobile:string;
	country:string;
	city:string;
	language:string;
	user_type:string;
	email:string;
	email_verified:boolean;
	phone_verified:boolean;	
	code:string;
	legal_areas:ServiceCategoryModel[];
	legal_area1:string;
	legal_area2:string;
	legal_area3:string;
   constructor(){
	   this.country='';
	   this.city='';
	   this.legal_area1='';
	   this.legal_area2='';
	   this.legal_area3='';
   }	
}
