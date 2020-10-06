import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { EditPageService } from '@app/services/edit-page.service';
import { PagePhotosService } from '../../services/page-photos.service';
import { PageViewerService } from '../../services/page-viewer.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements AfterViewInit {

  @ViewChild("pageCoverElm", { static: false })
  pageCoverElm: ElementRef;
  pageCoverWidth: number = 720;

  @Input() nav_tab: string;
  constructor(public urlviewerService: UrlViewerService,public pagePhotoService:PagePhotosService,public  pageViewerService: PageViewerService,public  editPageService: EditPageService) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.pageViewerService.calculateCoverDimensions(this.pageCoverElm.nativeElement.clientWidth);
    }, 1);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.pageViewerService.calculateCoverDimensions(this.pageCoverElm.nativeElement.clientWidth);
  }


}
