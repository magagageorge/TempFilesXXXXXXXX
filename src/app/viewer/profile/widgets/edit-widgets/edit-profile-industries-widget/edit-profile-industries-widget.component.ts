import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';
import { ProfileService } from '@app/services/profile.service';
import { UtilitiesService } from '@app/services/utilities.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListItemsPicker } from '@app/libs/list-items-picker/list-items-picker';

@Component({
  selector: 'app-edit-profile-industries-widget',
  templateUrl: './edit-profile-industries-widget.component.html',
  styleUrls: ['./edit-profile-industries-widget.component.scss']
})
export class EditProfileIndustriesWidgetComponent implements OnInit {

  editProfileService: EditProfileService;
  profileService: ProfileService;
  utilitiesService: UtilitiesService;
  industriesGroup: FormGroup;
  industriesPicker: ListItemsPicker = new ListItemsPicker();
  inEditindustriesPicker: ListItemsPicker = new ListItemsPicker();
  submitted: boolean = false;

  constructor(editProfileService: EditProfileService, profileService: ProfileService, utilitiesService: UtilitiesService, private formBuilder: FormBuilder) {
    this.editProfileService = editProfileService;
    this.profileService = profileService;
    this.utilitiesService = utilitiesService;
    this.industriesPicker.itemsList = this.utilitiesService.SuggestedIndutries;
    this.inEditindustriesPicker.itemsList = this.profileService.MYPROFILE.dealing;
  }

  ngOnInit() {
  }

  save() {
    if (this.submitted) {
      return false;
    }

    this.submitted = true;
    if (this.editProfileService.editMode.industries.action == 'addIndustries' && this.industriesPicker.selectedItemsList.length > 0) {
      this.editProfileService.saveProfileIndustries(this.industriesPicker.selectedItemsList);
    }
    if (this.editProfileService.editMode.industries.action == 'editIndustries' && this.inEditindustriesPicker.selectedItemsList.length > 0) {
      this.editProfileService.deleteProfileIndustries(this.inEditindustriesPicker.selectedItemsList);
    }
    this.editProfileService.cancelEditProfile();
  }

}
