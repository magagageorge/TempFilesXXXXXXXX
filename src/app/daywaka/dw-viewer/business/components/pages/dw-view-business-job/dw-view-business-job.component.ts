import { Component, OnInit } from '@angular/core';
import { JobAd } from '@app/daywaka/models/job.model';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { DwViewerService } from '@app/daywaka/services/dw-viewer.service';

@Component({
  selector: 'app-dw-view-business-job',
  templateUrl: './dw-view-business-job.component.html',
  styleUrls: ['./dw-view-business-job.component.scss']
})
export class DwViewBusinessJobComponent implements OnInit {

  public JOB_AD: JobAd = new JobAd();
  loading: boolean = false;
  constructor(public daywakaService: DaywakaService, public dwViewerService: DwViewerService) { }

  ngOnInit(): void {
    this.loadJob();
  }

  loadJob(): any {
    var _this = this;
    _this.loading = true;
    this.daywakaService.service.getProvider(this.daywakaService.provider).crudconfig.route_url = 'daywaka/job/';
    return this.daywakaService.service.getone(this.daywakaService.provider, { id: this.dwViewerService.VIEWER_URL_ACTION }).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData() as JobAd;
        _this.JOB_AD = data;
        _this.loading = false;
      }
    });
  }

}
