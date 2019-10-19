import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResult } from '../services/auth-result';
import { deepExtend, getDeepFromObject } from '../helpers';

export abstract class AbstractAuthProvider {
    protected defaultConfig: any={};
    protected config: any={};
    setConfig(config: any): void{
        this.config = deepExtend({}, this.defaultConfig, config);
    }
    getConfigValue(key: string): any{
        return getDeepFromObject(this.config, key, null);
    }
    abstract authenticate(data?: any): Observable<AuthResult>;
    abstract clear(data?: any): Observable<AuthResult>;
    abstract register(data?: any): Observable<AuthResult>;
    abstract requestPassword(data?: any): Observable<AuthResult>;
    abstract resetPassword(data?: any): Observable<AuthResult>;
    abstract logout(): Observable<AuthResult>;
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
