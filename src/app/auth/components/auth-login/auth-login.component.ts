import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSocialLink, AUTH_OPTIONS, AuthOptions } from '../../auth.options';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getDeepFromObject } from '../../helpers';
/*
import { AuthService as sAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
*/

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

    model: any = {};
    formGroup: FormGroup;
    service: AuthService;
    /*sauthService: sAuthService;*/
    protected config: {};
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    provider: string;
    social_provider: string;
    errors: string[];
    messages: string[];
    submitted: boolean;
    login_failed: boolean = false;
    socialLinks: AuthSocialLink[];

    constructor(service: AuthService,  router: Router, @Inject(AUTH_OPTIONS) AUTH_OPTIONS: AuthOptions, private formBuilder: FormBuilder) {
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
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.login.redirectDelay');
        this.showMessages = this.getConfigValue('forms.login.showMessages');
        this.provider = this.getConfigValue('forms.login.provider');
        this.social_provider = this.getConfigValue('forms.social.provider');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }

    ngOnInit() {
        var _this = this;
        /* If the loggedin user navigate to this route redirect to feed */
        this.service.isAuthenticated().subscribe(is_authenticated => {
            if (is_authenticated) {
                return _this.router.navigateByUrl('feed');
            }
        });

        this.formGroup = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.formGroup.controls; }

    login(): void {
        this.submitted = true;
        // stop here if form is invalid
        if (this.formGroup.invalid) {
            return;
        }
        var _this = this;
        this.errors = this.messages = [];
        this.service.authenticate(this.provider, this.model).subscribe(function (result) {
            _this.submitted = false;
            var res_data = result.getResponse();
            if (result.isSuccess()) {
                _this.messages = result.getMessages();
                window.location.reload();
            } else {
                _this.errors = result.getErrors();
            }         

            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });

    }

    getConfigValue(key: string): any {
        return getDeepFromObject(this.config, key, null);
    }
/*
    signInWithGoogle(): void {
        var _this = this;
        this.sauthService.signIn(GoogleLoginProvider.PROVIDER_ID, { prompt: 'select_account' }).then(account => {
            this.service.authenticate(this.social_provider, account).subscribe(function (result) {
                var res_data = result.getResponse();
                if (result.isSuccess()) {
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
        });
    }

    signInWithFB(): void {
        var _this = this;
        this.sauthService.signIn(FacebookLoginProvider.PROVIDER_ID, { enable_profile_selector: true }).then(account => {
            this.service.authenticate(this.social_provider, account).subscribe(function (result) {
                var res_data = result.getResponse();
                if (result.isSuccess()) {
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
        });
    }

    signInWithLinkedIn(): void {
        var _this = this;
        this.sauthService.signIn(LinkedInLoginProvider.PROVIDER_ID).then(account => {
            this.service.authenticate(this.social_provider, account).subscribe(function (result) {
                var res_data = result.getResponse();
                if (result.isSuccess()) {
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
        });
    }

    signOut(): void {
        this.sauthService.signOut();
    }
    */

}
