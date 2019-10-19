import { Component, OnInit } from '@angular/core';
import { AuthService as sAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { AuthService } from "app/auth/";

@Component({
  selector: 'app-wf-social-header',
  templateUrl: './wf-social-header.component.html',
  styleUrls: ['./wf-social-header.component.scss']
})
export class WfSocialHeaderComponent implements OnInit {

  protected user: SocialUser;
  protected loggedIn: boolean;
  private authService:AuthService;
  
  constructor(private sauthService: sAuthService,authService:AuthService) { 
    this.authService=authService;
  }
 
  ngOnInit() {
    var _this = this;
    this.sauthService.authState.subscribe((user) => {
      console.log(user);
      _this.user = user;
      _this.loggedIn = (user != null);
      _this.pushAccount(user);
    });
  }

  pushAccount(account:SocialUser){
    if(this.authService.social_accounts.filter((x:any)=>x.id===account.id).length==0){
      this.authService.social_accounts=this.authService.social_accounts.filter((x:any)=>x.provider!==account.provider);
      this.authService.social_accounts=this.authService.social_accounts.concat(account);
    }
  }

}
