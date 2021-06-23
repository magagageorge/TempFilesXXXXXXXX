import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobForm } from '@app/daywaka/models/job.model';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';

@Component({
  selector: 'app-first-job',
  templateUrl: './first-job.component.html',
  styleUrls: ['./first-job.component.scss']
})
export class FirstJobComponent implements OnInit {

  jobForm: JobForm = new JobForm();
  constructor(public daywakaService: DaywakaService, public router: Router) { }

  ngOnInit(): void {
    this.jobForm.category_id = null;
    this.daywakaService.isAccountLoaded().subscribe((accountLoaded) => {
      if (accountLoaded) {
        if (this.daywakaService.DW_CONFIGS.defaultPage != null) {
          this.router.navigateByUrl('/'+this.daywakaService.DW_CONFIGS.defaultPage.url);
        }
      }
    });
  }

}
