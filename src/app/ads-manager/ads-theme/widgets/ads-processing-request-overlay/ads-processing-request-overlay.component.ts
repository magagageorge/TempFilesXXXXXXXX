import { Component, OnInit, Input } from '@angular/core';
import { AdsService } from '@app/ads-manager/services/ads.service';

@Component({
  selector: 'app-ads-processing-request-overlay',
  templateUrl: './ads-processing-request-overlay.component.html',
  styleUrls: ['./ads-processing-request-overlay.component.scss']
})
export class AdsProcessingRequestOverlayComponent implements OnInit {

  @Input() message:string;
  constructor() { }

  ngOnInit() {
  }

}
