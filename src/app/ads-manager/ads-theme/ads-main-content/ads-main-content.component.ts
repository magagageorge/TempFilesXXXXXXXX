import { Component, OnInit } from '@angular/core';
import { AdsService } from '@app/ads-manager/services/ads.service';

@Component({
  selector: 'app-ads-main-content',
  templateUrl: './ads-main-content.component.html',
  styleUrls: ['./ads-main-content.component.scss']
})
export class AdsMainContentComponent implements OnInit {

  constructor(public adsService: AdsService) {
  }

  ngOnInit() {
  }

}
