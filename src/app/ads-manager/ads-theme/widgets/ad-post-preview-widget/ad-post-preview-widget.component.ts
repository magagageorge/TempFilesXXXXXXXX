import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { AdContentForm } from '@app/ads-manager/models/ad-content';
import { ImageIconsService } from '@app/services/image-icons.service';
import { AdCompaignForm } from '@app/ads-manager/models/ad-compaign-form';
import { SysFunctions } from '@app/libs/utilities/common-functions';

@Component({
  selector: 'app-ad-post-preview-widget',
  templateUrl: './ad-post-preview-widget.component.html',
  styleUrls: ['./ad-post-preview-widget.component.scss']
})
export class AdPostPreviewWidgetComponent implements OnInit,AfterViewInit {

  @ViewChild("AdPostContainer", { static: false })
  AdPostContainer: ElementRef;
  @Input() ad_model:AdContentForm;
  @Input() compaign:AdCompaignForm;
  AdPostContainerWidth:number;
  constructor(public imageIconsService:ImageIconsService) { }

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

  removeLinkProtocol(url:string){
    return SysFunctions.removeLinkProtocol(url);
  }

}
