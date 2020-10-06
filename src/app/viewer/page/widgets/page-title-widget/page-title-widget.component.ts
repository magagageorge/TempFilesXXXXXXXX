import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-page-title-widget',
  templateUrl: './page-title-widget.component.html',
  styleUrls: ['./page-title-widget.component.scss']
})
export class PageTitleWidgetComponent implements OnInit {

  constructor(public urlviewerService:UrlViewerService) { }

  ngOnInit() {
  }

}
