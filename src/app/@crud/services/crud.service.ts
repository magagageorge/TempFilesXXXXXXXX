/**
 * @license
 * Copyright Kinggeorge. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Observable,of as observableOf,BehaviorSubject } from 'rxjs';
import { TokenService } from 'app/auth/services/token/token.service';
import { AuthToken } from 'app/auth/services/token/token';
import { CrudResult } from './crud-results';
import { switchMap,map } from 'rxjs/operators';
import { CRUD_PROVIDERS } from '../crud.options';
import { Inject, Injectable, Injector, Optional } from '@angular/core';



/**
 * Common Crud service.
 * Should be used to as an interlayer between UI Components and Crud Providers.
 */
//@Injectable()
export class CrudService {
    protected injector: Injector;
    protected providers: {};
	protected tokenService: TokenService;
    constructor(tokenService: TokenService,injector: Injector, providers?: {}){
        if (providers === void 0) { providers = {}; }
        this.injector = injector;
		this.tokenService = tokenService;
        this.providers = providers;		
	}

    getToken():Observable<AuthToken> {
        return this.tokenService.get();
    }	
		
    /**
     * Get All with the selected provider
     *
     * @param provider
     * @param parameters
     * @returns {Observable<CrudResult>}
     */
    getall(provider: string, parameters:{}): Observable<CrudResult>{
		var _this=this;
        return _this.getProvider(provider).getall(parameters)
            .pipe(switchMap(function (result) {
            return _this.processResultData(result);
        }));		
	}	

    /**
     * GetOne with the selected provider
     *
     * @param provider
     * @param parameters
     * @returns {Observable<CrudResult>}
     */
    getone(provider: string, parameters:{}): Observable<CrudResult>{
		var _this=this;
        return _this.getProvider(provider).getone(parameters)
            .pipe(switchMap(function (result) {
            return _this.processResultData(result);
        }));		
	}	
	
    /**
     * Creates with the selected provider
     *
     * @param provider
     * @param data
     * @returns {Observable<CrudResult>}
     */
    create(provider: string, data?: any,parameters?:{}): Observable<CrudResult>{
		var _this=this;		
        return _this.getProvider(provider).create(data,parameters)
            .pipe(switchMap(function (result) {
            return _this.processResultData(result);
        }));		
	}
	
    /**
     * Tries to update with the selected provider
     *
     * @param provider
     * @param data
     * @returns {Observable<CrudResult>}
     */
    update(provider: string, data: any,parameters?:{}): Observable<CrudResult>{
		var _this=this;		
        return _this.getProvider(provider).update(data,parameters)
            .pipe(switchMap(function (result){
            return _this.processResultData(result);
        }));		
	}
	
    /**
     * Tries to delete with the selected provider
     *
     * @param provider
     * @param data
     * @returns {Observable<CrudResult>}
     */
    delete(provider: string,parameters:{}): Observable<CrudResult>{
		var _this=this;		
        return _this.getProvider(provider).delete(parameters)
            .pipe(switchMap(function (result) {
            return _this.processResultData(result);
        }));		
	}	

    private processResultData(result){
		var _this=this;		
        if (result.isSuccess() && result.getRawToken()) {
            return _this.tokenService.setRaw(result.getRawToken())
                .pipe(switchMap(function () { return _this.tokenService.get(); }), map(function (token) {
                result.setToken(token);
                return result;
            }));
        }
        return observableOf(result);		
	}
    public getProvider(provider){
		var _this=this;		
        if (!_this.providers[provider]) {
            throw new TypeError(" crud provider '" + provider + "' is not registered");
        }
        return _this.injector.get(_this.providers[provider].service);		
	}

    decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ctorParameters() { return [
        { type: TokenService, },
        { type: Injector, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CRUD_PROVIDERS,] },] },
    ]; };	
	
	
}
