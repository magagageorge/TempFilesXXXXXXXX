import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


let counter = 0;

@Injectable()
export class  Article{
  id:number;
  userid:number;
  title:string;
  picture:string;
  details:string;
  /*
  constructor(id?: number,userid?:number,picture?:string,title?:string,details?:string){
	this.id=id;
	this.userid=userid;
	this.picture=picture;
	this.title=title;
    this.details=details;	
  }  
  */
}