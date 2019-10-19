import { Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudService } from '../crud.service';
export declare class CrudSimpleInterceptor implements HttpInterceptor {
    private injector;
    protected headerName: string;
    constructor(injector: Injector, headerName?: string);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    protected readonly crudService: CrudService;
}
