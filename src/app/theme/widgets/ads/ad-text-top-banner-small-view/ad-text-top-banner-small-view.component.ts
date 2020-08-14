import { Component, OnInit } from '@angular/core';
import { ShowAdsService } from '@app/services/show-ads.service';
import { LinkProcessingService } from '@app/services/link-processing.service';

@Component({
  selector: 'app-ad-text-top-banner-small-view',
  templateUrl: './ad-text-top-banner-small-view.component.html',
  styleUrls: ['./ad-text-top-banner-small-view.component.scss']
})
export class AdTextTopBannerSmallViewComponent implements OnInit {

  constructor(public showAdsService: ShowAdsService,public linkProcessingService:LinkProcessingService) { }

  ngOnInit() {
  }

}
