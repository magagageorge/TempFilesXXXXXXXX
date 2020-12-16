import { Component, OnInit } from '@angular/core';
import { JobAd } from '@app/daywaka/models/job.model';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { DwViewerService } from '@app/daywaka/services/dw-viewer.service';

@Component({
  selector: 'app-dw-business-jobs',
  templateUrl: './dw-business-jobs.component.html',
  styleUrls: ['./dw-business-jobs.component.scss']
})
export class DwBusinessJobsComponent implements OnInit {


  JOB_LIST:JobAd[]=[];
  constructor(public daywakaService:DaywakaService,public dwViewerService:DwViewerService) { }

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): any {
    var _this = this;
    this.daywakaService.service.getProvider(this.daywakaService.provider).crudconfig.route_url = 'daywaka/view-jobs/';
    return this.daywakaService.service.getall(this.daywakaService.provider, {stage:this.dwViewerService.VIEWER_URL_ACTION}).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData() as JobAd[];
        _this.JOB_LIST = data;
      }
    });
  }

}
