import { InjectionToken } from '@angular/core';
export interface CrudOptions {
    forms?: any;
    providers?: any;
}
export interface CrudProviders {
    [key: string]: any;
}

export  const cruddefaultSettings: any= {
    forms: {
        create: {
            redirectDelay: 100,
            provider: 'crud',
            showMessages: {
                // show/not show success/error messages
                success: true,
                error: true,
            },
        },
        update: {
            redirectDelay: 100,
            provider: 'crud',
            showMessages: {
                success: true,
                error: true,
            },
        },
        getone: {
            redirectDelay: 100,
            provider: 'crud',
            showMessages: {
                success: true,
                error: true,
            },
        },
        getall: {
            redirectDelay: 100,
            provider: 'crud',
            showMessages: {
                success: true,
                error: true,
            },
        },
        delete: {
            redirectDelay: 100,
            provider: 'crud',
            showMessages: {
                success: true,
                error: true,
            },
        },
        messenger: {
            redirectDelay: 10,
            provider: 'messenger',
            showMessages: {
                success: true,
                error: true,
            },
        },  
        ads: {
            redirectDelay: 10,
            provider: 'ads',
            showMessages: {
                success: true,
                error: true,
            },
        },    
        daywaka: {
            redirectDelay: 10,
            provider: 'daywaka',
            showMessages: {
                success: true,
                error: true,
            },
        },                   
    },
};

export  const CRUD_CONFIG=new InjectionToken<any>('Woorbi Crud Configurations');
export  const CRUD_PROVIDERS=new InjectionToken<CrudProviders>('Woorbi Crud Providers');
export  const CRUD_OPTIONS=new InjectionToken<CrudOptions>('Woorbi Crud Options');
export  const CRUD_USER_OPTIONS=new InjectionToken<CrudOptions>('Woorbi Crud User Options');
export  const CRUD_INTERCEPTOR_HEADER=new InjectionToken<CrudProviders>('Woorbi Simple Interceptor Header');
