import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AdContentCardForm } from '@app/ads-manager/models/ad-content';
import { CallToAction } from '@app/ads-manager/models/call-to-action';
import { ImageIconsService } from '@app/services/image-icons.service';
import { ShowAdContent, ShowAdContentCard } from '@app/models/ads/ad-models';
import { LinkProcessingService } from '@app/services/link-processing.service';

@Component({
  selector: 'app-ad-view-post-catalog-widget',
  templateUrl: './ad-post-catalog-widget.component.html',
  styleUrls: ['./ad-post-catalog-widget.component.scss']
})
export class ViewAdPostCatalogWidgetComponent implements OnInit {

  @Input() dispayContainer: number;
  @Input() cards: ShowAdContentCard[];
  @Input() call_to_action: string;
  boxWidth: number = 290;
  currentViewCardIndex: number = 0;
  positionLeft: number = 0;
  constructor(public imageIconsService: ImageIconsService, public linkProcessingService: LinkProcessingService) { }

  ngOnInit() {
    this.setCardWidth();
  }

  setCardWidth() {
    if (this.dispayContainer) {
      this.boxWidth = Math.round(this.dispayContainer / 1.67);
    }
  }

  viewNextCard() {
    if (this.cards.length > (this.currentViewCardIndex + 1)) {
      this.currentViewCardIndex = this.currentViewCardIndex + 1;
      var left = this.getPositionLeft() as number;
      if ((this.currentViewCardIndex + 1) == this.cards.length) {
        left = left + Math.round(this.boxWidth * 0.33) - 10;
      }
      this.positionLeft = left;
    }
  }

  viewPreviousCard() {
    if (this.currentViewCardIndex > 0) {
      this.currentViewCardIndex = this.currentViewCardIndex - 1;
      if (this.currentViewCardIndex == 0) {
        this.positionLeft = 0;
      } else {
        this.positionLeft = this.getPositionLeft();
      }
    }
  }

  getPositionLeft() {
    var left = (15 + Math.round(this.boxWidth * 0.67) + ((this.boxWidth + 10) * (this.currentViewCardIndex - 1))) as number;

    if (left > 0) {
      return (-left);
    }
    return 0;
  }

  cardsContainerWidth(): number {
    return (this.boxWidth * this.cards.length) + (this.cards.length * 10) + 20;
  }

}
