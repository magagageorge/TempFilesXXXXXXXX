import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dw-worker-job-schedule-details-modal',
  templateUrl: './dw-worker-job-schedule-details-modal.component.html',
  styleUrls: ['./dw-worker-job-schedule-details-modal.component.scss']
})
export class DwWorkerJobScheduleDetailsModalComponent implements OnInit {

  modal_open: boolean = true;
  @Input() job_acceptance:any;
  @Input() job_schedule:any;
  @Output() modalclosedStatusEmit = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  closeThis() {
    this.modal_open = false;
    this.modalclosedStatusEmit.emit(false);
  }

}
