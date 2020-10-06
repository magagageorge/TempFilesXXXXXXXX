import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { NavigationService } from '@app/services/navigation.service';

@Component({
  selector: 'app-navigation-watch',
  templateUrl: './navigation-watch.component.html',
  styleUrls: ['./navigation-watch.component.scss']
})
export class NavigationWatchComponent implements OnInit {

  route: ActivatedRoute;
  router: Router;
  navigationService: NavigationService;
  private previousUrl: string = '';
  private currentUrl: string = '';

  constructor(router: Router, route: ActivatedRoute, navigationService: NavigationService) {
    this.navigationService = navigationService;
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
    var _this = this;
    // Subscribe to RouterEvents
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          _this.previousUrl = _this.currentUrl;
          _this.currentUrl = event.url;
          localStorage.setItem('wb_previousUrl',_this.currentUrl);
          localStorage.setItem('wb_currentUrl',_this.currentUrl);
          // Could add more chars url:path?=;other possible
          //const urlDelimitators = new RegExp(/[?//,;&:#$+=]/);
          //let currentUrlPath = event.url.slice(1).split(urlDelimitators)[0];
          //console.log('URL_PATH: ', _this.previousUrl);
        }
      });
    this.route.params.subscribe(params => {
      _this.navigationService.setState(params);
    });
  }

}
