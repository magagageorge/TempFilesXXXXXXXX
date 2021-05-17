import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dw-jobs',
  templateUrl: './dw-jobs.component.html',
  styleUrls: ['./dw-jobs.component.scss']
})
export class DwJobsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.redirectTo();
  }

  redirectTo() {
    this.router.navigateByUrl('/jobs/nearby');
  }

}
