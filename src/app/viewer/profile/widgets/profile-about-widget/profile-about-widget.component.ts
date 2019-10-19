import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-profile-about-widget',
  templateUrl: './profile-about-widget.component.html',
  styleUrls: ['./profile-about-widget.component.scss']
})
export class ProfileAboutWidgetComponent implements OnInit {

  urlviwerService:UrlViewerService;
  constructor(urlviwerService:UrlViewerService) {
    this.urlviwerService=urlviwerService;
   }

  ngOnInit() {
  }

}
