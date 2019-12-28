import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-profile-educations-widget',
  templateUrl: './profile-educations-widget.component.html',
  styleUrls: ['./profile-educations-widget.component.scss']
})
export class ProfileEducationsWidgetComponent implements OnInit {

  urlViewerService:UrlViewerService;
  editProfileService:EditProfileService;
  constructor(urlViewerService:UrlViewerService,editProfileService:EditProfileService) { 
    this.urlViewerService=urlViewerService;
    this.editProfileService=editProfileService;
  }
  ngOnInit() {
  }

}
