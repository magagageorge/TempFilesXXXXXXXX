import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';
import { ProfileService } from '@app/services/profile.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { MyProfile } from '@app/models/profile/my-profile';
import { Country } from '@app/models/country';
import { UtilitiesService } from '@app/services/utilities.service';
import { Observable, of } from 'rxjs';
import { City } from '@app/models/city';
import { CalenderLib } from '@app/libs/wf-calendar/calender-lib';

@Component({
  selector: 'app-profile-top-card-widget',
  templateUrl: './profile-top-card-widget.component.html',
  styleUrls: ['./profile-top-card-widget.component.scss']
})
export class ProfileTopCardWidgetComponent implements OnInit {

  editProfileService: EditProfileService;
  profileService: ProfileService;
  utilitiesService: UtilitiesService
  profileGroup: FormGroup;
  profileModel: MyProfile = new MyProfile();
  Local_Account_settings: any;
  acc_gender: string = '';
  acc_city_id: string = '';
  acc_country_id: string = '';
  acc_birthday: string = '';
  acc_firstname: string = '';
  acc_lastname: string = '';

  countries: Country[] = [];
  curr_year: any;
  resultData: string[];
  parameters: any = {};
  str_success_code: string;
  str_invalid_code: string;
  code_resent: boolean = false;
  resending_code: boolean = false;
  selectedLocation: Country = new Country();
  submitted: boolean = false;
  inp_month: any;
  inp_day: any;
  inp_year: any;
  datePicker: CalenderLib;

  stored_city_id: Number;
  constructor(editProfileService: EditProfileService, profileService: ProfileService, utilitiesService: UtilitiesService, private formBuilder: FormBuilder) {
    this.editProfileService = editProfileService;
    this.profileService = profileService;
    this.utilitiesService = utilitiesService;
    this.selectedLocation = new Country();
  }

  ngOnInit() {
    var __this = this;
    this.profileGroup = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      title: ['', [Validators.required]],
      birthday: ['', []],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city_id: ['', [Validators.required]],
      inp_month: ['', [Validators.required]],
      inp_day: ['', [Validators.required]],
      inp_year: ['', [Validators.required]],
    });
    this.datePicker = new CalenderLib();
    this.datePicker.selected_day = this.profileService.MYPROFILE.birth_date.day;
    this.datePicker.selected_month = this.profileService.MYPROFILE.birth_date.month;
    this.datePicker.selected_year = this.profileService.MYPROFILE.birth_date.year;
    this.fillForm();
  }

  get f() { return this.profileGroup.controls; }

  fillForm() {
    this.profileModel.firstname = this.profileService.MYPROFILE.firstname;
    this.profileModel.lastname = this.profileService.MYPROFILE.lastname;
    this.profileModel.title = this.profileService.MYPROFILE.title;
    this.profileModel.gender = this.profileService.MYPROFILE.gender;
    this.profileModel.country = this.profileService.MYPROFILE.country;
    this.profileModel.city_id = this.profileService.MYPROFILE.city_id;
    this.profileModel.birthday = this.profileService.MYPROFILE.birthday;
  }

  correctDate() {
  }

  save() {
    this.submitted = true;
    if (this.profileGroup.invalid) {
      return;
    }
    this.profileModel.birthday = this.datePicker.getDate();
    this.editProfileService.saveProfileInfo(this.profileModel).subscribe(response => {
    });
    this.editProfileService.cancelEditTopProfileCard();
  }

  switchLocation(id: any) {
    var _this = this;
    this.filterCountry(id).subscribe((country: Country) => {
      if (country) {
        _this.selectedLocation = country;
        if (_this.profileService.MYPROFILE.city_id != '') {
          _this.searchCityInSelectedCountry(Number(_this.profileService.MYPROFILE.city_id)).subscribe(city => {
            if (city) {
              _this.profileModel.city_id = _this.profileService.MYPROFILE.city_id;
            } else {
              _this.profileModel.city_id = '';
            }
          });
        }
      }else{
        _this.selectedLocation = new Country();
      }
    });
  }

  filterCountry(id: any): Observable<Country> {
    return of(this.utilitiesService.COUNTRIES.find((country: Country) => country.id === id));
  }

  searchCityInSelectedCountry(id: number): Observable<City> {
    return of(this.selectedLocation.cities.find((city: City) => city.id === id));
  }

}
