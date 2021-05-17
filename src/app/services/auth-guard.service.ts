import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from '../auth';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private storageService: LocalStorageService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated()
      .pipe(
        take(1),
        map((authenticated) => {
          if (!authenticated) {
            if (state.url != '/logout') {
              this.storageService.set('WB_AFTER_LOGIN_REDIRECT_URL', state.url);
            }
            this.router.navigate(['/login']);
            return false;
          }
          return true;
        }),
      )
  }

  IsloggedIn(): boolean {
    if (this.authService.isAuthenticated() != null) { return true; } else { return false; }
  }


}

