import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-edit-profile-overlay-container',
  templateUrl: './edit-profile-overlay-container.component.html',
  styleUrls: ['./edit-profile-overlay-container.component.scss']
})
export class EditProfileOverlayContainerComponent implements OnInit {

  editProfileService:EditProfileService;
  constructor(editProfileService:EditProfileService) { 
    this.editProfileService=editProfileService;
  }

  ngOnInit() {
  }

}
