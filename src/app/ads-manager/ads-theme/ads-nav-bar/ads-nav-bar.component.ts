import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Profile } from '@app/models/profile/profile';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '@app/services/navigation.service';
import { AuthGuard } from '@app/services/auth-guard.service';
import { UtilitiesService } from '@app/services/utilities.service';
import { MenuService } from '@app/theme/services/menu.service';
import { NotificationsService } from '@app/services/notifications.service';
import { AuthService } from '@app/auth';
import { AdsService } from '@app/ads-manager/services/ads.service';

@Component({
  selector: 'app-ads-nav-bar',
  templateUrl: './ads-nav-bar.component.html',
  styleUrls: ['./ads-nav-bar.component.scss']
})
export class AdsNavBarComponent implements OnInit {

  public profileService: ProfileService;
  public is_authenticated: boolean = true;
  public myProfile: Profile;
  public hideSideNav: boolean = true;
  public showSideNav: boolean = false;
  user: {};

  private router: Router;
  private route: ActivatedRoute;
  navigationService: NavigationService;
  constructor(public authService: AuthService,public adsService:AdsService,
    public authGuard: AuthGuard, profileService: ProfileService,
    public utilities: UtilitiesService, urlViewerService: UrlViewerService, navigationService: NavigationService, public menuservice: MenuService, public notificationService: NotificationsService, router: Router, route: ActivatedRoute) {
    this.profileService = profileService;
    this.navigationService = navigationService;
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
    this.myProfile = (this.profileService.MYPROFILE as any) as Profile;
    this.authService.isAuthenticated().subscribe((authenticated: any) => {
      this.is_authenticated = authenticated;
    });
  }


  getMyProfile(): Profile {
    return (this.profileService.MYPROFILE as any) as Profile;
  }

}
