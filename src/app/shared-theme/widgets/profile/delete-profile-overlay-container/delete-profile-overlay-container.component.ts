import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-shared-delete-profile-overlay-container',
  templateUrl: './delete-profile-overlay-container.component.html',
  styleUrls: ['./delete-profile-overlay-container.component.scss']
})
export class SharedDeleteProfileOverlayContainerComponent implements OnInit {

  editProfileService:EditProfileService;
  constructor(editProfileService:EditProfileService) { 
    this.editProfileService=editProfileService;
  }

  ngOnInit() {
  }

}
