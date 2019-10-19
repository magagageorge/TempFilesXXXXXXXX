import { Component, OnInit,Injectable,Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable,of } from 'rxjs';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings,CrudOptions, CRUD_OPTIONS,CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { ObjectLikes } from '@app/models/object-likes';

@Component({
  selector: 'app-likes-modal',
  templateUrl: './likes-modal.component.html',
  styleUrls: ['./likes-modal.component.scss']
})
export class LikesModalComponent implements OnInit {

  service:CrudService;
  crudprovider:CrudProvider;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean=false;
  errors: string[];
  messages: string[];
  likes_model:ObjectLikes=new ObjectLikes();
  loading_likes:boolean=false;
  next_like_page:number;
  
  constructor(service:CrudService,@Inject(CRUD_OPTIONS) CRUD_OPTIONS:CrudOptions,router:Router,public modal: NgbActiveModal) {
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.showMessages = this.getConfigValue('forms.update.showMessages');
    this.provider = this.getConfigValue('forms.update.provider');
    this.next_like_page=1;
  }

  public onScrollUp(): void {
    if(this.loading_likes==false){    
      this.loadLike({page:this.next_like_page});
    }
  }
 
  public onScrollDown(): void {
    if(this.loading_likes==false){
      this.loadLike({page:this.next_like_page});
    }
  }

  setModel(object_id:number,object_model:string,no_likes:number){
    this.likes_model.object_id=object_id;
    this.likes_model.object_model=object_model;
    this.likes_model.no_likes=no_likes;
  }

  ngOnInit() {
        this.loadLike({object_id:this.likes_model.object_id,object_model:this.likes_model.object_model,page:this.next_like_page});
  }

  loadLike(params?:{}):any{
    this.loading_likes=true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url='likes/';	  
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results=>{
      _this.loading_likes=false;
			if(results.isSuccess()){
        _this.next_like_page++;
        _this.likes_model.likes = _this.likes_model.likes.concat(results.getResultData());	  
      }						 
		 });		
  }

  getConfigValue(key: string):any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
