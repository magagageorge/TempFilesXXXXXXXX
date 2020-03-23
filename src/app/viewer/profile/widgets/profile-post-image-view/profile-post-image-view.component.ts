import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { ProfilePhotosService } from '@app/services/profile-photos.service';
import { ImageIconsService } from '@app/services/image-icons.service';

@Component({
  selector: 'app-profile-post-image-view',
  templateUrl: './profile-post-image-view.component.html',
  styleUrls: ['./profile-post-image-view.component.scss']
})
export class ProfilePostImageViewComponent implements AfterViewInit {

  @ViewChild("OvelayViewProfilePicture", { static: false })
  OvelayViewProfilePicture: ElementRef;
  profilePhotosService: ProfilePhotosService;
  imageIconsService:ImageIconsService;
  constructor(profilePhotosService: ProfilePhotosService,imageIconsService:ImageIconsService) {
    this.profilePhotosService = profilePhotosService;
    this.imageIconsService=imageIconsService;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions() {
    this.profilePhotosService.viewerHeight = this.OvelayViewProfilePicture.nativeElement.clientHeight;
    this.profilePhotosService.viewerWidth = this.OvelayViewProfilePicture.nativeElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }
}
