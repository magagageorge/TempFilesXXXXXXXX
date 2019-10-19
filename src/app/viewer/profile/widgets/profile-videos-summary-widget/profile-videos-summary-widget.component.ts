import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-profile-videos-summary-widget',
  templateUrl: './profile-videos-summary-widget.component.html',
  styleUrls: ['./profile-videos-summary-widget.component.scss']
})
export class ProfileVideosSummaryWidgetComponent implements OnInit {

  urlviwerService:UrlViewerService;
  constructor(urlviwerService:UrlViewerService) { 
    this.urlviwerService=urlviwerService;
  }
  ngOnInit() {
  }

}
