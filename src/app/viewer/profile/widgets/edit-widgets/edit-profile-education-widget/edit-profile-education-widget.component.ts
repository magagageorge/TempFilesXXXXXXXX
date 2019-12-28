import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';
import { ProfileService } from '@app/services/profile.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilitiesService } from '@app/services/utilities.service';
import { CalenderLib } from '@app/libs/wf-calendar/calender-lib';
import { ProfileEducation } from '@app/models/profile/profile-education';

@Component({
  selector: 'app-edit-profile-education-widget',
  templateUrl: './edit-profile-education-widget.component.html',
  styleUrls: ['./edit-profile-education-widget.component.scss']
})
export class EditProfileEducationWidgetComponent implements OnInit {

  editProfileService: EditProfileService;
  profileService: ProfileService;
  utilitiesService: UtilitiesService
  educationGroup: FormGroup;
  educationModel: ProfileEducation = new ProfileEducation();

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
    this.educationGroup = this.formBuilder.group({
      institution_name: ['', [Validators.required]],
      major: ['', [Validators.required]],
      startyear: ['', [Validators.required]],
      startmonth: ['', [Validators.required]],
      endyear: ['', []],
      endmonth: ['', []],
      description: ['', [Validators.required]],
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

  get f() { return this.educationGroup.controls; }

  fillForm() {
    if (this.editProfileService.editMode.education.action == 'edit') {
      this.educationModel.institution_name = this.editProfileService.editMode.education.inEditData.institution_name;
      this.educationModel.major = this.editProfileService.editMode.education.inEditData.major;
      this.educationModel.startyear = this.editProfileService.editMode.education.inEditData.startyear;
      this.educationModel.startmonth = this.editProfileService.editMode.education.inEditData.startmonth;
      this.educationModel.endyear = this.editProfileService.editMode.education.inEditData.endyear;
      this.educationModel.endmonth = this.editProfileService.editMode.education.inEditData.endmonth;
      this.educationModel.description = this.editProfileService.editMode.education.inEditData.description;
      this.educationModel.current_here = this.editProfileService.editMode.education.inEditData.current_here;
      this.educationModel.id = this.editProfileService.editMode.education.inEditData.id;
    }
  }

  save() {
    this.submitted = true;
    if (this.educationGroup.invalid) {
      return;
    }
    if (this.educationModel.id != null && this.educationModel.id != 0) {
      this.editProfileService.updateProfileEducation(this.educationModel);
    } else {
      this.editProfileService.saveProfileEducation(this.educationModel);
    }
    this.editProfileService.cancelEditProfile();
  }

  delete(){
    this.editProfileService.DeleteProfileEducation(this.editProfileService.editMode.education.inEditData);
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
    return this.educationGroup.get('current_here');
  }
  get EndYear() {
    return this.educationGroup.get('endyear');
  }
  get EndMonth() {
    return this.educationGroup.get('endmonth');
  }

}