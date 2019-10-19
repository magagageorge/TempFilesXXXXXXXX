import { Component, OnInit,Injectable,Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable,of } from 'rxjs';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings,CrudOptions, CRUD_OPTIONS,CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { ReportContent } from '@app/models/report-content';
import { FormsModule,NgForm,NgModel} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportContentType } from '@app/models/report-content-type';


@Component({
  selector: 'app-report-content-modal',
  templateUrl: './report-content-modal.component.html',
  styleUrls: ['./report-content-modal.component.scss']
})
export class ReportContentModalComponent implements OnInit {
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
  frm_gGroup: FormGroup;
  report_types:ReportContentType[]=[];
  report_model:ReportContent=new ReportContent();
  constructor(service:CrudService,@Inject(CRUD_OPTIONS) CRUD_OPTIONS:CrudOptions,router:Router,private formBuilder: FormBuilder,public modal: NgbActiveModal) {
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.showMessages = this.getConfigValue('forms.update.showMessages');
    this.provider = this.getConfigValue('forms.update.provider');
    this.loadReportTypes().subscribe(results=>{
      this.report_types=results.getResultData();
    });
  }

  ngOnInit() {
    this.loadReportTypes().subscribe(results=>{
      this.report_types=results.getResultData();
    });
    
    this.frm_gGroup = this.formBuilder.group({what: ['', Validators.required],}); 
  }

  setModel(object_id:number,object_model:string){
    this.report_model.object_id=object_id;
    this.report_model.object_model=object_model;
  }

  loadReportTypes(params?:{}){
      this.provider = this.getConfigValue('forms.getall.provider');
      this.service.getProvider(this.provider).crudconfig.route_url='feed/content-report-types/';	  
      return this.service.getall(this.provider, params);		
  }

  get f() { return this.frm_gGroup.controls; }

  report(){

    if (this.frm_gGroup.invalid){
      return;
    }
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url='feed/report-content/';	
    if(this.submitted === false){ 
      this.submitted = true;
      var __this = this;
      this.service.create(this.provider,this.report_model,{}).subscribe(function (result) {
        __this.submitted = false;		
        if(result.isSuccess()){
            __this.messages = result.getMessages();
            var data=result.getResultData();
            if(data==true){
            __this.report_model.done_reporting=true;
            //_this.report_model=new ReportContent();           
            }
        }else{
            __this.errors = result.getErrors();
        }		
    });	  
  }

}

getConfigValue(key: string):any {
  return getDeepFromObject(this.crudconfig, key, null);
}
}
