import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-profile-skills-widget',
  templateUrl: './profile-skills-widget.component.html',
  styleUrls: ['./profile-skills-widget.component.scss']
})
export class ProfileSkillsWidgetComponent implements OnInit {

  urlViewerService:UrlViewerService;
  editProfileService:EditProfileService;
  constructor(urlViewerService:UrlViewerService,editProfileService:EditProfileService) { 
    this.urlViewerService=urlViewerService;
    this.editProfileService=editProfileService;
  }

  ngOnInit() {
  }

}
