import { Component, OnInit } from '@angular/core';
import { PageViewerService } from '../../services/page-viewer.service';

@Component({
  selector: 'app-page-manager-left-menu-widget',
  templateUrl: './page-manager-left-menu-widget.component.html',
  styleUrls: ['./page-manager-left-menu-widget.component.scss']
})
export class PageManagerLeftMenuWidgetComponent implements OnInit {

  child: boolean = false;
  dropDowns: any = { settings: { active: false, general: { active: false }, notifications: { active: false } } };

  constructor(public pageViewerService: PageViewerService) { }

  ngOnInit() {
    this.autoActivateMenus();
  }

  ActivateMenu(menu: any) {
    if (menu.active == true) {
      menu.active = false;
    } else {
      menu.active = true
    }
  }

  autoActivateMenus() {
    if (this.pageViewerService.urlviewerService.VIEWER_URL_PAGE == 'notification-settings') {
      this.ActivateMenu(this.dropDowns.settings);
      this.ActivateMenu(this.dropDowns.settings.notifications);
    }
    if (this.pageViewerService.urlviewerService.VIEWER_URL_PAGE == 'general-settings') {
      this.ActivateMenu(this.dropDowns.settings);
      this.ActivateMenu(this.dropDowns.settings.general);
    }
  }

}
