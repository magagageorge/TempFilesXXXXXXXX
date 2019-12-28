import { Component, OnInit } from '@angular/core';
import { AuthJWTToken, AuthService } from '../../../auth';
import { AuthGuard } from '../../../services/auth-guard.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ProfileModel } from 'app/@crud/models/ProfileModel';
import { getDeepFromObject } from 'app/@crud/helpers';
import { UtilitiesService } from 'app/services/utilities.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from 'app/@crud/crud.options';
import { CrudProvider } from 'app/@crud/providers/crud.provider';
import { MenuService } from '../../services/menu.service';
import { NotificationsService } from 'app/services/notifications.service';
import { ProfileService } from '@app/services/profile.service';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Profile } from '@app/models/profile/profile';

@Component({
  selector: 'app-wf-navbar',
  templateUrl: './wf-navbar.component.html',
  styleUrls: ['./wf-navbar.component.scss']
})
export class WfNavbarComponent implements OnInit {

  public profileService: ProfileService;
  urlViewerService:UrlViewerService;
  public is_authenticated: boolean = true;
  public myProfile: Profile;
  public hideSideNav: boolean = true;
  public showSideNav: boolean = false;
  user: {};

  private router: Router;
  private route: ActivatedRoute;
  constructor(public authService: AuthService,
    public authGuard: AuthGuard, profileService: ProfileService,
    public utilities: UtilitiesService,urlViewerService:UrlViewerService, public menuservice: MenuService, public notificationService: NotificationsService, router: Router,route: ActivatedRoute) {
    this.profileService = profileService;
    this.urlViewerService=urlViewerService;
    this.route=route;
    this.router=router;
  }

  ngOnInit() {
    this.myProfile=(this.profileService.MYPROFILE as any) as Profile;
    this.authService.isAuthenticated().subscribe((authenticated: any) => {
      this.is_authenticated = authenticated;
    });
  }

  toogleSideBar() {
    this.menuservice.toogleSideBar();
  }
  hideSideBar() {
    this.menuservice.hideSideBar();
  }

}
