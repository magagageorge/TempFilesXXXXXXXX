import { Inject, Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
export class AuthJWTInterceptor implements HttpInterceptor {
    private injector;
	protected readonly authService: AuthService;
    constructor(injector: Injector) {
        this.injector = injector;
		this.defProperty();
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.getToken()
            .pipe(switchMap(function (token) {
            if (token.isValid()) {
                var JWT = "Bearer " + token.getValue();
                req = req.clone({
                    setHeaders: {
                        Authorization: JWT,
                    },
                });
            }
            return next.handle(req);
        }));
    }
	
	defProperty(){
       Object.defineProperty(AuthJWTInterceptor.prototype, "authService", {get: function(){ return this.injector.get(AuthService);}, enumerable: true,configurable: true});
    }
	
    decorators = [
        { type: Injectable },
    ];
	
    /** @nocollapse */
    ctorParameters() {
		return [
        { type: Injector, },
    ];
	}	
	
}
