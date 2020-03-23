import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ReportContent } from '@app/models/report-content';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessengerModalsService } from '@app/messages/services/messenger-modals.service';
import { UtilitiesService } from '@app/services/utilities.service';

@Component({
  selector: 'app-report-messenger-content-modal',
  templateUrl: './report-messenger-content-modal.component.html',
  styleUrls: ['./report-messenger-content-modal.component.scss']
})
export class ReportMessengerContentModalComponent implements OnInit {

  messengerModalsService:MessengerModalsService;
  utilitiesService:UtilitiesService;
  redirectDelay: number;
  showMessages: any;
  submitted: boolean=false;
  errors: string[];
  messages: string[];
  frm_gGroup: FormGroup;
  report_model:ReportContent=new ReportContent();
  constructor(messengerModalsService:MessengerModalsService,utilitiesService:UtilitiesService,private formBuilder: FormBuilder,public modal: NgbActiveModal) {
    this.messengerModalsService = messengerModalsService;
    this.utilitiesService=utilitiesService;
  }

  ngOnInit() {
    this.frm_gGroup = this.formBuilder.group({what: ['', Validators.required],}); 
  }

  setModel(object_id:number,object_model:string){
    this.report_model.object_id=object_id;
    this.report_model.object_model=object_model;
  }


  get f() { return this.frm_gGroup.controls; }

  report(){

    if (this.frm_gGroup.invalid){
      return;
    }
    this.errors = this.messages = [];
    this.messengerModalsService.messengerService.service.getProvider(this.messengerModalsService.messengerService.provider).crudconfig.route_url='report-content/';	
    if(this.submitted === false){ 
      this.submitted = true;
      var __this = this;
      this.messengerModalsService.messengerService.service.create(this.messengerModalsService.messengerService.provider,this.report_model,{}).subscribe(function (result) {
        __this.submitted = false;		
        if(result.isSuccess()){
            __this.messages = result.getMessages();
            var data=result.getResultData();
            if(data==true){
            __this.report_model.done_reporting=true;         
            }
            __this.modal.dismiss('Cross click');
        }else{
            __this.errors = result.getErrors();
        }		
    });	  
  }

}

}
