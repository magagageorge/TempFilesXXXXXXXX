import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { AdContentForm, AdContent } from '@app/ads-manager/models/ad-content';
import { ImageIconsService } from '@app/services/image-icons.service';
import { SysFunctions } from '@app/libs/utilities/common-functions';
import { AdCompaign } from '@app/ads-manager/models/ad-compaign';
import { ShowAdContent } from '@app/models/ads/ad-models';
import { LinkProcessingService } from '@app/services/link-processing.service';
import { ShowAdsService } from '@app/services/show-ads.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-ad-post-view-widget',
  templateUrl: './ad-post-view-widget.component.html',
  styleUrls: ['./ad-post-view-widget.component.scss']
})
export class ViewAdPostWidgetComponent implements OnInit, AfterViewInit {

  @ViewChild("AdPostContainer", { static: false })
  AdPostContainer: ElementRef;
  @Input() ad_content: ShowAdContent;
  AdPostContainerWidth: number;
  constructor(public showAdService: ShowAdsService,public urlViewerService:UrlViewerService, public imageIconsService: ImageIconsService, public linkProcessingService: LinkProcessingService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions() {
    this.AdPostContainerWidth = this.AdPostContainer.nativeElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }

  getPictureHeight(width: number, height: number) {
    let ratio = width / height;
    let new_height = this.AdPostContainerWidth / ratio;
    return new_height;
  }

}
