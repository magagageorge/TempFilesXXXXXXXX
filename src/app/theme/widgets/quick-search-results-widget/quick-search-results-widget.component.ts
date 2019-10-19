import { Component, OnInit } from '@angular/core';
import { SearchService } from '@app/services/search.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-quick-search-results-widget',
  templateUrl: './quick-search-results-widget.component.html',
  styleUrls: ['./quick-search-results-widget.component.scss']
})
export class QuickSearchResultsWidgetComponent implements OnInit {

  searchService:SearchService;
  urlViewerService:UrlViewerService;
  constructor(searchService:SearchService,urlViewerService:UrlViewerService) {
    this.searchService=searchService;
    this.urlViewerService=urlViewerService;
   }

  ngOnInit() {
  }

}
