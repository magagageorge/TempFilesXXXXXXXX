import { Component, OnInit } from '@angular/core';
import { ProfilePhotosService } from '@app/services/profile-photos.service';

@Component({
  selector: 'app-profile-images-overlay-view',
  templateUrl: './profile-images-overlay-view.component.html',
  styleUrls: ['./profile-images-overlay-view.component.scss']
})
export class ProfileImagesOverlayViewComponent implements OnInit {

  profilePhotosService:ProfilePhotosService;
  constructor(profilePhotosService:ProfilePhotosService) {
    this.profilePhotosService=profilePhotosService;
   }

  ngOnInit() {
  }

}
