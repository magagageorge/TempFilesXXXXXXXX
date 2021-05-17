import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DwJobViewerService } from '@app/daywaka/services/dw-job-viewer.service';

@Component({
  selector: 'app-dw-accept-job-modal',
  templateUrl: './dw-accept-job-modal.component.html',
  styleUrls: ['./dw-accept-job-modal.component.scss']
})
export class DwAcceptJobModalComponent implements OnInit {

  @Input() JOB_AD: any;
  message: string = '';
  title: string = '';
  currentLocation: any = null;
  request_responded: boolean = false;
  @Output() jobStatusEmit = new EventEmitter<String>();
  constructor(public jobViewerService: DwJobViewerService) { }

  ngOnInit(): void {
    this.jobViewerService.checkWantToEngageJob().subscribe(result => {
      if (result.action == 'ACCEPT') {
        this.message = 'You are about to accept a job with Daywaka,Please only confirm if you are sure with your attendance!';
        this.title = 'Accepting a Job';
      } else if (result.action == 'START') {
        this.message = "You are about to start a job,By clicking 'Start' means you are at the job location and ready to start";
        this.title = 'Starting a Job';
      } else if (result.action == 'COMPLETE') {
        this.message = "Thanks,By Clicking 'Confirm' you are marking a job as Complete and you will be notified when your job has been approved for Payment.";
        this.title = 'Complete a Job';
      } else if (result.action == 'WITHDRAW') {
        this.message = 'Are you sure you want to Withdraw from this Job?';
        this.title = 'Withdrawing Job';
      } else {
        this.message = '';
        this.title = '';
      }
      this.getCurrentLocation();
    });
  }

  acceptJob(job_schedule_id: number, job_id: number) {
    var _this = this;
    const formData: any = new FormData();
    this.jobViewerService.service.getProvider(this.jobViewerService.provider).crudconfig.route_url = 'daywaka/accept-job/';
    this.getCurrentLocation();
    formData.append("job_schedule_id", job_schedule_id);
    formData.append("job_id", job_id);
    formData.append("action", "accept");
    formData.append("geo_location", JSON.stringify(_this.currentLocation));
    this.jobViewerService.service.create(this.jobViewerService.provider, formData, {}).subscribe(result => {
      if (result.isSuccess()) {
        _this.request_responded = true;
        var resp = result.getResultData();
        if (resp.success) {
          _this.jobStatusEmit.emit(resp.status);
        }
        _this.message = resp.message;
      }
    });
  }

  startJob(job_schedule_id: number, job_id: number) {
    var _this = this;
    const formData: any = new FormData();
    this.jobViewerService.service.getProvider(this.jobViewerService.provider).crudconfig.route_url = 'daywaka/accept-job/';
    this.getCurrentLocation();
    formData.append("job_schedule_id", job_schedule_id);
    formData.append("job_id", job_id);
    formData.append("action", "start");
    formData.append("geo_location", JSON.stringify(_this.currentLocation));
    this.jobViewerService.service.update(this.jobViewerService.provider, formData, {}).subscribe(result => {
      if (result.isSuccess()) {
        _this.request_responded = true;
        var resp = result.getResultData();
        if (resp.success) {
          _this.jobStatusEmit.emit(resp.status);
        }
        _this.message = resp.message;
      }
    });
  }

  completeJob(job_schedule_id: number, job_id: number) {
    var _this = this;
    const formData: any = new FormData();
    this.jobViewerService.service.getProvider(this.jobViewerService.provider).crudconfig.route_url = 'daywaka/accept-job/';
    this.getCurrentLocation();
    formData.append("job_schedule_id", job_schedule_id);
    formData.append("job_id", job_id);
    formData.append("action", "complete");
    formData.append("geo_location", JSON.stringify(_this.currentLocation));
    this.jobViewerService.service.update(this.jobViewerService.provider, formData, {}).subscribe(result => {
      if (result.isSuccess()) {
        _this.request_responded = true;
        var resp = result.getResultData();
        if (resp.success) {
          _this.jobStatusEmit.emit(resp.status);
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

  responeDone() {
    this.request_responded = false;
  }


}
