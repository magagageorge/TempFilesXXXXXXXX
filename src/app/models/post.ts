export class Post {
	id:number;
	message:string;
	upload_files:any[];
	visibility:string;
	date:string[];
	posted_by:string[];
	isNew:boolean;
   constructor(){
	   this.message='';
	   this.isNew=true;
	   this.visibility='Everyone';
   }	
}
