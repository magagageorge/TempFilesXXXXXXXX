import { Component, Input, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-page-manager-top-menu-widget',
  templateUrl: './page-manager-top-menu-widget.component.html',
  styleUrls: ['./page-manager-top-menu-widget.component.scss']
})
export class PageManagerTopMenuWidgetComponent implements OnInit {

  tab: string = '';
  constructor(public urlViewerService: UrlViewerService) {
  }

  ngOnInit() {
  }

  get ActiveTab() {
    if (this.urlViewerService.VIEWER_URL_PAGE == ''
      || this.urlViewerService.VIEWER_URL_PAGE == 'about'
      || this.urlViewerService.VIEWER_URL_PAGE == 'shop'
      || this.urlViewerService.VIEWER_URL_PAGE == 'products'
      || this.urlViewerService.VIEWER_URL_PAGE == 'services'
      || this.urlViewerService.VIEWER_URL_PAGE == 'photos'
    ) {
      return 'page';
    }

    if (this.urlViewerService.VIEWER_URL_PAGE == 'manage'
      || this.urlViewerService.VIEWER_URL_PAGE == 'notifications'
      || this.urlViewerService.VIEWER_URL_PAGE == 'page-admins'
      || this.urlViewerService.VIEWER_URL_PAGE == 'notification-settings'
      || this.urlViewerService.VIEWER_URL_PAGE == 'general-settings'
    ) {
      return 'manage';
    }
    return '';
  }

}
