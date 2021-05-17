import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobAd } from '@app/daywaka/models/job.model';
import { DwViewerService } from '@app/daywaka/services/dw-viewer.service';

@Component({
  selector: 'app-dw-empoloyer-job-list-item-widget',
  templateUrl: './dw-empoloyer-job-list-item-widget.component.html',
  styleUrls: ['./dw-empoloyer-job-list-item-widget.component.scss']
})
export class DwEmpoloyerJobListItemWidgetComponent implements OnInit {

  @Input() jobItem: JobAd;
  setToDeleteJob: { status: boolean; } = { status: false };
  @Output() itemUpdated = new EventEmitter<{ status: String, job_id: number }>();
  constructor(public dwViewerService: DwViewerService) { }

  ngOnInit(): void {
  }

  updateDeleteEvent(state: any) {
    if (state.status == true) {
      this.itemUpdated.emit({ status: 'deleted', job_id: state.job_id });
    }
  }

  deleteJob() {
    if (this.setToDeleteJob.status == false) {
      this.setToDeleteJob.status = true;
    } else {
      this.setToDeleteJob.status = false;
    }
  }

}
