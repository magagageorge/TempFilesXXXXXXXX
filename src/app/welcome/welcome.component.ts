import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '@app/auth';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  Redirect(): Observable<boolean> {
    return this.authService.isAuthenticated()         
      .pipe(
        take(1),                              
        map((authenticated) => {         
          if (authenticated){
            this.router.navigate(['/feed']);  
            return false;
          }
          return true;
        }),
      )
  } 
  ngOnInit() {
    this.Redirect().subscribe();
  }

}
