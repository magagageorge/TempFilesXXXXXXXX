import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ProfileService } from '@app/services/profile.service';

@Component({
  selector: 'app-shared-edit-cover-options-widget',
  templateUrl: './edit-cover-options-widget.component.html',
  styleUrls: ['./edit-cover-options-widget.component.scss']
})
export class SharedEditCoverOptionsWidgetComponent implements OnInit {

  editProfileService:EditProfileService;
  urlViewerService:UrlViewerService;
  profileService:ProfileService;
  constructor(editProfileService:EditProfileService,profileService:ProfileService,urlViewerService:UrlViewerService) { 
    this.editProfileService=editProfileService;
    this.urlViewerService=urlViewerService;
    this.profileService=profileService;
  }


  ngOnInit() {
  }

  SelectCoverUploadImage(){
    var elem:HTMLElement = document.querySelector('#cover_upload_input_id');
    if(elem!=null){
      elem.click();
    }
  }

}
