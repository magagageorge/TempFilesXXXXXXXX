import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';
import { ProfileService } from '@app/services/profile.service';
import { UtilitiesService } from '@app/services/utilities.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListItemsPicker } from '@app/libs/list-items-picker/list-items-picker';

@Component({
  selector: 'app-shared-edit-profile-skills-widget',
  templateUrl: './edit-profile-skills-widget.component.html',
  styleUrls: ['./edit-profile-skills-widget.component.scss']
})
export class SharedEditProfileSkillsWidgetComponent implements OnInit {

  editProfileService: EditProfileService;
  profileService: ProfileService;
  utilitiesService: UtilitiesService
  skillsGroup: FormGroup;
  skillsPicker: ListItemsPicker = new ListItemsPicker();
  inEditskillsPicker: ListItemsPicker = new ListItemsPicker();
  submitted: boolean = false;

  constructor(editProfileService: EditProfileService, profileService: ProfileService, utilitiesService: UtilitiesService, private formBuilder: FormBuilder) {
    this.editProfileService = editProfileService;
    this.profileService = profileService;
    this.utilitiesService = utilitiesService;
    this.skillsPicker.itemsList = this.utilitiesService.SuggestedSkills;
    this.inEditskillsPicker.itemsList=this.profileService.MYPROFILE.skills;
  }

  ngOnInit() {

  }

  save() {
    if (this.submitted) {
      return false;
    }

    this.submitted = true;
    if (this.editProfileService.editMode.skills.action=='addSkills' && this.skillsPicker.selectedItemsList.length > 0) {
      this.editProfileService.saveProfileSkills(this.skillsPicker.selectedItemsList);
    }

    if (this.editProfileService.editMode.skills.action=='editSkills' && this.inEditskillsPicker.selectedItemsList.length > 0) {
      this.editProfileService.deleteProfileSkills(this.inEditskillsPicker.selectedItemsList);
    }

    this.editProfileService.cancelEditProfile();
  }

}
