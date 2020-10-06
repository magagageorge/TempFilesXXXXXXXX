import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ViewPortDimensions } from '@app/libs/view-port-dimensions';
import { ProfilePhotosService } from '../../services/profile-photos.service';

@Component({
  selector: 'app-profile-photos-widget',
  templateUrl: './profile-photos-widget.component.html',
  styleUrls: ['./profile-photos-widget.component.scss']
})
export class ProfilePhotosWidgetComponent implements AfterViewInit {

  @ViewChild("imageContainer", { static: false })
  imageContainer: ElementRef;
  urlviwerService: UrlViewerService;
  containerWidth: number = 200;
  imageWidth: number = 80;
  profilePhotosService: ProfilePhotosService;
  vpDim:ViewPortDimensions=new ViewPortDimensions();
  constructor(urlviwerService: UrlViewerService, profilePhotosService: ProfilePhotosService) {
    this.urlviwerService = urlviwerService;
    this.profilePhotosService = profilePhotosService;
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
