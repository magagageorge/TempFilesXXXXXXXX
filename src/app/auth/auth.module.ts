

import { Injector, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { DummyAuthProvider } from './providers/dummy-auth.provider';
import { EmailPassAuthProvider } from './providers/email-pass-auth.provider';
import { SocialAuthProvider } from './providers/social-auth.provider';
import { TokenService } from './services/token/token.service';
import { AuthSimpleToken,TokenClass } from './services/token/token';
import { TokenStorage,TokenLocalStorage  } from './services/token/token-storage';
import { defaultSettings, AUTH_USER_OPTIONS, AUTH_OPTIONS, AUTH_PROVIDERS, AUTH_INTERCEPTOR_HEADER, AUTH_TOKEN_CLASS, } from './auth.options';
//import { AuthComponent } from './components/auth.component';
import { deepExtend } from './helpers';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";
 

import { AuthOptions } from './auth.options';
import { MustMatchDirective } from './directives/must-match.directive'


import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import { AuthResetPasswordComponent } from './components/auth-reset-password/auth-reset-password.component';
import { AuthRequestPasswordComponent } from './components/auth-request-password/auth-request-password.component';
import { AuthLogoutComponent } from './components/auth-logout/auth-logout.component';
import { AuthChangePasswordComponent } from './components/auth-change-password/auth-change-password.component';

export function nbAuthServiceFactory(config: any, tokenService: TokenService, injector: Injector): AuthService{
    var providers = config.providers || {};
    for (var key in providers) {
        if (providers.hasOwnProperty(key)) {
            var provider = providers[key];
            var object = injector.get(provider.service);
            object.setConfig(provider.config || {});
        }
    }
    return new AuthService(tokenService, injector, providers);
}

export function nbOptionsFactory(options: any): any{
    return deepExtend(defaultSettings, options);
}

let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("357087040398-uke4nvctijtlj3h1ega92h2nluc3oe2q.apps.googleusercontent.com")
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("1942085572693855")
    },
    {
      id: LinkedInLoginProvider.PROVIDER_ID,
      provider: new LinkedInLoginProvider("78p6juavy4wlrw", false, 'en_US')
    }
  ]);

  export function provideConfig() {
    return config;
  }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
	  ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  declarations: [
  MustMatchDirective,
  AuthLoginComponent,
  AuthRegisterComponent,
  AuthResetPasswordComponent,
  AuthRequestPasswordComponent,
  AuthLogoutComponent,
  AuthChangePasswordComponent
  ],
  exports: [
  AuthLoginComponent,
  AuthRegisterComponent,
  AuthResetPasswordComponent,
  AuthRequestPasswordComponent,
  AuthLogoutComponent,
  AuthChangePasswordComponent
  ]
})
export class AuthModule {

static forRoot(nbAuthOptions?: AuthOptions): ModuleWithProviders{
        return {
            ngModule: AuthModule,
            providers: [
                { provide: AUTH_USER_OPTIONS, useValue: nbAuthOptions },
                { provide: AUTH_OPTIONS, useFactory: nbOptionsFactory, deps: [AUTH_USER_OPTIONS] },
                { provide: AUTH_PROVIDERS, useValue: {} },
                { provide: AUTH_TOKEN_CLASS, useValue: AuthSimpleToken },
                { provide: AUTH_INTERCEPTOR_HEADER, useValue: 'Authorization' },
                {
                    provide: AuthService,
                    useFactory: nbAuthServiceFactory,
                    deps: [AUTH_OPTIONS, TokenService, Injector],
                },
                { provide: TokenStorage, useClass: TokenLocalStorage },
                {provide: AuthServiceConfig,useFactory: provideConfig},
                TokenService,
                DummyAuthProvider,
                EmailPassAuthProvider,
                SocialAuthProvider,
            ],
        };
    }


}

