import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobScheduleListItem } from '@app/daywaka/models/job.model';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { DwJobViewerService } from '@app/daywaka/services/dw-job-viewer.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  JOBAD: JobScheduleListItem = null;
  top_title: string = 'JOB DETAILS';
  constructor(public daywakaService: DaywakaService, public jobViewerService: DwJobViewerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadJob(params.id);
    });
  }

  loadJob(jobId: number): any {
    var _this = this;
    this.daywakaService.service.getProvider(this.daywakaService.provider).crudconfig.route_url = 'daywaka/view-jobs/';
    return this.daywakaService.service.getone(this.daywakaService.provider, { schedule_id: jobId }).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData() as JobScheduleListItem;
        _this.JOBAD = data;
      }
    });
  }

  get jobRequirements() {
    if (this.JOBAD != null && this.JOBAD.requirements.trim() != null) {
      return this.JOBAD.requirements.trim().split(/\r?\n/);
    }
    return null;
  }

  jobDate() {
    var jdate = '';
    if (this.JOBAD != null && this.JOBAD.fulltime != null) {
      jdate = this.JOBAD.fulltime.substr(0, this.JOBAD.fulltime.indexOf('-'));
    }
    return jdate;
  }

  jobTime() {
    var jtime = '';
    if (this.JOBAD != null && this.JOBAD.fulltime != null) {
      jtime = this.JOBAD.fulltime.substr((this.JOBAD.fulltime.indexOf('-') + 1), this.JOBAD.fulltime.length);
    }
    return jtime;
  }

  jobEstPay() {
    if (this.JOBAD != null) {
      return this.JOBAD.fee;
    }
    return '';
  }

  get latlngPos() {
    var latlng = null;
    if (this.JOBAD != null && this.JOBAD.location.length > 0) {
      latlng = ((parseInt(this.JOBAD.location[0].latitude) > 0 || parseInt(this.JOBAD.location[0].latitude) < 0) && (parseInt(this.JOBAD.location[0].longitude) > 0 || parseInt(this.JOBAD.location[0].longitude) < 0)) ? { lat: parseFloat(this.JOBAD.location[0].latitude), lng: parseFloat(this.JOBAD.location[0].longitude) } : null;
    }
    return latlng;
  }

  updateJobStatus(status: any) {
    this.JOBAD.my_status = status;
  }

}
