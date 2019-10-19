import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-profile-experience-widget',
  templateUrl: './profile-experience-widget.component.html',
  styleUrls: ['./profile-experience-widget.component.scss']
})
export class ProfileExperienceWidgetComponent implements OnInit {

  urlviwerService:UrlViewerService;
  constructor(urlviwerService:UrlViewerService) { 
   this.urlviwerService=urlviwerService;
  }

  ngOnInit() {
  }

}
