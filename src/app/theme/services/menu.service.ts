import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  public hideSideNav:boolean=true;
  public showSideNav:boolean=false;
  
  constructor() { }
 
   toogleSideBar(){
	if(this.hideSideNav){
		this.showSideNav=true;
		this.hideSideNav=false;
	}else{
		this.showSideNav=false;
		this.hideSideNav=true;		
	} 
   }

   hideSideBar(){
		this.showSideNav=false;
		this.hideSideNav=true;	   	   
   } 
}
