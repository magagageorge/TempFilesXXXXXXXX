import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from 'app/@crud/crud.options';
import { CrudProvider } from 'app/@crud/providers/crud.provider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getDeepFromObject } from '../../helpers';
import { User } from '@app/@crud/models/user';

@Component({
  selector: 'app-auth-change-password',
  templateUrl: './auth-change-password.component.html',
  styleUrls: ['./auth-change-password.component.scss']
})
export class AuthChangePasswordComponent implements OnInit {

  service: CrudService;
  protected crudconfig: {};
  crudprovider: CrudProvider;
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  parameters: {};
  public model: User = new User();
  formGroup: FormGroup;
  social_provider: string;
  login_failed: boolean = false;
  password_tab: string = 'password';
  password_changed: boolean = false;
  wrong_password: boolean = false;
  processing_request:boolean=false;

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router, private formBuilder: FormBuilder) {
    this.service = service;
    this.router = router;
    this.crudconfig = CRUD_OPTIONS;
    this.redirectDelay = 0;
    this.showMessages = {};
    this.submitted = false;
    this.errors = [];
    this.messages = [];

    this.redirectDelay = this.getConfigValue('forms.update.redirectDelay');
    this.showMessages = this.getConfigValue('forms.update.showMessages');
    this.provider = this.getConfigValue('forms.update.provider');
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }

  changePassword(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }
    var _this = this;
    this.errors = this.messages = [];
    this.processing_request=true;
    this.service.getProvider(this.provider).crudconfig.route_url = 'settings/auth-p/';
    this.service.update(this.provider, this.model, this.parameters).subscribe(function (result) {
      _this.submitted = false;
      _this.processing_request=false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var res = result.getResultData();
        if (res.data.error) {
          _this.wrong_password = true;     
          return;
        }
        if (res.data.success) {
          _this.password_changed = true;
          _this.model = new User();
        }
      }
      else {
        _this.errors = result.getErrors();
      }
      var redirect = result.getRedirect();
      if (redirect) {
        setTimeout(function () {
          //return _this.router.navigateByUrl(redirect);
        }, _this.redirectDelay);
      }
    });
    return;
  }

	OnPassKey(event:any){
		if(this.wrong_password){
			this.wrong_password=false;
		}	
	}

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }
}
