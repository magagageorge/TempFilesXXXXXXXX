import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-wb-page-content-routing',
  templateUrl: './wb-page-content-routing.component.html',
  styleUrls: ['./wb-page-content-routing.component.scss']
})
export class WbPageContentRoutingComponent implements OnInit {

  constructor(public urlviwerService: UrlViewerService) { }

  ngOnInit() {
  }

  get isRestrictedPage() {
    if (this.urlviwerService.VIEWER_URL_PAGE == ''
      || this.urlviwerService.VIEWER_URL_PAGE == 'about'
      || this.urlviwerService.VIEWER_URL_PAGE == 'shop'
      || this.urlviwerService.VIEWER_URL_PAGE == 'products'
      || this.urlviwerService.VIEWER_URL_PAGE == 'services'
      || this.urlviwerService.VIEWER_URL_PAGE == 'photos'
    ) {
      return false;
    }

    if (this.urlviwerService.VIEWER_URL_PAGE == 'manage'
      || this.urlviwerService.VIEWER_URL_PAGE == 'notifications'
      || this.urlviwerService.VIEWER_URL_PAGE == 'page-admins'
      || this.urlviwerService.VIEWER_URL_PAGE == 'general-settings'
      || this.urlviwerService.VIEWER_URL_PAGE == 'notification-settings'
    ) {

      if (this.urlviwerService.PPVIEWER.page.my_page == false) {
        return true;
      } else {

        if (this.urlviwerService.VIEWER_URL_PAGE == 'page-admins' || this.urlviwerService.VIEWER_URL_PAGE == 'general-settings' || this.urlviwerService.VIEWER_URL_PAGE == 'notification-settings') {
          if (this.urlviwerService.PPVIEWER.page.my_page == 'Admin') {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return true;
  }

}
