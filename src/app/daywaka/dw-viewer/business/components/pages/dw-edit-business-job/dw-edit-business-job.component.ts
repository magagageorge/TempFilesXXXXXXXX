import { Component, OnInit } from '@angular/core';
import { JobAd, JobForm } from '@app/daywaka/models/job.model';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { DwViewerService } from '@app/daywaka/services/dw-viewer.service';

@Component({
  selector: 'app-dw-edit-business-job',
  templateUrl: './dw-edit-business-job.component.html',
  styleUrls: ['./dw-edit-business-job.component.scss']
})
export class DwEditBusinessJobComponent implements OnInit {

  JOB_AD: JobAd = new JobAd();
  jobForm: JobForm = new JobForm();
  loading: boolean = false;
  constructor(public daywakaService: DaywakaService, public dwViewerService: DwViewerService) { }

  ngOnInit(): void {
    this.loadJob();
  }

  loadJob(): any {
    var _this = this;
    _this.loading = true;
    this.daywakaService.service.getProvider(this.daywakaService.provider).crudconfig.route_url = 'daywaka/job-manager/';
    return this.daywakaService.service.getone(this.daywakaService.provider, { id: this.dwViewerService.VIEWER_URL_ACTION }).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData() as JobAd;
        _this.fillJobForm(data);
        _this.loading = false;
      }
    });
  }

  fillJobForm(jobAd: JobAd) {
    if (jobAd) {
      this.jobForm.id = jobAd.id;
      this.jobForm.name = jobAd.name;
      this.jobForm.no_workers = jobAd.no_workers;
      this.jobForm.description = jobAd.description;
      this.jobForm.category_id = jobAd.category.id;
      this.jobForm.selected_page = jobAd.page;
      this.jobForm.selected_profile = jobAd.profile;
      this.jobForm.fee = jobAd.fee;
      this.jobForm.currency = jobAd.currency;
      this.jobForm.travel_tips = jobAd.travel_tips;
      this.jobForm.requirements = jobAd.requirements;
      this.jobForm.advertized_by = jobAd.advertized_by;
      this.jobForm.startdate = (jobAd.startdate != '') ? jobAd.startdate.split('/').join('-') : jobAd.startdate;
      this.jobForm.starttime = this.setFormTime(jobAd.starttime);
      this.jobForm.duration_hours = jobAd.duration_hours;
      this.jobForm.duration_minutes = jobAd.duration_minutes;
      this.jobForm.multiple_days = jobAd.multiple_days;
      this.jobForm.status = (jobAd.status == 'Published') ? true : false;
      if (jobAd.location.length > 0) {
        this.jobForm.location_name = jobAd.location[0].location_name;
        this.jobForm.address = jobAd.location[0].address;
        this.jobForm.city = jobAd.location[0].city;
        this.jobForm.zip = jobAd.location[0].zip;
        this.jobForm.lat = jobAd.location[0].latitude;
        this.jobForm.lng = jobAd.location[0].longitude;
        this.jobForm.latlngPos = ((parseInt(this.jobForm.lat) > 0 || parseInt(this.jobForm.lat) < 0) && (parseInt(this.jobForm.lng) > 0 || parseInt(this.jobForm.lng) < 0)) ? { lat: parseFloat(this.jobForm.lat), lng: parseFloat(this.jobForm.lng) } : null;
        console.log(this.jobForm.latlngPos);
      }
      this.jobForm.page_id = (jobAd.page != null) ? jobAd.page.id : null;
      this.jobForm.profile_id = (jobAd.profile != null) ? jobAd.profile.user_id : null;
    }
  }

  setFormTime(time: any) {
    var t = null;
    var a = null;
    if (time != null && time != '') {
      a = time.split(':');
      t = { hour: parseInt(a[0]), minute: parseInt(a[1]), second: 0 }
    }
    return t;
  }

}
