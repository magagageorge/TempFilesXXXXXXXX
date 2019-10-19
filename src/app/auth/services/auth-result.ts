import { AuthToken } from './token/token';
export class AuthResult {
    protected success: boolean;
    protected response: any;
    protected redirect: any;
    protected token: AuthToken;
    protected rawToken: string;
    protected errors: string[];
    protected messages: string[];
    constructor(success: boolean, response?: any, redirect?: any, errors?: any, messages?: any, rawToken?: string) {
        this.success = success;
        this.response = response;
        this.redirect = redirect;
        this.errors = [];
        this.messages = [];
        this.errors = this.errors.concat([errors]);
        if (errors instanceof Array){
            this.errors = errors;
        }
        this.messages = this.messages.concat([messages]);
        if(messages instanceof Array) {
            this.messages = messages;
        }
        this.rawToken = rawToken;
    }
	
    setToken(token: AuthToken): void{
        this.token = token;
        this.rawToken = token.toString();
    }
    getResponse(): any{
        return this.response;
    }
    getRawToken(): any{
        return this.rawToken;
    }
    getToken(): any{
        return this.token;
    }
    getRedirect(): any{
        return this.redirect;
    }
    getErrors(): string[]{
        return this.errors.filter(function (val) { return !!val; });
    }
    getMessages(): string[]{
        return this.messages.filter(function (val) { return !!val; });
    }
    isSuccess(): boolean{
        return this.success;
    }
    isFailure(): boolean{
        return !this.success;
    }
}
