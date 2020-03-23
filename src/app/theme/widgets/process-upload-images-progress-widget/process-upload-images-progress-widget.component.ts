import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-process-upload-images-progress-widget',
  templateUrl: './process-upload-images-progress-widget.component.html',
  styleUrls: ['./process-upload-images-progress-widget.component.scss']
})
export class ProcessUploadImagesProgressWidgetComponent implements OnInit {

  editProfileService:EditProfileService;
  constructor(editProfileService:EditProfileService) {
    this.editProfileService=editProfileService;
   }

  ngOnInit() {
  }

}
