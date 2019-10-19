import { Inject, Injectable, Injector } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { CrudService } from '../crud.service';
import { CRUD_INTERCEPTOR_HEADER } from '../../crud.options';
var CrudSimpleInterceptor = /** @class */ (function () {
    function CrudSimpleInterceptor(injector, headerName) {
        if (headerName === void 0) { headerName = 'Authorization'; }
        this.injector = injector;
        this.headerName = headerName;
    }
    CrudSimpleInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return this.crudService.getToken()
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
    };
    Object.defineProperty(CrudSimpleInterceptor.prototype, "crudService", {
        get: function () {
            return this.injector.get(CrudService);
        },
        enumerable: true,
        crudconfigurable: true
    });
    CrudSimpleInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CrudSimpleInterceptor.ctorParameters = function () { return [
        { type: Injector, },
        { type: undefined, decorators: [{ type: Inject, args: [CRUD_INTERCEPTOR_HEADER,] },] },
    ]; };
    return CrudSimpleInterceptor;
}());
export { CrudSimpleInterceptor };