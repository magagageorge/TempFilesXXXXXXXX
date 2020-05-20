import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdsModalsService } from '@app/ads-manager/services/ads-modals.service';
import { UtilitiesService } from '@app/services/utilities.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdsAccount } from '@app/ads-manager/models/ads-account';

@Component({
  selector: 'app-create-ad-account-form-modal',
  templateUrl: './create-ad-account-form-modal.component.html',
  styleUrls: ['./create-ad-account-form-modal.component.scss']
})
export class CreateAdAccountFormModalComponent implements OnInit {


  redirectDelay: number;
  showMessages: any;
  submitted: boolean=false;
  errors: string[];
  messages: string[];
  frm_gGroup: FormGroup;
  ad_account_model:AdsAccount=new AdsAccount();
  constructor(public adsModalsService:AdsModalsService,public utilitiesService:UtilitiesService,private formBuilder: FormBuilder,public modal: NgbActiveModal) {
  }

  ngOnInit() {
    this.frm_gGroup = this.formBuilder.group(
      {acc_name: ['', Validators.required],currency: ['', Validators.required],}
      ); 
  }

  setModel(account_name:string,currency:string){
    this.ad_account_model.name=account_name;
    this.ad_account_model.currency=currency;
  }


  get ac() { return this.frm_gGroup.controls; }

  create(){

    if (this.frm_gGroup.invalid){
      return;
    }
    this.errors = this.messages = [];
    this.adsModalsService.adsService.service.getProvider(this.adsModalsService.adsService.provider).crudconfig.route_url='ads/account/';	
    if(this.submitted === false){ 
      this.submitted = true;
      var __this = this;
      this.adsModalsService.adsService.service.create(this.adsModalsService.adsService.provider,this.ad_account_model,{}).subscribe(function (result) {
        __this.submitted = false;		
        if(result.isSuccess()){
            __this.messages = result.getMessages();
            var data=result.getResultData();
            if(data==true){
        
            }
            __this.modal.dismiss('Cross click');
        }else{
            __this.errors = result.getErrors();
        }		
    });	  
  }

}

}
