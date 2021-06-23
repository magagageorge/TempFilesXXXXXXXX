import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobAd, JobScheduleListItem } from '@app/daywaka/models/job.model';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { DwViewerService } from '@app/daywaka/services/dw-viewer.service';

@Component({
  selector: 'app-dw-business-jobs',
  templateUrl: './dw-business-jobs.component.html',
  styleUrls: ['./dw-business-jobs.component.scss']
})
export class DwBusinessJobsComponent implements OnInit {


  JOB_LIST: JobAd[] = [];
  JOBSCHEDULE_LIST: JobScheduleListItem[] = [];
  constructor(public daywakaService: DaywakaService, public dwViewerService: DwViewerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var _this = this;
    this.daywakaService.isAccountLoaded().subscribe((accountLoaded) => {
      if (accountLoaded) {
        if (_this.daywakaService.DW_CONFIGS.defaultPage != null) {
          //_this.loadJobs(_this.daywakaService.DW_CONFIGS.defaultPage.id);
          _this.route.params.subscribe(params => {
            _this.loadJobs(_this.daywakaService.DW_CONFIGS.defaultPage.id);
          });
        }
      } else {
        if (_this.daywakaService.loading_daywaka == false && _this.daywakaService.DW_CONFIGS.defaultPage == null) {
          _this.daywakaService.loadDaywakaAccount();
        }
      }
    });
  }

  loadJobs(page_id): any {
    var _this = this;
    this.daywakaService.service.getProvider(this.daywakaService.provider).crudconfig.route_url = 'daywaka/job-manager/';
    return this.daywakaService.service.getall(this.daywakaService.provider, { p: page_id, stage: this.dwViewerService.VIEWER_URL_ACTION }).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData();
        if (_this.dwViewerService.VIEWER_URL_ACTION == 'open') {
          _this.JOB_LIST = data as JobAd[];
          _this.JOBSCHEDULE_LIST = [];
        } else {
          _this.JOBSCHEDULE_LIST = data as JobScheduleListItem[];
          _this.JOB_LIST = [];
        }
      }
    });
  }

  jobItemUpdate(itemState: any) {
    if (itemState.status == 'deleted') {
      this.removeJobItemFromList(itemState.job_id);
    }
  }

  removeJobItemFromList(job_id: number) {
    this.JOB_LIST = this.JOB_LIST.filter((jobAd: JobAd) => jobAd.id !== job_id);
  }

}
