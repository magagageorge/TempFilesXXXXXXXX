import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { PagePhotosService } from '../../services/page-photos.service';

@Component({
  selector: 'app-page-photos-summary-widget',
  templateUrl: './page-photos-summary-widget.component.html',
  styleUrls: ['./page-photos-summary-widget.component.scss']
})
export class PagePhotosSummaryWidgetComponent implements AfterViewInit {

  @ViewChild("imageContainer", { static: false })
  imageContainer: ElementRef;
  containerWidth: number = 200;
  imageWidth: number=0;
  constructor(public urlviewerService: UrlViewerService, public pagePhotosService: PagePhotosService) {
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
