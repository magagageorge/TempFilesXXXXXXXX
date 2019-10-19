import { Injectable } from '@angular/core';
import { Observable,of as observableOf ,  BehaviorSubject } from 'rxjs';
import { TokenStorage } from './token-storage';
import { AuthToken } from './token';
import { filter,share } from 'rxjs/operators';


/**
 * Service that allows you to manage authentication token - get, set, clear and also listen to token changes over time.
 */
export class TokenService {
    protected tokenStorage: TokenStorage;
    protected token$: BehaviorSubject<AuthToken>;
    constructor(tokenStorage: TokenStorage){
        this.tokenStorage = tokenStorage;
        this.token$ = new BehaviorSubject(null);
        this.publishStoredToken();		
	}
    /**
     * Publishes token when it changes.
     * @returns {Observable<AuthToken>}
     */
    tokenChange(): Observable<AuthToken>{
        return this.token$
            .pipe(filter(function (value) { return !!value; }), share());		
	}
    /**
     * Sets a token into the storage. This method is used by the AuthService automatically.
     *
     * @param {AuthToken} token
     * @returns {Observable<any>}
     */
    set(token: AuthToken): Observable<null>{
        this.tokenStorage.set(token);
        this.publishStoredToken();
        return observableOf(null);		
	}
    /**
     * Sets a raw token into the storage. This method is used by the AuthService automatically.
     *
     * @param {string} token
     * @returns {Observable<any>}
     */
    setRaw(token: string): Observable<null>{
        this.tokenStorage.setRaw(token);
        this.publishStoredToken();
        return observableOf(null);		
	}
    /**
     * Returns observable of current token
     * @returns {Observable<AuthToken>}
     */
    get(): Observable<AuthToken>{
        var token = this.tokenStorage.get();
        return observableOf(token);		
	}
    /**
     * Removes the token and published token value
     *
     * @returns {Observable<any>}
     */
    clear(): Observable<null>{
        this.tokenStorage.clear();
        this.publishStoredToken();
        return observableOf(null);		
	}
    protected publishStoredToken(): void{
        this.token$.next(this.tokenStorage.get());		
	}
}
