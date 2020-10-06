import { Component, OnInit } from '@angular/core';
import { PageService } from '@app/services/page.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-wp-pages-left-menu-widget',
  templateUrl: './wp-pages-left-menu-widget.component.html',
  styleUrls: ['./wp-pages-left-menu-widget.component.scss']
})
export class WpPagesLeftMenuWidgetComponent implements OnInit {

  constructor(public pageService:PageService, public urlViewerService:UrlViewerService) { }

  ngOnInit() {
  }

}
