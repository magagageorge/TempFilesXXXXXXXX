import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-delete-profile-overlay-container',
  templateUrl: './delete-profile-overlay-container.component.html',
  styleUrls: ['./delete-profile-overlay-container.component.scss']
})
export class DeleteProfileOverlayContainerComponent implements OnInit {

  editProfileService:EditProfileService;
  constructor(editProfileService:EditProfileService) { 
    this.editProfileService=editProfileService;
  }

  ngOnInit() {
  }

}
