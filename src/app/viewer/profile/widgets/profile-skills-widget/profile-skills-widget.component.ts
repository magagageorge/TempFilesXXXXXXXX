import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-profile-skills-widget',
  templateUrl: './profile-skills-widget.component.html',
  styleUrls: ['./profile-skills-widget.component.scss']
})
export class ProfileSkillsWidgetComponent implements OnInit {

  urlviwerService:UrlViewerService;
  constructor(urlviwerService:UrlViewerService) { 
    this.urlviwerService=urlviwerService;
  }

  ngOnInit() {
  }

}
