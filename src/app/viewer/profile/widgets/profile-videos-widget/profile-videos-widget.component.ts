import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-profile-videos-widget',
  templateUrl: './profile-videos-widget.component.html',
  styleUrls: ['./profile-videos-widget.component.scss']
})
export class ProfileVideosWidgetComponent implements OnInit {

  urlviwerService:UrlViewerService;
  constructor(urlviwerService:UrlViewerService) { 
    this.urlviwerService=urlviwerService;
  }

  ngOnInit() {
  }

}
