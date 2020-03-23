import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';
import { ProfileService } from '@app/services/profile.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilitiesService } from '@app/services/utilities.service';
import { CalenderLib } from '@app/libs/wf-calendar/calender-lib';
import { WorkExperience } from '@app/models/profile/work-experience';

@Component({
  selector: 'app-edit-profile-experience-widget',
  templateUrl: './edit-profile-experience-widget.component.html',
  styleUrls: ['./edit-profile-experience-widget.component.scss']
})
export class EditProfileExperienceWidgetComponent implements OnInit {

  editProfileService: EditProfileService;
  profileService: ProfileService;
  utilitiesService: UtilitiesService
  experienceGroup: FormGroup;
  experienceModel: WorkExperience = new WorkExperience();

  submitted: boolean = false;
  startDate: CalenderLib;
  endDate: CalenderLib;

  constructor(editProfileService: EditProfileService, profileService: ProfileService, utilitiesService: UtilitiesService, private formBuilder: FormBuilder) {
    this.editProfileService = editProfileService;
    this.profileService = profileService;
    this.utilitiesService = utilitiesService;
  }

  ngOnInit() {
    var __this = this;
    this.experienceGroup = this.formBuilder.group({
      company_name: ['', [Validators.required]],
      position: ['', [Validators.required]],
      startyear: ['', [Validators.required]],
      startmonth: ['', [Validators.required]],
      endyear: ['', []],
      endmonth: ['', []],
      description: ['', []],
      current_here: ['', []],
    });
    this.startDate = new CalenderLib();
    this.startDate.withDays = false;
    this.startDate.max_year = new Date().getFullYear();
    this.endDate = new CalenderLib();
    this.endDate.withDays = false;
    this.endDate.max_year = new Date().getFullYear();
    this.fillForm();
    this.handleFormChanges();
  }

  get f() { return this.experienceGroup.controls; }

  fillForm() {
    if (this.editProfileService.editMode.experience.action == 'edit') {
      this.experienceModel.company_name = this.editProfileService.editMode.experience.inEditData.company_name;
      this.experienceModel.position = this.editProfileService.editMode.experience.inEditData.position;
      this.experienceModel.startyear = this.editProfileService.editMode.experience.inEditData.startyear;
      this.experienceModel.startmonth = this.editProfileService.editMode.experience.inEditData.startmonth;
      this.experienceModel.endyear = this.editProfileService.editMode.experience.inEditData.endyear;
      this.experienceModel.endmonth = this.editProfileService.editMode.experience.inEditData.endmonth;
      this.experienceModel.description = this.editProfileService.editMode.experience.inEditData.description;
      this.experienceModel.current_here = this.editProfileService.editMode.experience.inEditData.current_here;
      this.experienceModel.id = this.editProfileService.editMode.experience.inEditData.id;
    }
  }

  save() {
    this.submitted = true;
    if (this.experienceGroup.invalid) {
      return;
    }
    if (this.experienceModel.id != null && this.experienceModel.id != 0) {
      this.editProfileService.updateWorkExperience(this.experienceModel);
    } else {
      this.editProfileService.saveWorkExperience(this.experienceModel);
    }
    this.editProfileService.cancelEditProfile();
  }

  delete(){
    this.editProfileService.ConfirmDeleteProfileExperience(this.editProfileService.editMode.experience.inEditData);
  }

  handleFormChanges() {
    this.isCurrentHere.valueChanges.subscribe(
      isCurrentHere => {
        if (isCurrentHere === true) {
          this.EndYear.clearValidators();
          this.EndMonth.clearValidators();
          this.EndYear.updateValueAndValidity();
          this.EndMonth.updateValueAndValidity();
        } else {
          this.EndYear.setValidators([Validators.required]);
          this.EndMonth.setValidators([Validators.required]);
        }
      }
    );
  }

  get isCurrentHere() {
    return this.experienceGroup.get('current_here');
  }
  get EndYear() {
    return this.experienceGroup.get('endyear');
  }
  get EndMonth() {
    return this.experienceGroup.get('endmonth');
  }


}
