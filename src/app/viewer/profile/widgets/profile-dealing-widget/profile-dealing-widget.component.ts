import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { EditProfileService } from '@app/services/edit-profile.service';

@Component({
  selector: 'app-profile-dealing-widget',
  templateUrl: './profile-dealing-widget.component.html',
  styleUrls: ['./profile-dealing-widget.component.scss']
})
export class ProfileDealingWidgetComponent implements OnInit {

  urlViewerService:UrlViewerService;
  editProfileService:EditProfileService;
  constructor(urlViewerService:UrlViewerService,editProfileService:EditProfileService) { 
    this.urlViewerService=urlViewerService;
    this.editProfileService=editProfileService;
  }

  ngOnInit() {
  }

}
