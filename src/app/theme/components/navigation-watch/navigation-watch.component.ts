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
  navigationService:NavigationService;

  constructor(router: Router, route: ActivatedRoute,navigationService:NavigationService) {
    this.navigationService=navigationService;
    this.route=route;
    this.router=router;
   }

  ngOnInit() {
    var _this=this;
  // Subscribe to RouterEvents
  this.router.events
  .subscribe((event) => {
    if (event instanceof NavigationStart) {
      // Could add more chars url:path?=;other possible
      const urlDelimitators = new RegExp(/[?//,;&:#$+=]/);
      let currentUrlPath = event.url.slice(1).split(urlDelimitators)[0];
      //console.log('URL_PATH: ', currentUrlPath);
    }
  });

  
    this.route.params.subscribe(params => {
      _this.navigationService.setState(params);           
     });
  }

}
