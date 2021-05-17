import { Location } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { JobAd, JobForm } from '@app/daywaka/models/job.model';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { PageSummary } from '@app/models/page/page.model';
import { ProfileSummary } from '@app/models/profile/profile';
import { PageService } from '@app/services/page.service';
import { ProfileAboutSummaryWidgetComponent } from '@app/viewer/profile/widgets/profile-about-summary-widget/profile-about-summary-widget.component';

@Component({
  selector: 'app-dw-post-job-form',
  templateUrl: './post-job-form.component.html',
  styleUrls: ['./post-job-form.component.scss']
})
export class PostJobFormComponent implements OnInit {

  @ViewChild('picker') picker: any;
  @Input() route: string;
  @Input() jobModel: JobForm;
  show_map: boolean = false;
  submitted: boolean = false;
  frm_jobform: FormGroup;
  saving_job: boolean = false;
  starttime: string;
  DHOURS: any[] = [];
  DMINUTES: any[] = [];

  constructor(public daywakaService: DaywakaService, private formBuilder: FormBuilder, public pageService: PageService, public router: Router,public route_location:Location) { }

  ngOnInit(): void {
    this.frm_jobform = this.formBuilder.group({
      name: ['', [Validators.required]],
      no_workers: ['', [Validators.required]],
      description: ['', [Validators.required]],
      requirements: [],
      travel_tips: [],
      multiple_days: [],
      currency: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      duration_hours: ['', [Validators.required]],
      duration_minutes: ['', [Validators.required]],
      fee: ['', [Validators.required]],
      location_name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city_id: [],
      status: [],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      page_id: [],
      profile_id: [],
      dates: this.formBuilder.array([]),
      starttime: ['', [Validators.required]],
      startdate: ['', [Validators.required]]
    });
    this.generateDuration();
  }

  get frm() {
    return this.frm_jobform.controls;
  }

  get pageId() {
    return this.frm_jobform.get('page_id');
  }

  get multipleDays() {
    return this.frm_jobform.get('multiple_days');
  }

  get profileId() {
    return this.frm_jobform.get('profile_id');
  }

  get dates() {
    return this.frm_jobform.get('dates') as FormArray;
  }

  openMap(state: boolean) {
    this.show_map = state;
  }

  checkFormValidations() {
    if (this.jobModel.advertized_by == 'Individual') {
      this.profileId.setValidators([Validators.required]);
      this.pageId.clearValidators();
    } else if (this.jobModel.advertized_by == 'Business') {
      this.pageId.setValidators([Validators.required]);
      this.profileId.clearValidators();
    } else { }

    if (this.jobModel.multiple_days != 'Yes' && this.jobModel.multiple_days != 'No') {
      this.multipleDays.setValidators([Validators.required]);
    }

    this.multipleDays.updateValueAndValidity();
    this.pageId.updateValueAndValidity();
    this.profileId.updateValueAndValidity();
  }

  save() {
    this.submitted = true;
    this.checkFormValidations();
    console.log('Tryiing to Save!!!!!!!!!!!!!!!!');
    console.log(this.frm.multiple_days.errors);
    if (this.saving_job) {
      return;
    }
    if (this.frm_jobform.invalid) {
      return;
    }
    var _this = this;
    const formData: any = new FormData();
    if (_this.jobModel.id != null) {
      formData.append("id", _this.jobModel.id);
    }
    formData.append("category_id", _this.jobModel.category_id);
    formData.append("name", _this.jobModel.name);
    formData.append("no_workers", _this.jobModel.no_workers);
    formData.append("description", _this.jobModel.description);

    formData.append("requirements", _this.jobModel.requirements);
    formData.append("travel_tips", _this.jobModel.travel_tips);
    formData.append("multiple_days", _this.jobModel.multiple_days);

    formData.append("currency", _this.jobModel.currency);
    formData.append("duration_hours", _this.jobModel.duration_hours);
    formData.append("duration_minutes", _this.jobModel.duration_minutes);
    formData.append("status", (_this.jobModel.status == true) ? 'Published' : 'Draft');

    formData.append("fee", _this.jobModel.fee);
    formData.append("location_name", _this.jobModel.location_name);
    formData.append("address", _this.jobModel.address);
    formData.append("city_id", JSON.stringify(_this.jobModel.city_id));
    formData.append("city", _this.jobModel.city);
    formData.append("zip", _this.jobModel.zip);
    formData.append("lat", _this.jobModel.lat);
    formData.append("lng", _this.jobModel.lng);

    if (_this.jobModel.startdate != null && _this.jobModel.starttime != null) {
      formData.append("worktime", _this.jobModel.startdate + ' ' + _this.setGetTime);
    }

    formData.append("advertized_by", _this.jobModel.advertized_by);
    if (this.jobModel.advertized_by == 'Business') {
      formData.append("page_id", _this.jobModel.page_id);
    } else {
      formData.append("profile_id", _this.jobModel.profile_id);
    }

    _this.saving_job = true;
    _this.submitted = false;

    this.daywakaService.service.getProvider(this.daywakaService.provider).crudconfig.route_url = 'daywaka/job-manager/';
    if (this.jobModel.id > 0) {
      this.daywakaService.WaitProcessingRequest(true, 'Saving Changes!');
      return this.daywakaService.service.update(this.daywakaService.provider, formData, { id: _this.jobModel.id }).subscribe(results => {
        _this.saving_job = false;
        _this.submitted = false;
        _this.daywakaService.WaitProcessingRequest(false, '');
        if (results.isSuccess()) {
          var data = results.getResultData();
          if (data.done == true && data.jobcontent != null) {
            //_this.adEditedEmit.emit(_this.daywakaService.setAdContentForm(data.adcontent));
            //_this.daywakaService.ad_form_open = false;
            var url = (data.jobcontent.page != null) ? data.jobcontent.page.url : ((data.jobcontent.profile != null) ? data.jobcontent.profile.url : '')
            url = (url != '') ? url + "/view-job/" + data.jobcontent.id + "" : "";
            _this.router.navigateByUrl(url);
          }
        }
      });
    } else {
      this.daywakaService.WaitProcessingRequest(true, 'Saving Your Ad!');
      return this.daywakaService.service.create(this.daywakaService.provider, formData).subscribe(results => {
        _this.saving_job = false;
        _this.submitted = false;
        _this.daywakaService.WaitProcessingRequest(false, '');
        if (results.isSuccess()) {
          var data = results.getResultData();
          if (data.done == true && data.jobcontent != null) {
            if (_this.daywakaService.DW_CONFIGS == null) {
              _this.daywakaService.loadDaywakaAccount();
            }
            var url = (data.jobcontent.page != null) ? data.jobcontent.page.url : ((data.jobcontent.profile != null) ? data.jobcontent.profile.url : '')
            url = (url != '') ? url + "/jobs/open" : "";
            _this.router.navigateByUrl(url);
          }
        }
      });
    }
  }

  setSelectedPage(page: PageSummary) {
    this.jobModel.selected_page = page;
    this.jobModel.page_id = page.id;
    this.jobModel.advertized_by = 'Business';
  }

  setSelectedProfile(profile: ProfileSummary) {
    this.jobModel.selected_profile = profile;
    this.jobModel.profile_id = profile.user_id;
    this.jobModel.advertized_by = 'Individual';
  }

  updateLocationCoordinates(cords: any) {
    this.jobModel.lat = cords.lat;
    this.jobModel.lng = cords.lng;
  }

  generateDuration() {

    for (var h = 1; h < 21; h++) {
      this.DHOURS.push({ n: h });
    }

    this.DMINUTES = [{ n: 0 }, { n: 5 }, { n: 10 }, { n: 15 }, { n: 20 }, { n: 25 }, { n: 30 }, { n: 35 }, { n: 40 }, { n: 45 }, { n: 50 }, { n: 55 }];

  }

  get setGetTime() {
    var hour = 0;
    var minute = 0;
    var time = '';
    if (this.jobModel.starttime != null) {
      hour = this.jobModel.starttime.hour;
      minute = this.jobModel.starttime.minute;
      time = ((hour < 10) ? '0' + hour : hour) + ':' + ((minute < 10) ? '0' + minute : minute);
    }

    return time;
  }

}
