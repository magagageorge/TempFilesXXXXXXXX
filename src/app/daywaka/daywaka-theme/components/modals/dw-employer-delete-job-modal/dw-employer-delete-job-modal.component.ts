import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DwJobViewerService } from '@app/daywaka/services/dw-job-viewer.service';

@Component({
  selector: 'app-dw-employer-delete-job-modal',
  templateUrl: './dw-employer-delete-job-modal.component.html',
  styleUrls: ['./dw-employer-delete-job-modal.component.scss']
})
export class DwEmployerDeleteJobModalComponent implements OnInit {


  @Input() JOB_AD: any;
  title: string = '';
  request_responded: boolean = false;
  response_message: string = '';
  @Output() jobDeletedEmit = new EventEmitter<{ status: boolean, job_id: Number }>();
  @Output() modalclosedStatusEmit = new EventEmitter<boolean>();

  constructor(public jobViewerService: DwJobViewerService) { }

  ngOnInit(): void {
  }

  deleteJob() {
    var _this = this;
    this.jobViewerService.service.getProvider(this.jobViewerService.provider).crudconfig.route_url = 'daywaka/job-manager/';
    this.jobViewerService.service.delete(this.jobViewerService.provider, { id: _this.JOB_AD.id }).subscribe(result => {
      if (result.isSuccess()) {
        _this.request_responded = true;
        var resp = result.getResultData();
        if (resp.success) {
          _this.jobDeletedEmit.emit({ status: true, job_id: _this.JOB_AD.id });
        } else {
          _this.jobDeletedEmit.emit({ status: false, job_id: _this.JOB_AD.id });
        }
        _this.response_message = resp.message;
      }
    });
  }

  closeThis() {
    this.modalclosedStatusEmit.emit(false);
  }

}
