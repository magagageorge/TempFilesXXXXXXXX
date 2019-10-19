import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';
import { AuthService } from '@app/auth';

@Component({
  selector: 'app-wf-navbar-empty',
  templateUrl: './wf-navbar-empty.component.html',
  styleUrls: ['./wf-navbar-empty.component.scss']
})
export class WfNavbarEmptyComponent implements OnInit {

  public is_authenticated: boolean=true;
  constructor(public authService: AuthService){	 
}

ngOnInit() {
this.authService.isAuthenticated().subscribe((authenticated: any) =>
{		
this.is_authenticated=authenticated;
if(authenticated){			
}
});
}

}
