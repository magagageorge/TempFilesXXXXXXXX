import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostingService } from '@app/services/posting.service';
import { ProfilePhotosService } from '@app/services/profile-photos.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  urlviwerService: UrlViewerService;
  postingService: PostingService;
  parent_route:string='feed';
  navbar_title:string='';
  route: ActivatedRoute;
  router: Router;
  url_page: string = '';

  constructor(urlviwerService: UrlViewerService, postingService: PostingService,profilePhotosService:ProfilePhotosService, router: Router, route: ActivatedRoute) {
    this.urlviwerService = urlviwerService;
    this.postingService = postingService;
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
    var _this=this;
    this.route.params.subscribe(params => {
      if (params.url_page != undefined) {
        _this.urlviwerService.VIEWER_URL_PAGE=params.url_page;
      }else{
        _this.urlviwerService.VIEWER_URL_PAGE='';
      }      
    });
  }

}
