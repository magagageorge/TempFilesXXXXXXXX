import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ProfileService } from '@app/services/profile.service';

@Component({
  selector: 'app-edit-avatar-options-widget',
  templateUrl: './edit-avatar-options-widget.component.html',
  styleUrls: ['./edit-avatar-options-widget.component.scss']
})
export class EditAvatarOptionsWidgetComponent implements OnInit {

  editProfileService:EditProfileService;
  urlViewerService:UrlViewerService;
  profileService:ProfileService;
  constructor(editProfileService:EditProfileService,profileService:ProfileService,urlViewerService:UrlViewerService) { 
    this.editProfileService=editProfileService;
    this.urlViewerService=urlViewerService;
    this.profileService=profileService;
  }


  ngOnInit() {
  }

}
