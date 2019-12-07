import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ConnectionsService } from '@app/services/connections.service';
import { EditProfileService } from '@app/services/edit-profile.service';
import { ProfileViewerService } from '@app/services/profile-viewer.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements AfterViewInit {

  @ViewChild("profileCoverElm", { static: false })
  profileCoverElm: ElementRef;
  profileCoverWidth: number = 720;

  @Input() nav_tab: string;
  urlviewerService: UrlViewerService;
  connectionsService: ConnectionsService;
  editProfileService: EditProfileService;
  profileViewerService: ProfileViewerService;
  constructor(urlviewerService: UrlViewerService, profileViewerService: ProfileViewerService, connectionsService: ConnectionsService, editProfileService: EditProfileService) {
    this.urlviewerService = urlviewerService;
    this.connectionsService = connectionsService;
    this.editProfileService = editProfileService;
    this.profileViewerService=profileViewerService;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.profileViewerService.calculateCoverDimensions(this.profileCoverElm.nativeElement.clientWidth);
    }, 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.profileViewerService.calculateCoverDimensions(this.profileCoverElm.nativeElement.clientWidth);
  }


}
