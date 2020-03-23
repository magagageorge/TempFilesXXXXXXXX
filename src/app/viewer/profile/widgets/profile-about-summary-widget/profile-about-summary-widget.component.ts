import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-profile-about-summary-widget',
  templateUrl: './profile-about-summary-widget.component.html',
  styleUrls: ['./profile-about-summary-widget.component.scss']
})
export class ProfileAboutSummaryWidgetComponent implements OnInit {

  urlviwerService:UrlViewerService;
  editProfileService:EditProfileService;
  constructor(urlviwerService:UrlViewerService,editProfileService:EditProfileService) { 
    this.urlviwerService=urlviwerService;
    this.editProfileService=editProfileService;
  }

  ngOnInit() {
  }

}
