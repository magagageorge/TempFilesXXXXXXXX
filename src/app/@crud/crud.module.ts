import { NgModule,Injector, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { deepExtend } from './helpers';
import { CrudService } from './services/crud.service';
import { CrudProvider } from './providers/crud.provider';
import { CrudJWTInterceptor } from './services/interceptors/jwt-interceptor';
import { TokenService } from 'app/auth/services/token/token.service';
import { CrudOptions,cruddefaultSettings,CRUD_CONFIG, CRUD_OPTIONS,CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from './crud.options';
import { MessengerProvider } from './providers';
import { AdsProvider } from './providers/ads.provider';

export function crudServiceFactory(crudconfig: any, tokenService: TokenService, injector: Injector): CrudService {
    var providers = crudconfig.providers || {};
    for (var key in providers) {
        if (providers.hasOwnProperty(key)) {
            var provider = providers[key];
            var object = injector.get(provider.service);
            object.setConfig(provider.crudconfig || {});
        }
    }
    return new CrudService(tokenService, injector, providers);
}

export function crudOptionsFactory(options: any): any {
    return deepExtend(cruddefaultSettings, options);
}


@NgModule()
export class CrudModule {
	CrudModule(){}
    static forRoot(crudOptions?: CrudOptions): ModuleWithProviders<CrudModule> {
    return {
      ngModule: CrudModule,
      providers: [
	  { provide: CRUD_USER_OPTIONS, useValue:crudOptions },
      { provide: CRUD_OPTIONS, useFactory: crudOptionsFactory,deps: [CRUD_USER_OPTIONS] },
      { provide: CRUD_PROVIDERS, useValue: {} },
      { provide: CRUD_INTERCEPTOR_HEADER, useValue: 'Authorization' },
      {
          provide: CrudService,
          useFactory: crudServiceFactory,
          deps: [CRUD_OPTIONS, TokenService, Injector],
      },
	  { provide: HTTP_INTERCEPTORS, useClass: CrudJWTInterceptor, multi: true},
      TokenService,
      CrudProvider,
      MessengerProvider,
      AdsProvider	  
	  ]
    };
  }
}
