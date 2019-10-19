import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-profile-about-summary-widget',
  templateUrl: './profile-about-summary-widget.component.html',
  styleUrls: ['./profile-about-summary-widget.component.scss']
})
export class ProfileAboutSummaryWidgetComponent implements OnInit {

  urlviwerService:UrlViewerService;
  constructor(urlviwerService:UrlViewerService) { 
    this.urlviwerService=urlviwerService;
  }

  ngOnInit() {
  }

}
