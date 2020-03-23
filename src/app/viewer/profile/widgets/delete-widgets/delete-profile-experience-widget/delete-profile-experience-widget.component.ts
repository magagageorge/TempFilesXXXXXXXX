import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-delete-profile-experience-widget',
  templateUrl: './delete-profile-experience-widget.component.html',
  styleUrls: ['./delete-profile-experience-widget.component.scss']
})
export class DeleteProfileExperienceWidgetComponent implements OnInit {

  editProfileService: EditProfileService;
  constructor(editProfileService: EditProfileService) {
    this.editProfileService = editProfileService;
  }

  ngOnInit() {
  }

  delete(){
   this.editProfileService.deleteWorkExperience(this.editProfileService.deleteMode.experience.inDeleteData.id); 
   this.editProfileService.cancelDeleteProfile();
   this.editProfileService.cancelEditProfile();
  }
}
