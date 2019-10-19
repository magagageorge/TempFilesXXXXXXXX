import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-profile-dealing-widget',
  templateUrl: './profile-dealing-widget.component.html',
  styleUrls: ['./profile-dealing-widget.component.scss']
})
export class ProfileDealingWidgetComponent implements OnInit {

  urlviwerService:UrlViewerService;
  constructor(urlviwerService:UrlViewerService) { 
    this.urlviwerService=urlviwerService;
  }

  ngOnInit() {
  }

}
