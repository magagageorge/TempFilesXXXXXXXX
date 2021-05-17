import { Component, OnInit } from '@angular/core';
import { JobScheduleListItem } from '@app/daywaka/models/job.model';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';

@Component({
  selector: 'app-near-by-jobs',
  templateUrl: './near-by-jobs.component.html',
  styleUrls: ['./near-by-jobs.component.scss']
})
export class NearByJobsComponent implements OnInit {

  JOB_LIST: JobScheduleListItem[] = [];
  top_title:string='NEARBY JOBS';
  job_details_route:string = 'jobs/view';
  constructor(public daywakaService: DaywakaService) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): any {
    var _this = this;
    this.daywakaService.service.getProvider(this.daywakaService.provider).crudconfig.route_url = 'daywaka/view-jobs/';
    return this.daywakaService.service.getall(this.daywakaService.provider, { stage: 'open' }).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData() as JobScheduleListItem[];
        _this.JOB_LIST = data;
      }
    });
  }

}
