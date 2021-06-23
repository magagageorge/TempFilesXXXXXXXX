import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth';
import { DaywakaService } from '@app/daywaka/services/daywaka.service';
import { PageSummary } from '@app/models/page/page.model';
import { PageService } from '@app/services/page.service';
import { ProfileService } from '@app/services/profile.service';
import { DwPageViewerService } from '../../../services/dw-page-viewer.service';

@Component({
  selector: 'app-dw-business-top-menu-widget',
  templateUrl: './dw-business-top-menu-widget.component.html',
  styleUrls: ['./dw-business-top-menu-widget.component.scss']
})
export class DwBusinessTopMenuWidgetComponent implements OnInit {

  is_authenticated: boolean = false;
  leftMenuVisible = false;
  leftMenu: HTMLElement;
  constructor(public daywakaService: DaywakaService,public profileService:ProfileService, public pageViewerService: DwPageViewerService, public authService: AuthService, public pageService: PageService) { }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((authenticated: any) => {
      this.is_authenticated = authenticated;
    });
  }

  switchPage(page: PageSummary) {
    this.pageViewerService.dwViewerService.setPage(page);
    this.daywakaService.switchPage(page);
  }

  getInitLetter(name: string) {
    return (name.substr(0, 1)).toUpperCase();
  }

  toogleLeftMenu() {
    this.leftMenu = document.getElementById("dw-mobile-left-menu") as HTMLElement;
    if (this.leftMenuVisible == true) {
      this.leftMenuVisible = false;
      this.leftMenu.classList.remove('menu-opened');
    } else {
      this.leftMenuVisible = true;
      this.leftMenu.classList.add('menu-opened');
    }
  }

}
