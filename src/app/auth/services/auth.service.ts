import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { switchMap,map } from 'rxjs/operators';
import { of as observableOf,Observable } from 'rxjs';
import { AUTH_PROVIDERS } from '../auth.options';
import { TokenService } from './token/token.service';
import { AuthResult } from './auth-result';
import { AuthToken } from './token/token';
import { SocialUser } from "angularx-social-login";

/**
 * Common authentication service.
 * Should be used to as an interlayer between UI Components and Auth Providers.
 */
export class AuthService {
    protected tokenService: TokenService;
    protected injector: Injector;
    protected providers: {};
    processing_request:boolean=false;
    public social_accounts:SocialUser[]=[];
    constructor(tokenService: TokenService, injector: Injector, providers?: {}){
        if (providers === void 0) { providers = {}; }
        this.tokenService = tokenService;
        this.injector = injector;
        this.providers = providers;
    }

    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    getSocialAccount(a_provider:string): Observable<SocialUser>{
        return observableOf(this.social_accounts.find((account:SocialUser)=>account.provider==a_provider));
    }
    /**
     * Retrieves current authenticated token stored
     * @returns {Observable<any>}
     */
    getToken(): Observable<AuthToken>{
        return this.tokenService.get();
    }
    /**
     * Returns true if auth token is presented in the token storage
     * @returns {Observable<any>}
     */
    isAuthenticated(): Observable<boolean>{
        return this.getToken()
            .pipe(map(function (token) { return token.isValid(); }));
    }
    /**
     * Returns tokens stream
     * @returns {Observable<AuthSimpleToken>}
     */
    onTokenChange(): Observable<AuthToken>{
        return this.tokenService.tokenChange();
    }
    /**
     * Returns authentication status stream
     * @returns {Observable<boolean>}
     */
    onAuthenticationChange(): Observable<boolean>{
        return this.onTokenChange()
            .pipe(map(function (token) { return token.isValid(); }));
    }
    /**
     * Authenticates with the selected provider
     * Stores received token in the token storage
     *
     * Example:
     * authenticate('email', {email: 'email@example.com', password: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<AuthResult>}
     */
    authenticate(provider: string, data?: any): Observable<AuthResult>{
        var _this = this;
        this.processing_request=true;
        return this.getProvider(provider).authenticate(data)
            .pipe(switchMap(function (result) {
            _this.processing_request=false;
            return _this.processResultToken(result);
        }));
    }
    /**
     * Registers with the selected provider
     * Stores received token in the token storage
     *
     * Example:
     * register('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<AuthResult>}
     */
    register(provider: string, data?: any): Observable<AuthResult>{
        var _this = this;
        this.processing_request=true;
        return this.getProvider(provider).register(data)
            .pipe(switchMap(function (result) {
            _this.processing_request=false;    
            return _this.processResultToken(result);
        }));
    }
    /**
     * Sign outs with the selected provider
     * Removes token from the token storage
     *
     * Example:
     * logout('email')
     *
     * @param provider
     * @returns {Observable<AuthResult>}
     */
	 
    logout(provider: string): Observable<AuthResult>{
        var _this = this;
        return this.getProvider(provider).logout()
            .pipe(switchMap(function (result) {				
            //if (result.isSuccess()) {
                _this.tokenService.clear()
                    .pipe(map(function () { return result; }));
            //}
            return observableOf(result);
        }));
    }
	
	/*
    logout(provider: string): Observable<AuthResult>{
        var _this = this;
        return this.getProvider(provider).logout().subscribe(result=>{
            if (result.isSuccess()) {
                _this.tokenService.clear()
                    .pipe(map(function () { return result; }));
            }
            return observableOf(result);				
		   });
    }	
	*/
	
    /**
     * Sends forgot password request to the selected provider
     *
     * Example:
     * requestPassword('email', {email: 'email@example.com'})
     *
     * @param provider
     * @param data
     * @returns {Observable<AuthResult>}
     */
    requestPassword(provider: string, data?: any): Observable<AuthResult>{
        return this.getProvider(provider).requestPassword(data);
    }

    /**
     * Sends verify reset code request to the selected provider
     *
     * Example:
     * verifyCode('code', {code: '234234'})
     *
     * @param provider
     * @param data
     * @returns {Observable<AuthResult>}
     */
    verifyCode(provider: string, data?: any): Observable<AuthResult>{
        var _this = this;
        this.processing_request=true;
        return this.getProvider(provider).verifyCode(data)
            .pipe(switchMap(function (result) {
            _this.processing_request=false;    
            return _this.processResultToken(result);
        }));
    }

    /**
     * Tries to reset password with the selected provider
     *
     * Example:
     * resetPassword('email', {newPassword: 'test'})
     *
     * @param provider
     * @param data
     * @returns {Observable<AuthResult>}
     */
    resetPassword(provider: string, data?: any): Observable<AuthResult>{
        return this.getProvider(provider).resetPassword(data);
    }
    private processResultToken(result){
        var _this = this;
        if (result.isSuccess() && result.getRawToken()) {
            return this.tokenService.setRaw(result.getRawToken())
                .pipe(switchMap(function () { return _this.tokenService.get(); }), map(function (token) {
                result.setToken(token);
                return result;
            }));
        }
        return observableOf(result);
    }
    private getProvider(provider){
        if (!this.providers[provider]) {
            throw new TypeError("Nb auth provider '" + provider + "' is not registered");
        }
        return this.injector.get(this.providers[provider].service);
    }
	
    decorators = [
        { type: Injectable },
    ];
    
	ctorParameters() {
		return [
        { type: TokenService, },
        { type: Injector, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [AUTH_PROVIDERS] },] },
      ];
	}	
	
}
