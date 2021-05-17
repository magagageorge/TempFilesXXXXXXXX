import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DwJobViewerService } from '@app/daywaka/services/dw-job-viewer.service';

@Component({
  selector: 'app-approve-completed-job-modal',
  templateUrl: './approve-completed-job-modal.component.html',
  styleUrls: ['./approve-completed-job-modal.component.scss']
})
export class ApproveCompletedJobModalComponent implements OnInit {

  @Input() job_acceptance: any;
  message: string = '';
  title: string = '';
  currentLocation: any = null;
  ACTION: string = "APPROVE";
  request_responded: boolean = false;
  @Output() jobStatusEmit = new EventEmitter<any>();
  @Output() jobRatingEmit = new EventEmitter<{ rating: number, acceptance_id: Number }>();
  @Output() modalclosedStatusEmit = new EventEmitter<boolean>();

  constructor(public jobViewerService: DwJobViewerService) { }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  approveJob() {
    var _this = this;
    const formData: any = new FormData();
    this.jobViewerService.service.getProvider(this.jobViewerService.provider).crudconfig.route_url = 'daywaka/approve-job/';
    this.getCurrentLocation();
    formData.append("job_acceptance_id", this.job_acceptance.id);
    formData.append("action", "approve");
    formData.append("geo_location", JSON.stringify(_this.currentLocation));
    this.jobViewerService.service.update(this.jobViewerService.provider, formData, {}).subscribe(result => {
      if (result.isSuccess()) {
        _this.ACTION = "RATE";
        var resp = result.getResultData();
        if (resp.success) {
          _this.jobStatusEmit.emit(resp.status);
        }
        _this.message = resp.message;
      }
    });
  }

  rateJob(rate: number,job_acceptance_id:number) {
    var _this = this;
    const formData: any = new FormData();
    this.jobViewerService.service.getProvider(this.jobViewerService.provider).crudconfig.route_url = 'daywaka/rate-job/';
    this.getCurrentLocation();
    formData.append("job_acceptance_id", job_acceptance_id);
    formData.append("action", "rate");
    formData.append("rating", rate);
    this.jobViewerService.service.update(this.jobViewerService.provider, formData, {}).subscribe(result => {
      if (result.isSuccess()) {
        _this.request_responded = true;
        _this.ACTION = "";
        var resp = result.getResultData();
        if (resp.success) {
          _this.jobRatingEmit.emit({ rating: rate, acceptance_id: job_acceptance_id });
        }
        _this.message = resp.message;
      }
    });
  }

  getCurrentLocation() {
    var _this = this;
    navigator.geolocation.getCurrentPosition((position) => {
      _this.currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    }, (error) => {
      console.log(error)
    });
  }

  closeThis() {
    this.modalclosedStatusEmit.emit(false);
  }

}
