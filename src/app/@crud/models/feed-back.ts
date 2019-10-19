export class FeedBack {
	id:number;
	subject:string;
	email:string;
	message:string;
	site_rating:string;
	heared_by:string;
	constructor(){
		this.subject='';
		this.email='';
		this.message='';
		this.site_rating='';
		this.heared_by='';
	}
}
