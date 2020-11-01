import { Component, Input, OnInit } from '@angular/core';
import { PageSummary } from '@app/models/page/page.model';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss']
})
export class PageCardComponent implements OnInit {

  @Input() page: PageSummary;
  constructor(public urlViewerService:UrlViewerService) { }

  ngOnInit() {
  }

}
