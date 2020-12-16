import { Component, OnInit } from '@angular/core';
import { JobAd, JobForm } from '@app/daywaka/models/job.model';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { DwViewerService } from '@app/daywaka/services/dw-viewer.service';

@Component({
  selector: 'app-dw-create-business-job',
  templateUrl: './dw-create-business-job.component.html',
  styleUrls: ['./dw-create-business-job.component.scss']
})
export class DwCreateBusinessJobComponent implements OnInit {

  jobForm: JobForm = new JobForm();
  constructor(public daywakaService: DaywakaService, public dwViewerService: DwViewerService) { }

  ngOnInit(): void {
     this.fillForm();
  }

  fillForm() {
    if (this.dwViewerService.PPVIEWER.page != null) {
      this.jobForm.selected_page = this.dwViewerService.PPVIEWER.page;
      this.jobForm.page_id=this.dwViewerService.PPVIEWER.page.id
      this.jobForm.advertized_by = 'Business';
    }

    if (this.dwViewerService.PPVIEWER.profile != null) {
      this.jobForm.selected_profile = this.dwViewerService.PPVIEWER.profile;
      this.jobForm.profile_id = this.dwViewerService.PPVIEWER.profile.user_id;
      this.jobForm.advertized_by = 'Individual';
    }
    this.jobForm.category_id=null;
  }

}
