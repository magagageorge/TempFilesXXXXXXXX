import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from '../auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated()         
      .pipe(
        take(1),                              
        map((authenticated) => {         
          if (!authenticated){
            this.router.navigate(['/login']);  
            return false;
          }
          return true;
        }),
      )
  }  
  
   IsloggedIn(): boolean {	 
    if(this.authService.isAuthenticated()!=null){return true;}else{return false;}
  }  
  
  
}

