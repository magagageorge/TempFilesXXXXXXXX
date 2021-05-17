import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobAdDetailed } from '@app/daywaka/models/job.model';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { DwProfileViewerService } from '@app/daywaka/services/dw-profile-viewer.service';
import { DwViewerService } from '@app/daywaka/services/dw-viewer.service';

@Component({
  selector: 'app-dw-view-business-job',
  templateUrl: './dw-view-business-job.component.html',
  styleUrls: ['./dw-view-business-job.component.scss']
})
export class DwViewBusinessJobComponent implements OnInit {

  public JOB_AD: JobAdDetailed = new JobAdDetailed();
  loading: boolean = false;
  base_job_url: string = "";
  view_profile_title: string = "Details";
  nav_tabs: { active: string } = { active: 'activity' };
  constructor(public daywakaService: DaywakaService, public dwViewerService: DwViewerService, public dwProfileViewerService: DwProfileViewerService, private router: Router, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.view_profileId != undefined && params.view_profileId > 0) {
        this.dwProfileViewerService.viewProfileInModal(true, params.view_profileId);
      } else {
        this.dwProfileViewerService.viewProfileInModal(false, null);
      }
    });
    this.base_job_url = this.jobBaseUrl(this.router.url);
    this.loadJob();
  }

  loadJob(): any {
    var _this = this;
    _this.loading = true;
    this.daywakaService.service.getProvider(this.daywakaService.provider).crudconfig.route_url = 'daywaka/job-manager/';
    return this.daywakaService.service.getone(this.daywakaService.provider, { id: this.dwViewerService.VIEWER_URL_ACTION }).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData() as JobAdDetailed;
        _this.JOB_AD = data;
        _this.loading = false;
      }
    });
  }

  jobBaseUrl(url: string): string {
    var l_index = url.indexOf('/view-profile');
    if (l_index > 0) {
      return url.substring(0, l_index);
    }
    return url;
  }

  get jobRequirements() {
    if (this.JOB_AD != null && this.JOB_AD.requirements.trim() != null) {
      return this.JOB_AD.requirements.trim().split(/\r?\n/);
    }
    return null;
  }

  viewTab(tabname: string) {
    this.nav_tabs.active = tabname;
  }

}
