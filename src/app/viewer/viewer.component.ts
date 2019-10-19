import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '@app/services/profile.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  router:Router;
  profileService:ProfileService;
  route:ActivatedRoute;
  _url:string="";
  urlviwerService:UrlViewerService;
  constructor(urlviwerService:UrlViewerService,router:Router,route:ActivatedRoute) {
    this.router=router;
    this.route=route;
    this.urlviwerService=urlviwerService;    
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.setViewer(params.url);
  });
  }

  setViewer(url:string){
    this.urlviwerService.setViewer(url);  
  }

}
