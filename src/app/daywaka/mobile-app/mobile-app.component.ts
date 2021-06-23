import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-mobile-app',
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.scss']
})
export class MobileAppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
    , private title: Title, private meta: Meta
  ) { }

  Redirect(): Observable<boolean> {
    return this.authService.isAuthenticated()
      .pipe(
        take(1),
        map((authenticated) => {
          if (authenticated) {
            this.router.navigate(['/nearby']);
            return true;
          } else {
            this.router.navigate(['/welcome']);
          }
          return false;
        }),
      )
  }
  ngOnInit() {
    this.title.setTitle('Woorbi Daywaka');
    this.Redirect().subscribe();
  }

}
