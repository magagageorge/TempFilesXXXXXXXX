import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-add-profile-photo-alert-widget',
  templateUrl: './add-profile-photo-alert-widget.component.html',
  styleUrls: ['./add-profile-photo-alert-widget.component.scss']
})
export class AddProfilePhotoAlertWidgetComponent implements OnInit {

  profileService: ProfileService;
  editProfileService: EditProfileService;
  constructor(profileService: ProfileService, editProfileService: EditProfileService) {
    this.profileService = profileService;
    this.editProfileService = editProfileService;
  }

  ngOnInit() {
  }

}
