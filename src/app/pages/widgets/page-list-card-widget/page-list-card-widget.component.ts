import { Component, Input, OnInit } from '@angular/core';
import { PageSummary } from '@app/models/page/page.model';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-page-list-card-widget',
  templateUrl: './page-list-card-widget.component.html',
  styleUrls: ['./page-list-card-widget.component.scss']
})
export class PageListCardWidgetComponent implements OnInit {

  @Input() pageSummary:PageSummary;
  constructor(public urlViewerService:UrlViewerService) { }

  ngOnInit() {
  }

}
