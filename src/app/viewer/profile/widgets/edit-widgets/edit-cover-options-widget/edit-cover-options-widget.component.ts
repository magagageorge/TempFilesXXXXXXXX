import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-edit-cover-options-widget',
  templateUrl: './edit-cover-options-widget.component.html',
  styleUrls: ['./edit-cover-options-widget.component.scss']
})
export class EditCoverOptionsWidgetComponent implements OnInit {

  editProfileService:EditProfileService;
  constructor(editProfileService:EditProfileService) { 
    this.editProfileService=editProfileService;
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
