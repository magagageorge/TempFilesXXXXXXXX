import { Component, OnInit } from '@angular/core';
import { JobScheduleListItem } from '@app/daywaka/models/job.model';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss']
})
export class MyJobsComponent implements OnInit {

  UPCOMING_JOBS: JobScheduleListItem[] = [];
  APPROVED_JOBS: JobScheduleListItem[] = [];
  CANCELLED_JOBS: JobScheduleListItem[] = [];
  WITHDRAWN_JOBS: JobScheduleListItem[] = [];
  WORKING_JOBS: JobScheduleListItem[] = [];
  COMPLETED_JOBS: JobScheduleListItem[] = [];

  top_title: string = 'MY JOBS';
  job_details_route: string = 'view';
  constructor(public daywakaService: DaywakaService) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): any {
    var _this = this;
    this.daywakaService.service.getProvider(this.daywakaService.provider).crudconfig.route_url = 'daywaka/my-jobs/';
    return this.daywakaService.service.getall(this.daywakaService.provider, {}).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData();
        _this.WORKING_JOBS = data.working_now;
        _this.UPCOMING_JOBS = data.upcoming;
        _this.APPROVED_JOBS = data.approved;
        _this.COMPLETED_JOBS = data.completed;
        _this.CANCELLED_JOBS = data.cancelled;
        _this.WITHDRAWN_JOBS = data.withdrawn;
      }
    });
  }

}
