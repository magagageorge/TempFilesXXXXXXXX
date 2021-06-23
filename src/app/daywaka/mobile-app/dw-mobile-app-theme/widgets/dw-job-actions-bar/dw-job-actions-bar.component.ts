import { Component, Input, OnInit } from '@angular/core';
import { JobScheduleListItem } from '@app/daywaka/models/job.model';
import { DwJobViewerService } from '@app/daywaka/services/dw-job-viewer.service';

@Component({
  selector: 'app-dw-job-actions-bar',
  templateUrl: './dw-job-actions-bar.component.html',
  styleUrls: ['./dw-job-actions-bar.component.scss']
})
export class DwJobActionsBarComponent implements OnInit {

  @Input() JOB_AD: JobScheduleListItem;
  constructor(public jobViewerService: DwJobViewerService) { }

  ngOnInit(): void {
  }

  getColor() {
    return "#000";
  }

}
