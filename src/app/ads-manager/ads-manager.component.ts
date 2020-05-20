import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdsService } from './services/ads.service';
import { Router } from '@angular/router';
import { AdsAccount } from './models/ads-account';

@Component({
  selector: 'app-ads-manager',
  templateUrl: './ads-manager.component.html',
  styleUrls: ['./ads-manager.component.scss']
})
export class AdsManagerComponent implements OnInit {

  constructor(private title: Title, public adsService: AdsService, public router: Router) { }

  ngOnInit() {
    this.title.setTitle('Ads Manager | Woorbi');
    this.adsService.loadAdsAccount({});
  }


}
