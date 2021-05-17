import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
   * Returns token from localStorage
   * @returns {AuthToken}
   */
  get(key:string): string {
    return localStorage.getItem(key);
  }

  /**
   * Sets raw (string) token to localStorage
   * @param {string} token
   */
  set(key:string,data: string): void {
    localStorage.setItem(key, data);
  }
  /**
   * Clears token from localStorage
   */
  clear(key:string): void {
    localStorage.removeItem(key);
  }

}
