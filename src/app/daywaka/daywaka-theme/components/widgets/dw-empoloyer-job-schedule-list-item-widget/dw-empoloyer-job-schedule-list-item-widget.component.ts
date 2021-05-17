import { Component, Input, OnInit } from '@angular/core';
import { JobScheduleListItem } from '@app/daywaka/models/job.model';
import { DwJobViewerService } from '@app/daywaka/services/dw-job-viewer.service';
import { DwProfileViewerService } from '@app/daywaka/services/dw-profile-viewer.service';
import { DwViewerService } from '@app/daywaka/services/dw-viewer.service';
import { LatLong } from '@app/models/location';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dw-empoloyer-job-schedule-list-item-widget',
  templateUrl: './dw-empoloyer-job-schedule-list-item-widget.component.html',
  styleUrls: ['./dw-empoloyer-job-schedule-list-item-widget.component.scss']
})
export class DwEmpoloyerJobScheduleListItemWidgetComponent implements OnInit {

  SHOW_DETAILS_LIST: boolean = false;
  SHOW_ON_MAP: { status: boolean; location: LatLong } = { status: false, location: null };
  SHOW_WOKRING_DETAILS: { status: boolean; job_acceptance: any } = { status: false, job_acceptance: null };
  SHOW_JOB_APPROVE_MODAL: { status: boolean; job_acceptance: any } = { status: false, job_acceptance: null };
  @Input() jobscheduleItem: JobScheduleListItem;
  @Input() renderedIn: String;
  constructor(public dwViewerService: DwViewerService, public dwProfileViewerService: DwProfileViewerService, private jobViewerService: DwJobViewerService) { }

  ngOnInit(): void {

    /** Show Applicants list if the widget is rendered in job details and its a single day job */
    if (this.jobscheduleItem.multiple_days == 'No' && this.renderedIn == 'JOB_DETAILS') {
      this.toggleDetailsList();
    }
  }

  toggleDetailsList() {
    if (this.SHOW_DETAILS_LIST == true) {
      this.SHOW_DETAILS_LIST = false;
    } else {
      this.SHOW_DETAILS_LIST = true;
    }
  }

  openMap(state: boolean, latLong: LatLong) {
    this.SHOW_ON_MAP.status = state;
    this.SHOW_ON_MAP.location = latLong;
  }

  openWorkingDetails(job_acceptance: any) {
    this.SHOW_WOKRING_DETAILS.status = true;
    this.SHOW_WOKRING_DETAILS.job_acceptance = job_acceptance;
  }

  workerDetailsModalStatus(status: any) {
    this.SHOW_WOKRING_DETAILS.status = status;
    this.SHOW_WOKRING_DETAILS.job_acceptance = null;
  }

  openApproveJobModal(job_acceptance: any) {
    this.SHOW_JOB_APPROVE_MODAL.status = true;
    this.SHOW_JOB_APPROVE_MODAL.job_acceptance = job_acceptance;
  }

  approveJobModalStatus(status: any) {
    this.SHOW_JOB_APPROVE_MODAL.status = status;
    this.SHOW_JOB_APPROVE_MODAL.job_acceptance = null;
  }

  updateJobAcceptanceStatus(state: any) {
    this.searchItemById(this.jobscheduleItem.workers_list, state.job_acceptance_id).subscribe(item => {
      item.status = state.status;
      item.status_time = state.status_time;
      item.status_location = state.status_location;
      item.status_history.push(state);
    });
  }

  updateJobAcceptanceRating(state: any) {
    this.searchItemById(this.jobscheduleItem.workers_list, state.acceptance_id).subscribe(item => {
      item.rating = state.rating;
    });
  }

  searchItemById(list: any[], id: number): Observable<any> {
    return of(list.find((item: any) => item.id == id));
  }

  rateJob(rate: number, job_acceptance_id: number) {
    var _this = this;
    const formData: any = new FormData();
    this.jobViewerService.service.getProvider(this.jobViewerService.provider).crudconfig.route_url = 'daywaka/rate-job/';
    formData.append("job_acceptance_id", job_acceptance_id);
    formData.append("action", "rate");
    formData.append("rating", rate);
    this.jobViewerService.service.update(this.jobViewerService.provider, formData, {}).subscribe(result => {
      if (result.isSuccess()) {
        var resp = result.getResultData();
        if (resp.success) {
          _this.updateJobAcceptanceRating({ rating: rate, acceptance_id: job_acceptance_id });
        }
      }
    });
  }

}
