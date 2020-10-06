import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ViewPortDimensions } from '@app/libs/view-port-dimensions';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { PagePhotosService } from '../../services/page-photos.service';

@Component({
  selector: 'app-page-photos-widget',
  templateUrl: './page-photos-widget.component.html',
  styleUrls: ['./page-photos-widget.component.scss']
})
export class PagePhotosWidgetComponent implements AfterViewInit {

  @ViewChild("imageContainer", { static: false })
  imageContainer: ElementRef;
  containerWidth: number = 200;
  imageWidth: number = 80;
  vpDim:ViewPortDimensions=new ViewPortDimensions();
  constructor(public urlviewerService: UrlViewerService, public pagePhotosService: PagePhotosService) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calculatePictureWidth();
    }, 0);
  }

  calculatePictureWidth() {
    var vp_dimen=this.vpDim.getViewport();
    this.containerWidth = this.imageContainer.nativeElement.clientWidth;
    if(vp_dimen.width>=768){
      this.imageWidth = this.containerWidth / 4;
    }else{
      this.imageWidth = this.containerWidth / 3;
    }
    /*
    if (this.containerWidth > 500) {
      this.imageWidth = this.containerWidth / 4;
    } else if (this.containerWidth > 300) {
      this.imageWidth = this.containerWidth / 4;
    } else {
      this.imageWidth = this.containerWidth / 3;
    }
    */
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculatePictureWidth();
  }


}
