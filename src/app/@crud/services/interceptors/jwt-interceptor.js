import { Injectable, Injector } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { CrudService } from '../crud.service';
var CrudJWTInterceptor = /** @class */ (function () {
    function CrudJWTInterceptor(injector) {
        this.injector = injector;
    }
    CrudJWTInterceptor.prototype.intercept = function (req, next) {
        return this.crudService.getToken()
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
    };
    Object.defineProperty(CrudJWTInterceptor.prototype, "crudService", {
        get: function () {
            return this.injector.get(CrudService);
        },
        enumerable: true,
        crudconfigurable: true
    });
    CrudJWTInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CrudJWTInterceptor.ctorParameters = function () { return [
        { type: Injector, },
    ]; };
    return CrudJWTInterceptor;
}());
export { CrudJWTInterceptor };
//# sourceMappingURL=jwt-interceptor.js.map