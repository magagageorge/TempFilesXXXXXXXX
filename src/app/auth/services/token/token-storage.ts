import { AuthToken, TokenClass, nbCreateToken } from './token';
import { Inject, Injectable } from '@angular/core';
import { AUTH_TOKEN_CLASS } from '../../auth.options';

export abstract class TokenStorage {
    abstract get(): AuthToken;
    abstract set(token: AuthToken): any;
    abstract setRaw(token: string): any;
    abstract clear(): any;
}
/**
 * Service that uses browser localStorage as a storage.
 *
 * The token storage is provided into auth module the following way:
 * ```
 * { provide: TokenStorage, useClass: TokenLocalStorage },
 * ```
 *
 * If you need to change the storage behaviour or provide your own - just extend your class from basic `TokenStorage`
 * or `TokenLocalStorage` and provide in your `app.module`:
 * ```
 * { provide: TokenStorage, useClass: TokenCustomStorage },
 * ```
 *
 */
//@Injectable()
export class TokenLocalStorage implements TokenStorage {
    protected tokenClass: TokenClass;
    protected key: string;
    constructor(@Inject(AUTH_TOKEN_CLASS) AUTH_TOKEN_CLASS: TokenClass) {
        this.tokenClass = AUTH_TOKEN_CLASS;
        this.key = 'auth_app_token';
    }
    /**
     * Returns token from localStorage
     * @returns {AuthToken}
     */
    get(): AuthToken {
        return nbCreateToken(this.tokenClass, localStorage.getItem(this.key));
    }
    /**
     * Sets token to localStorage
     * @param {AuthToken} token
     */
    set(token: AuthToken): void {
        localStorage.setItem(this.key, token.toString());
    }
    /**
     * Sets raw (string) token to localStorage
     * @param {string} token
     */
    setRaw(token: string): void {
        localStorage.setItem(this.key, token);
    }
    /**
     * Clears token from localStorage
     */
    clear(): void {
        localStorage.removeItem(this.key);
    }

    /*
     decorators = [
        { type: Injectable },
    ];
	
    ctorParameters() {
        return [
        { type: undefined, decorators: [{ type: Inject, args: [AUTH_TOKEN_CLASS,] },] },
       ];
    }
   */
}
