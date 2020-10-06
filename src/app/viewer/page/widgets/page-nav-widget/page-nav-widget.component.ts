import { Component, OnInit, Input } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-page-nav-widget',
  templateUrl: './page-nav-widget.component.html',
  styleUrls: ['./page-nav-widget.component.scss']
})
export class PageNavWidgetComponent implements OnInit {

  @Input() tab: string;
  constructor(public urlViewerService: UrlViewerService) {
  }

  ngOnInit() {
  }

}
