import { Component, OnInit , Inject } from '@angular/core';
import { AuthSocialLink ,AUTH_OPTIONS,AuthOptions} from '../../auth.options';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getDeepFromObject } from '../../helpers';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-request-password',
  templateUrl: './auth-request-password.component.html',
  styleUrls: ['./auth-request-password.component.scss']
})
export class AuthRequestPasswordComponent implements OnInit {
    service: AuthService;
    protected config: {};
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    provider: string;
    social_provider:string;
    errors: string[];
    messages: string[];
    submitted: boolean;
    model:any={};
	verifyModel:any={};
    formGroup: FormGroup;
	verify_formGroup: FormGroup;
	codesubmitted = false;
	account_not_found=false;
	send_code=false;
	route: ActivatedRoute;
	public invalid_code=false;
	reset_code_sent=false;
    processing_request:boolean=false;
    str_success_code:string;	
    str_invalid_code:string;
    code_resent:boolean=false;
    resending_code:boolean=false;
	title='Find your Woorbi Account';
	description='Enter your email and we will send you a password reset code';
	socialLinks: AuthSocialLink[];
 
    constructor(service: AuthService,router: Router,route: ActivatedRoute,@Inject(AUTH_OPTIONS) AUTH_OPTIONS:AuthOptions,private formBuilder: FormBuilder) {
        this.service = service;
        this.config = AUTH_OPTIONS;
        this.router = router;
		this.route = route;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.errors = [];
        this.messages = [];
        this.model = {};
        this.submitted = false;
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.requestPass.redirectDelay');
        this.showMessages = this.getConfigValue('forms.requestPass.showMessages');
        this.provider = this.getConfigValue('forms.requestPass.provider');
	}	

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
        this.verify_formGroup = this.formBuilder.group({
            code: ['', [Validators.required,Validators.required,Validators.minLength(6),Validators.maxLength(6)]]
        });	      	
    }

    // convenience getter for easy access to form fields
    get f() { return this.formGroup.controls; }
	get fc() { return this.verify_formGroup.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.formGroup.invalid) {
            return;
        }
        this.SearchAccount();
    }

    onCodeKey(value: string){
        if(value.trim()==''){
            this.str_success_code='';
            this.str_invalid_code='';
        }  
      }

    SearchAccount(){
        if(this.formGroup.invalid){
            return;
        }
        var _this = this;
		this.errors = this.messages = [];
		this.processing_request=true;
        this.service.requestPassword(this.provider, this.model).subscribe(function (result) {
            _this.submitted = false;
            _this.processing_request=false;
			var res_data=result.getResponse();
            if (result.isSuccess()){
				if(res_data.ok==true){
					_this.messages=[];
					//_this.messages.push('Check your email');
					_this.messages.push('We\'ve sent reset code to your email. Please go to your email account to get the code.');
					_this.messages.push('If you don\'t see the email, check other places it might be, like your junk, spam, social, or other folders.');
				}else{
					_this.messages = result.getMessages();
                }
                _this.verifyModel.hash_=res_data.body.hash;				
                _this.reset_code_sent=true;	
                console.log(_this.verifyModel);			
            }
            else {
				if(res_data.ok==false){
					_this.errors.push(res_data.error[0].message);
				}else{
					_this.errors = result.getErrors();
				}
				_this.messages=[];							
            }
        });	
	}

    NoCodeReceived(){
        this.reset_code_sent=false;
        this.verifyModel=[];
	}	
	
    VerifyCode(){
        if(this.verify_formGroup.invalid){
            return;
        }
        var __this=this;
        this.errors = this.messages = [];
        this.submitted = true;
        this.processing_request=true;		
        this.service.verifyCode(this.provider, this.verifyModel).subscribe(result=>{
            __this.submitted = false;
            __this.processing_request=false;
            var res_data=result.getResponse();
            if(result.isSuccess()){
                __this.messages = result.getMessages();
                console.log(res_data);			           				
            }else{
				if(res_data.ok==false && res_data.error[0].message.length){
					__this.str_invalid_code=res_data.error[0].message;
				}else{
					__this.errors = result.getErrors();
				}
                __this.messages=[];
                console.log(res_data);
                
            }
            var redirect = result.getRedirect();
            if(redirect){
                setTimeout(function(){
                    return __this.router.navigateByUrl(redirect);
                }, __this.redirectDelay);
            }
        });		  
    }



    getConfigValue(key: string): any{
        return getDeepFromObject(this.config, key, null);
    }	
	
}
