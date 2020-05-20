import { Component, OnInit, Input } from '@angular/core';
import { AdsService } from '@app/ads-manager/services/ads.service';
import { AdCompaignForm } from '@app/ads-manager/models/ad-compaign-form';

@Component({
  selector: 'app-overlay-content-modal',
  templateUrl: './overlay-content-modal.component.html',
  styleUrls: ['./overlay-content-modal.component.scss']
})
export class OverlayContentModalComponent implements OnInit {

  constructor(public adsService:AdsService) { }

  ngOnInit() {
  }

}
