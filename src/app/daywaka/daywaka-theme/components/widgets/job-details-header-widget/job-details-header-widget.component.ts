import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { JobAd, JobHead } from '@app/daywaka/models/job.model';
import { DwJobViewerService } from '@app/daywaka/services/dw-job-viewer.service';

@Component({
  selector: 'app-job-details-header-widget',
  templateUrl: './job-details-header-widget.component.html',
  styleUrls: ['./job-details-header-widget.component.scss']
})
export class JobDetailsHeaderWidgetComponent implements AfterViewInit {

  @ViewChild("pageCoverElm", { static: false })
  pageCoverElm: ElementRef;
  pageCoverWidth: number = 720;

  @Input() JOBAD: JobAd;
  @Input() nav_tab: string;
  constructor(public jobViewerService: DwJobViewerService) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.jobViewerService.calculateCoverDimensions(this.pageCoverElm.nativeElement.clientWidth);
    }, 1);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.jobViewerService.calculateCoverDimensions(this.pageCoverElm.nativeElement.clientWidth);
  }
}
