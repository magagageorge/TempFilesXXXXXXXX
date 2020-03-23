import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';
import { ProfileService } from '@app/services/profile.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyProfile } from '@app/models/profile/my-profile';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-edit-profile-about-widget',
  templateUrl: './edit-profile-about-widget.component.html',
  styleUrls: ['./edit-profile-about-widget.component.scss']
})
export class EditProfileAboutWidgetComponent implements OnInit {

  editProfileService: EditProfileService;
  profileService: ProfileService;
  urlViewerService:UrlViewerService;
  profileGroup: FormGroup;
  profileModel: MyProfile = new MyProfile();
  submitted: boolean = false;

  stored_city_id: Number;
  constructor(editProfileService: EditProfileService,urlViewerService:UrlViewerService, profileService: ProfileService,private formBuilder: FormBuilder) {
    this.editProfileService = editProfileService;
    this.profileService = profileService;
    this.urlViewerService=urlViewerService;
  }

  ngOnInit() {
    var __this = this;
    this.profileGroup = this.formBuilder.group({
      about: ['', []],
    });
    this.fillForm();
  }

  get f() { return this.profileGroup.controls; }

  fillForm() {
    this.profileModel.about = this.profileService.MYPROFILE.about;
  }

  save() {
    this.submitted = true;
    if (this.profileGroup.invalid) {
      return;
    }
    this.editProfileService.saveProfileInfo(this.profileModel).subscribe(result=>{
        console.log(result);
    });
    this.editProfileService.cancelEditTopProfileCard();
  }

}
