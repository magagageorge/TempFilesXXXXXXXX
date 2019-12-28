import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Profile } from '@app/models/profile/profile';

@Component({
  selector: 'app-wf-side-nav',
  templateUrl: './wf-side-nav.component.html',
  styleUrls: ['./wf-side-nav.component.scss']
})
export class WfSideNavComponent implements OnInit {

  profileService:ProfileService;
  urlViewerService:UrlViewerService;
  myProfile:Profile;
  constructor(profileService:ProfileService,urlViewerService:UrlViewerService) { 
    this.profileService=profileService;
    this.urlViewerService=urlViewerService;
  }

  ngOnInit() {
    this.myProfile=(this.profileService.MYPROFILE as any) as Profile;
  }

}
