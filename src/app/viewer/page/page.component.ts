import { Component, OnInit } from '@angular/core';
import { PostingService } from '@app/services/posting.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PageFeedService } from './services/page-feed.service';
import { PagePhotosService } from './services/page-photos.service';
import { PageViewerService } from './services/page-viewer.service';
import { AppModalService } from '@app/services/app-modal.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  parent_route: string = 'feed';
  constructor(public pageViewerService: PageViewerService, public appModalService: AppModalService, public urlviwerService: UrlViewerService, public postingService: PostingService, public pageFeedService: PageFeedService, public pagePhotosService: PagePhotosService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    var _this = this;
    this.route.params.subscribe(params => {
      _this.pageViewerService.checkLoadPageInfo(params);
    });
  }

}
