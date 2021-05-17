import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth';
import { DwPageViewerService } from '@app/daywaka/dw-viewer/business/services/dw-page-viewer.service';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { PageService } from '@app/services/page.service';

@Component({
  selector: 'app-dw-nav-bar',
  templateUrl: './dw-nav-bar.component.html',
  styleUrls: ['./dw-nav-bar.component.scss']
})
export class DwNavBarComponent implements OnInit {

  is_authenticated: boolean = false;
  constructor(public daywakaService: DaywakaService, public pageViewerService: DwPageViewerService, public authService: AuthService, public pageService: PageService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((authenticated: any) => {
      this.is_authenticated = authenticated;
    });
  }

}
