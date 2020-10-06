import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ImageIconsService } from '@app/services/image-icons.service';
import { PagePhotosService } from '../../services/page-photos.service';

@Component({
  selector: 'app-page-images-overlay-view',
  templateUrl: './page-images-overlay-view.component.html',
  styleUrls: ['./page-images-overlay-view.component.scss']
})
export class PageImagesOverlayViewComponent implements AfterViewInit {

  @ViewChild("OvelayViewPagePicture", { static: false })
  OvelayViewPagePicture: ElementRef;
  constructor(public pagePhotosService: PagePhotosService, public imageIconsService: ImageIconsService) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions() {
    this.pagePhotosService.viewerHeight = this.OvelayViewPagePicture.nativeElement.clientHeight;
    this.pagePhotosService.viewerWidth = this.OvelayViewPagePicture.nativeElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }
}

