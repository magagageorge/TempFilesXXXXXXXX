import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { DwProfileViewerService } from '@app/daywaka/services/dw-profile-viewer.service';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-dw-profile-header-widget',
  templateUrl: './dw-profile-header-widget.component.html',
  styleUrls: ['./dw-profile-header-widget.component.scss']
})
export class DwProfileHeaderWidgetComponent implements AfterViewInit {

  @ViewChild("profileCoverElm", { static: false })
  profileCoverElm: ElementRef;
  @Input() PROFILE: any;
  profileCoverWidth: number = 720;
  constructor(public dwProfileViewerService: DwProfileViewerService, public editProfileService: EditProfileService) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dwProfileViewerService.calculateCoverDimensions(this.profileCoverElm.nativeElement.clientWidth);
    }, 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.dwProfileViewerService.calculateCoverDimensions(this.profileCoverElm.nativeElement.clientWidth);
  }

}
