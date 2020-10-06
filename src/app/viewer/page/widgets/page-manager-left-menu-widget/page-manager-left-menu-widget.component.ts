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
  }

  ActivateMenu(menu: any) {
    if (menu.active == true) {
      menu.active = false;
    } else {
      menu.active = true
    }
  }

}
