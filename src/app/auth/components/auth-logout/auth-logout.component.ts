import { Component, OnInit , Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthSocialLink ,AUTH_OPTIONS,AuthOptions} from '@auth/auth.options';
import { AuthService } from '@auth/services/auth.service';
import { getDeepFromObject } from '@auth/helpers';

@Component({
  selector: 'app-auth-logout',
  templateUrl: './auth-logout.component.html',
  styleUrls: ['./auth-logout.component.scss']
})
export class AuthLogoutComponent implements OnInit {

    protected service: AuthService;
    protected config: {};
    protected router: Router;
    redirectDelay: number;
    provider: string;
	
    constructor(service: AuthService,router: Router,@Inject(AUTH_OPTIONS) AUTH_OPTIONS:AuthOptions) {
        this.service = service;
        this.config = AUTH_OPTIONS;  		
        this.router = router;
        this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
        this.provider = this.getConfigValue('forms.logout.provider');
	}

    ngOnInit() {
         this.logout(this.provider);
    }

    logout(provider: string): void{
        var _this = this;
        this.service.logout(provider).subscribe(result=>{
            window.location.reload();
            var redirect = result.getRedirect();
            if (redirect) {
                setTimeout(function () {
                    return _this.router.navigateByUrl(redirect);
                }, _this.redirectDelay);
            }
        });
    }

    getConfigValue(key: string): any{
        return getDeepFromObject(this.config, key, null);
    }	


}
