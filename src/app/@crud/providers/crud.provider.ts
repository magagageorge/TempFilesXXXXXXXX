import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { deepExtend, getDeepFromObject } from '../helpers';
import { ActivatedRoute } from '@angular/router';
import { Observable,of as observableOf } from 'rxjs';
import { CrudResult } from '../services/crud-results';
import { map,switchMap,catchError } from 'rxjs/operators';

@Injectable()
export class CrudProvider {
    protected http: HttpClient;
    protected route;
    public defaultConfig: any;
    protected crudconfig: any;
    setConfig(crudconfig: any): void{
		this.crudconfig = deepExtend({}, this.defaultConfig, crudconfig);
	}
	
    getConfigValue(key: string): any{
		return getDeepFromObject(this.crudconfig, key, null);		
	};
	
	constructor(http:HttpClient,route:ActivatedRoute){
		var _this=this;
        _this.crudconfig = {};
        _this.http=http;
        _this.route=route;
        _this.defaultConfig = {
            baseEndpoint: 'http://196.45.144.12/app.woorbi.com/',
            //baseEndpoint: 'http://app.woorbi.com/',
			route_url:'',
            create: {
				alwaysFail: false,
                // TODO: what does that mean?
                endpoint: 'create',
                method: 'post',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Please Provide all Required Fields'],
                defaultMessages: ['You have been successfully Added Information'],
            },
            update: {
				alwaysFail: false,				
                // TODO: what does that mean?
                endpoint: 'update',
                method: 'post',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Please Provide all Required Fields'],
                defaultMessages: ['You have been successfully Added Information'],
            },			
            getone: {
				alwaysFail: false,	
                // TODO: what does that mean?
                endpoint: 'view',
                method: 'get',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['Reqeusted Information is not Found'],
                defaultMessages: ['Success'],
            },			
            getall: {
				alwaysFail: false,					
                // TODO: what does that mean?
                endpoint: 'index',
                method: 'get',
                defaultErrors: ['Reqeusted Information is not Found'],
                defaultMessages: [''],
            },					
            delete: {
				alwaysFail: false,					
                endpoint: 'delete',
                method: 'DELETE',
                redirect: {
                    success: '/',
                    failure: null,
                },
                defaultErrors: ['An Error Occured'],
                defaultMessages: ['You have been successfully deleted the Record'],
            },		
            errors: {
                key: 'data.errors',
                getter: function (module, res) {
                    return getDeepFromObject(res.error, _this.getConfigValue('errors.key'), _this.getConfigValue(module + ".defaultErrors"));
                },
            },
            messages: {
                key: 'data.messages',
                getter: function (module, res) {
                    return getDeepFromObject(res.body, _this.getConfigValue('messages.key'), _this.getConfigValue(module + ".defaultMessages"));
                },
            },
        };

		
	}
	
    decorators = [
        { type: Injectable },
    ];
	
    /** @nocollapse */
     ctorParameters() {
		return [
        { type: HttpClient, },
        { type: ActivatedRoute, },
    ]; }		
		
    create(data?: any,parameters?:any): Observable<CrudResult>{
		var _this=this;
        var method = _this.getConfigValue('create.method');
		var pars=(parameters!=null && parameters!=undefined)?(Object.entries(parameters).map(([key, val]) => `${key}=${val}`).join('&')):'';
        var url = _this.getActionEndpoint('create')+(pars!=''?'?'+pars:'');
        return _this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function (res) {
            if (_this.getConfigValue('create.alwaysFail')) {
                throw _this.createFailResponse(data);
            }
            return res;
        }),
        map(function (res) {
            return new CrudResult(true, res, _this.getConfigValue('create.redirect.success'), [], _this.getConfigValue('messages.getter')('create', res));
        }),
		catchError(function (res) {
            var errors = [];
            if (res instanceof HttpErrorResponse) {
                errors = _this.getConfigValue('errors.getter')('create', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return observableOf(new CrudResult(false, res, _this.getConfigValue('create.redirect.failure'), errors));
        }));		
		
	}
	
    update(data?: any,parameters?:any): Observable<CrudResult>{
		var _this=this;
        var method = _this.getConfigValue('update.method');
		var pars=(parameters!=null && parameters!=undefined)?(Object.entries(parameters).map(([key, val]) => `${key}=${val}`).join('&')):'';
        var url = _this.getActionEndpoint('update')+(pars!=''?'?'+pars:'');
        return _this.http.request(method, url, { body: data, observe: 'response' })
            .pipe(map(function(res) {
            if (_this.getConfigValue('update.alwaysFail')){
                throw _this.createFailResponse(data);
            }
            return res;
        }),
        map(function(res){
            return new CrudResult(true, res, _this.getConfigValue('update.redirect.success'), [], _this.getConfigValue('messages.getter')('update', res));
        }),
		catchError(function (res){
            var errors = [];
            if (res instanceof HttpErrorResponse){
                errors = _this.getConfigValue('errors.getter')('update', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return observableOf(new CrudResult(false, res, _this.getConfigValue('update.redirect.failure'), errors));
        }));		
	}
	
	
    getall(parameters?:any): Observable<CrudResult>{
		var _this=this;
        var method = _this.getConfigValue('getall.method');
		var pars=(parameters!=null && parameters!=undefined)?(Object.entries(parameters).map(([key, val]) => `${key}=${val}`).join('&')):'';
        var url = _this.getActionEndpoint('getall')+(pars!=''?'?'+pars:'');
        return _this.http.request(method, url, { body: null, observe: 'response' })
            .pipe(map(function (res) {
            if (_this.getConfigValue('getall.alwaysFail')) {
                throw _this.createFailResponse(null);
            }
            return res;
        }),
        map(function (res) {
            return new CrudResult(true, res, _this.getConfigValue('getall.redirect.success'), [], _this.getConfigValue('messages.getter')('getall', res));
        }),
		catchError(function (res){
            var errors = [];
            if (res instanceof HttpErrorResponse) {
                errors = _this.getConfigValue('errors.getter')('getall', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return observableOf(new CrudResult(false, res, _this.getConfigValue('getall.redirect.failure'), errors));
        }));		
	}
	
     getone(parameters?:any): Observable<CrudResult>{
		var _this=this;
        var method = _this.getConfigValue('getone.method');
		var pars=(parameters!=null && parameters!=undefined)?(Object.entries(parameters).map(([key, val]) => `${key}=${val}`).join('&')):'';
        var url = _this.getActionEndpoint('getone')+(pars!=''?'?'+pars:'');
        return _this.http.request(method, url, { body: '', observe: 'response' })
            .pipe(map(function (res) {
            if (_this.getConfigValue('getone.alwaysFail')) {
                throw _this.createFailResponse('');
            }
            return res;
        }),
        map(function (res) {
            return new CrudResult(true, res, _this.getConfigValue('getone.redirect.success'), [], _this.getConfigValue('messages.getter')('getone', res));
        }),
		catchError(function (res) {
            var errors = [];
            if (res instanceof HttpErrorResponse) {
                errors = _this.getConfigValue('errors.getter')('getone', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return observableOf(new CrudResult(false, res, _this.getConfigValue('getone.redirect.failure'), errors));
        }));		
	}
	
   
   delete(parameters?: any): Observable<CrudResult>{
		var _this=this;	   
        var method = _this.getConfigValue('delete.method');
		var pars=(parameters!=null && parameters!=undefined)?(Object.entries(parameters).map(([key, val]) => `${key}=${val}`).join('&')):'';
        var url = _this.getActionEndpoint('delete')+(pars!=''?'?'+pars:'');
        return _this.http.request(method, url, { body: null, observe: 'response' })
            .pipe(map(function (res) {
            if (_this.getConfigValue('delete.alwaysFail')) {
                throw _this.createFailResponse(null);
            }
            return res;
        }),
        map(function (res) {
            return new CrudResult(true, res, _this.getConfigValue('delete.redirect.success'), [], _this.getConfigValue('messages.getter')('create', res));
        }),
		catchError(function (res) {
            var errors = [];
            if (res instanceof HttpErrorResponse) {
                errors = _this.getConfigValue('errors.getter')('delete', res);
            }
            else {
                errors.push('Something went wrong.');
            }
            return observableOf(new CrudResult(false, res, _this.getConfigValue('delete.redirect.failure'), errors));
        }));	   
   };
    protected getActionEndpoint(action: string): string{
		
        var actionEndpoint = this.getConfigValue(action + ".endpoint");
        var baseEndpoint = this.getConfigValue('baseEndpoint');
		var actionRoute=this.getConfigValue('route_url');
        return baseEndpoint + actionRoute + actionEndpoint;		
	}	
    protected createFailResponse(data?: any): HttpResponse<Object>{
		return new HttpResponse({ body: {}, status: 401 });
	}
    protected createSuccessResponse(data?: any): HttpResponse<Object>{
		return new HttpResponse({ body: {}, status: 200 });
	}
    protected getJsonSafe(res: HttpResponse<Object>): any{
		return res.body;
	}

}
