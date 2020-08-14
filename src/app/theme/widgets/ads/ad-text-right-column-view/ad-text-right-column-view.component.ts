import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { ShowAdsService } from '@app/services/show-ads.service';
import { LinkProcessingService } from '@app/services/link-processing.service';

@Component({
  selector: 'app-ad-text-right-column-view',
  templateUrl: './ad-text-right-column-view.component.html',
  styleUrls: ['./ad-text-right-column-view.component.scss']
})
export class AdTextRightColumnViewComponent implements OnInit,AfterViewInit {

  @ViewChild("imageWidthElem", { static: false })
  imageWidthElem: ElementRef;
  imageWidthHeight:number;

  constructor(public showAdsService: ShowAdsService, public linkProcessingService:LinkProcessingService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions() {
    this.imageWidthHeight = this.imageWidthElem.nativeElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }

}
