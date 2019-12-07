import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-edit-avatar-options-widget',
  templateUrl: './edit-avatar-options-widget.component.html',
  styleUrls: ['./edit-avatar-options-widget.component.scss']
})
export class EditAvatarOptionsWidgetComponent implements OnInit {

  editProfileService:EditProfileService;
  constructor(editProfileService:EditProfileService) { 
    this.editProfileService=editProfileService;
  }


  ngOnInit() {
  }

}
