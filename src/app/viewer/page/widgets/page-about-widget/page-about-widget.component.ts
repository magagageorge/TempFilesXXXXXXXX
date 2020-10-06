import { Component, OnInit } from '@angular/core';
import { SysFunctions } from '@app/libs/utilities/common-functions';
import { EditPageService } from '@app/services/edit-page.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-page-about-widget',
  templateUrl: './page-about-widget.component.html',
  styleUrls: ['./page-about-widget.component.scss']
})
export class PageAboutWidgetComponent implements OnInit {

  constructor(public urlviwerService: UrlViewerService, public editPageService: EditPageService) { }

  ngOnInit() {
  }

  insertLinkProtocol(link: string) {
    return SysFunctions.insertLinkProtocol(link);
  }

}
