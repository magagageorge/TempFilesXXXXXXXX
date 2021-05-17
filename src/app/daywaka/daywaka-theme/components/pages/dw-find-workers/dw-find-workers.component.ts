import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';

@Component({
  selector: 'app-dw-find-workers',
  templateUrl: './dw-find-workers.component.html',
  styleUrls: ['./dw-find-workers.component.scss']
})
export class DwFindWorkersComponent implements OnInit {

  constructor(public daywakaService: DaywakaService, public router: Router) { }

  ngOnInit(): void {
    this.daywakaService.isAccountLoaded().subscribe((accountLoaded) => {
      if (accountLoaded) {
        if (this.daywakaService.DW_CONFIGS.defaultPage != null) {
          this.router.navigateByUrl('/'+this.daywakaService.DW_CONFIGS.defaultPage.url);
        }
      }
    });
  }

}
