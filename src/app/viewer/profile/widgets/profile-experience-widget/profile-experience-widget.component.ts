import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-profile-experience-widget',
  templateUrl: './profile-experience-widget.component.html',
  styleUrls: ['./profile-experience-widget.component.scss']
})
export class ProfileExperienceWidgetComponent implements OnInit {

  urlViewerService:UrlViewerService;
  editProfileService:EditProfileService;
  constructor(urlViewerService:UrlViewerService,editProfileService:EditProfileService) { 
    this.urlViewerService=urlViewerService;
    this.editProfileService=editProfileService;
  }

  ngOnInit() {
  }

}
