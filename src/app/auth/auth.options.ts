import { InjectionToken } from '@angular/core';
import { AuthToken } from './services/token/token';
export interface AuthOptions {
    forms?: any;
    providers?: any;
}
export interface AuthProviders {
    [key: string]: any;
}
export interface AuthSocialLink {
    link?: string;
    url?: string;
    target?: string;
    title?: string;
    icon?: string;
}

var socialLinks = [];
export const defaultSettings: any = {
    forms: {
        login: {
            redirectDelay: 500,
            // delay before redirect after a successful login, while success message is shown to the user
            provider: 'email',
            // provider id key. If you have multiple providers, or what to use your own
            rememberMe: true,
            // whether to show or not the `rememberMe` checkbox
            showMessages: {
                // show/not show success/error messages
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        register: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            terms: true,
            socialLinks: socialLinks,
        },
        requestPass: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        verifyCode: {
            redirectDelay: 300,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },        
        resetPass: {
            redirectDelay: 500,
            provider: 'email',
            showMessages: {
                success: true,
                error: true,
            },
            socialLinks: socialLinks,
        },
        logout: {
            redirectDelay: 500,
            provider: 'email',
        },
        validation: {
            password: {
                required: true,
                minLength: 4,
                maxLength: 50,
            },
            email: {
                required: true,
            },
            fullName: {
                required: false,
                minLength: 4,
                maxLength: 50,
            },
        },
        social: {
            redirectDelay: 500,
            provider: 'social',
            showMessages: {
                success: true,
                error: true,
            },
            terms: true,
            socialLinks: socialLinks,
        },        
    },
};

export const AUTH_OPTIONS=new InjectionToken<AuthOptions>('Auth Options');
export const AUTH_USER_OPTIONS=new InjectionToken<AuthOptions>('User Auth Options');
export const AUTH_PROVIDERS=new InjectionToken<AuthProviders>('Auth Providers');
export const AUTH_TOKEN_CLASS=new InjectionToken<AuthToken>('Token Class');
export const AUTH_INTERCEPTOR_HEADER=new InjectionToken<AuthProviders>('Simple Interceptor Header');
