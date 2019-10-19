import { AbstractAuthProvider } from './abstract-auth.provider';
import { AuthResult } from '../services/auth-result';
import { Injectable } from '@angular/core';
import { of as observableOf,Observable } from 'rxjs';
import { delay } from 'rxjs/operators';


export interface DummyAuthProviderConfig{
    delay?: number;
    alwaysFail?: boolean;
}
export class DummyAuthProvider extends AbstractAuthProvider {
    clear(data?: any): Observable<AuthResult> {
        throw new Error("Method not implemented.");
    }
    protected defaultConfig: DummyAuthProviderConfig={
            delay: 1000,
        };
	constructor(){
	  super();	
	}
    authenticate(data?: any): Observable<AuthResult>{
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getConfigValue('delay')));
    }
	
    register(data?: any): Observable<AuthResult>{
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getConfigValue('delay')));
    }
	
    requestPassword(data?: any): Observable<AuthResult>{
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getConfigValue('delay')));
    }
    resetPassword(data?: any): Observable<AuthResult>{
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getConfigValue('delay')));
    }
    logout(data?: any): Observable<AuthResult>{
        return observableOf(this.createDummyResult(data))
            .pipe(delay(this.getConfigValue('delay')));
    }
    protected createDummyResult(data?: any): AuthResult{
        if (this.getConfigValue('alwaysFail')) {
            // TODO we dont call tokenService clear during logout in case result is not success
            return new AuthResult(false, this.createFailResponse(data), null, ['Something went wrong.']);
        }
        // TODO is it missed messages here, is it token should be defined
        return new AuthResult(true, this.createSuccessResponse(data), '/', ['Successfully logged in.']);
    };
    decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    
	ctorParameters = function () { return []; };
}
