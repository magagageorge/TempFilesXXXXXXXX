import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { CrudService } from './crud.service';
import { CRUD_PROVIDERS } from '../crud.options';
import { TokenService } from 'app/auth/services/token/token.service';


@Injectable()
export class QuestionsService extends  CrudService{
    constructor(tokenService: TokenService,injector: Injector){
	    super(tokenService,injector);
	}
	
	
    decorators = [
        { type: Injectable },
    ];
	
    /** @nocollapse */
    ctorParameters() {
		return [
        { type: Injector, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CRUD_PROVIDERS,] },] },
    ];
	}
	
}
