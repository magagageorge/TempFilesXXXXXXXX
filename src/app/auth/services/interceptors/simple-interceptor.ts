import { Inject, Injectable, Injector } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AUTH_INTERCEPTOR_HEADER } from '../../auth.options';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

export class AuthSimpleInterceptor implements HttpInterceptor {
    private injector;
	protected readonly authService: AuthService;
    protected headerName: string;
    constructor(injector: Injector, headerName?: string) {
        if (headerName === void 0) { headerName = 'Authorization'; }
        this.injector = injector;
        this.headerName = headerName;
		this.defProperty();
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        var _this = this;
        return this.authService.getToken()
            .pipe(switchMap(function (token) {
            if (token && token.getValue()) {
                req = req.clone({
                    setHeaders: (_a = {},
                        _a[_this.headerName] = token.getValue(),
                        _a),
                });
            }
            return next.handle(req);
            var _a;
        }));
    }

	
   defProperty(){
    Object.defineProperty(AuthSimpleInterceptor.prototype, "authService", {
        get: function () {
            return this.injector.get(AuthService);
        },
        enumerable: true,
        configurable: true
    });
   }
    
	decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ctorParameters(){
		return [
        { type: Injector, },
        { type: undefined, decorators: [{ type: Inject, args: [AUTH_INTERCEPTOR_HEADER,] },] },
    ]; 
	}
	
	
}
