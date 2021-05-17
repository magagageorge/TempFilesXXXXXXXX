import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListItemsPicker } from '@app/libs/list-items-picker/list-items-picker';
import { EditProfileService } from '@app/services/edit-profile.service';
import { ProfileService } from '@app/services/profile.service';
import { UtilitiesService } from '@app/services/utilities.service';

@Component({
  selector: 'app-shared-edit-profile-languages-widget',
  templateUrl: './shared-edit-profile-languages-widget.component.html',
  styleUrls: ['./shared-edit-profile-languages-widget.component.scss']
})
export class SharedEditProfileLanguagesWidgetComponent implements OnInit {

  editProfileService: EditProfileService;
  profileService: ProfileService;
  utilitiesService: UtilitiesService
  languagesGroup: FormGroup;
  languagesPicker: ListItemsPicker = new ListItemsPicker();
  inEditlanguagesPicker: ListItemsPicker = new ListItemsPicker();
  submitted: boolean = false;

  constructor(editProfileService: EditProfileService, profileService: ProfileService, utilitiesService: UtilitiesService, private formBuilder: FormBuilder) {
    this.editProfileService = editProfileService;
    this.profileService = profileService;
    this.utilitiesService = utilitiesService;
    this.inEditlanguagesPicker.itemsList = this.profileService.MYPROFILE.languages;
  }

  ngOnInit() {
    this.utilitiesService.getLanguages({}).subscribe(results => {
      this.languagesPicker.itemsList = results.getResultData();
    });
  }

  save() {
    if (this.submitted) {
      return false;
    }

    this.submitted = true;
    if (this.editProfileService.editMode.languages.action == 'addLanguages' && this.languagesPicker.selectedItemsList.length > 0) {
      this.editProfileService.saveProfileLanguages(this.languagesPicker.selectedItemsList);
    }

    if (this.editProfileService.editMode.languages.action == 'editLanguages' && this.inEditlanguagesPicker.selectedItemsList.length > 0) {
      this.editProfileService.deleteProfileLanguages(this.inEditlanguagesPicker.selectedItemsList);
    }

    this.editProfileService.cancelEditProfile();
  }

}
