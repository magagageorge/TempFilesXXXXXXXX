import { AuthToken } from 'app/auth/services/token/token';

export class CrudResult{
    protected success: boolean;
    protected response: any;
    protected redirect: any;
    protected resultData: any;
    protected errors: string[];
    protected messages: string[];
    protected token: AuthToken;
    protected rawToken: string;
	
	constructor(success: boolean, response?: any, redirect?: any, errors?: any, messages?: any, resultData?: any, rawToken?: string){
        this.success = success;
        this.response = response;
        this.redirect = redirect;
        this.errors = [];
        this.messages = [];
        this.errors = this.errors.concat([errors]);
        if (errors instanceof Array) {
            this.errors = errors;
        }
        this.messages = this.messages.concat([messages]);
        if (messages instanceof Array) {
            this.messages = messages;
        }
        this.rawToken = rawToken;
        this.resultData = response.body;
	}

    setToken(token: AuthToken): void{
        this.token = token;
        this.rawToken = token.toString();
    }
	
    getToken(): any{
        return this.token;		
	}

    getRawToken(): any{
        return this.rawToken;		
	}
	
    getResponse(): any{
		return this.response;
	}
	
    getResultData(): any{
        return (this.resultData.items==undefined)?this.resultData:this.resultData.items;
    }
	
	getPagination():any{
	  return (this.resultData._meta==undefined)?{}:this.resultData._meta;	
	}
	
    getRedirect(): any{
        return this.redirect;
    }
	
    getErrors(): string[]{
        return this.errors.filter(function (val) { return !!val; });
    }
	
    getMessages(): string[] {
        return this.messages.filter(function (val) { return !!val; });
    }
	
    isSuccess(): boolean {
        return this.success;
    }
	
    isFailure(): boolean{
        return !this.success;
    }
}
