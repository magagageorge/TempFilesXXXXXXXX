import { Component, OnInit } from '@angular/core';
import { JobForm } from '@app/daywaka/models/job.model';

@Component({
  selector: 'app-first-job',
  templateUrl: './first-job.component.html',
  styleUrls: ['./first-job.component.scss']
})
export class FirstJobComponent implements OnInit {

  jobForm:JobForm = new JobForm();
  constructor() { }

  ngOnInit(): void {
    this.jobForm.category_id=null;
  }

}
