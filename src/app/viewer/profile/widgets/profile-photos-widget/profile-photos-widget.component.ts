import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ProfilePhotosService } from '@app/services/profile-photos.service';

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
    this.containerWidth = this.imageContainer.nativeElement.clientWidth;
    if (this.containerWidth > 500) {
      this.imageWidth = this.containerWidth / 4;
    } else if (this.containerWidth > 300) {
      this.imageWidth = this.containerWidth / 4;
    } else {
      this.imageWidth = this.containerWidth / 3;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculatePictureWidth();
  }


}
