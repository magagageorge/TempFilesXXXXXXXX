import { Component, Input, OnInit } from '@angular/core';
import { JobScheduleListItem } from '@app/daywaka/models/job.model';

@Component({
  selector: 'app-jobs-by-list-widget',
  templateUrl: './jobs-by-list-widget.component.html',
  styleUrls: ['./jobs-by-list-widget.component.scss']
})
export class JobsByListWidgetComponent implements OnInit {

  @Input() JOBS:JobScheduleListItem[];
  @Input() DETAILS_ROUTE:string;
  constructor() { }

  ngOnInit(): void {
    
  }

}
