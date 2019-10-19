
import { Component, OnInit , Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AUTH_OPTIONS,AuthOptions} from '../../auth.options';
import { AuthService } from '../../services/auth.service';
import { getDeepFromObject } from '../../helpers';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
        let password = control.get('password').value;
 
        let confirmPassword = control.get('reset_password').value;
 
         if(password != confirmPassword) {
             control.get('reset_password').setErrors( {ConfirmPassword: true} );
         } else {
             return null;
         }
     }
}



@Component({
  selector: 'app-auth-reset-password',
  templateUrl: './auth-reset-password.component.html',
  styleUrls: ['./auth-reset-password.component.scss']
})
export class AuthResetPasswordComponent implements OnInit {

    model:any={};
    formGroup: FormGroup;
    submitted: boolean = false;
    service: AuthService;
    protected config: {};
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    provider: string;
    social_provider:string;
    processing_request:boolean=false;
    errors: string[];
    messages: string[];   
 
    constructor(service: AuthService,router: Router,@Inject(AUTH_OPTIONS) AUTH_OPTIONS:AuthOptions,private formBuilder: FormBuilder) {
        this.service = service;
        this.config = AUTH_OPTIONS;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.provider = '';
        this.errors = [];
        this.messages = [];
        this.model = {};
        this.submitted = false;
        this.redirectDelay = this.getConfigValue('forms.resetPass.redirectDelay');
        this.showMessages = this.getConfigValue('forms.resetPass.showMessages');
        this.provider = this.getConfigValue('forms.resetPass.provider');
	}

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(6)]],
            reset_password: ['', [Validators.required]]            
        },{
            validator: ConfirmPasswordValidator.MatchPassword
         });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formGroup.controls; }

    onSubmit(): void {
        this.submitted = true;
        // stop here if form is invalid
        if (this.formGroup.invalid) {
            return;
        }
        var _this = this;
        this.errors = this.messages = [];
        this.processing_request=true;
        this.service.resetPassword(this.provider, this.model).subscribe(function (result) {
            _this.submitted = false;
            var res_data=result.getResponse();
            _this.processing_request=false;
            if (result.isSuccess()){
                _this.messages = result.getMessages();				
				console.log(res_data);
            }
            else {
                _this.errors = result.getErrors();
				console.log(res_data);				
            }
			
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });		
		
    }

    getConfigValue(key: string): any{
        return getDeepFromObject(this.config, key, null);
    }	

}
