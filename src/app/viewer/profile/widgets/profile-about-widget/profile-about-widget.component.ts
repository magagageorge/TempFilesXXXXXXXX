import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ProfileService } from '@app/services/profile.service';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-profile-about-widget',
  templateUrl: './profile-about-widget.component.html',
  styleUrls: ['./profile-about-widget.component.scss']
})
export class ProfileAboutWidgetComponent implements OnInit {

  urlviwerService:UrlViewerService;
  profileService:ProfileService;
  editProfileService:EditProfileService;
  constructor(urlviwerService:UrlViewerService,profileService:ProfileService,editProfileService:EditProfileService) {
    this.urlviwerService=urlviwerService;
    this.profileService=profileService;
    this.editProfileService=editProfileService;
   }

  ngOnInit() {
  }

}
