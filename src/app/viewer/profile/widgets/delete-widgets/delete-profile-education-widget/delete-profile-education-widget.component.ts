import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-delete-profile-education-widget',
  templateUrl: './delete-profile-education-widget.component.html',
  styleUrls: ['./delete-profile-education-widget.component.scss']
})
export class DeleteProfileEducationWidgetComponent implements OnInit {

  editProfileService: EditProfileService;
  constructor(editProfileService: EditProfileService) {
    this.editProfileService = editProfileService;
  }

  ngOnInit() {
  }

}
