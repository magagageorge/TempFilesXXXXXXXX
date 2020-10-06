import { Component, OnInit } from '@angular/core';
import { PageService } from '@app/services/page.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-my-pages-list-widget',
  templateUrl: './my-pages-list-widget.component.html',
  styleUrls: ['./my-pages-list-widget.component.scss']
})
export class MyPagesListWidgetComponent implements OnInit {

  show_n_pages: number = 2;
  constructor(public pageService: PageService, public urlViewerService: UrlViewerService) { }

  ngOnInit() {
  }

  get IsShowAll() {
    if (this.pageService.MYPAGES.length > 4) {
      return true;
    }
    return false;
  }

  get IsShowMore() {
    if (this.show_n_pages <= 2 && (this.pageService.MYPAGES.length > 2 && this.pageService.MYPAGES.length <= 4)) {
      return true;
    }
    return false;
  }

  get IsShowLess() {
    if (this.show_n_pages > 2 && this.pageService.MYPAGES.length <= 4) {
      return true;
    }
    return false;
  }

  ShowMore() {
    this.show_n_pages = 4;
  }

  ShowLess() {
    this.show_n_pages = 2;
  }


}
