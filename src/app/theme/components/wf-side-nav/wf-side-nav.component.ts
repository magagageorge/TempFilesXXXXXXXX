import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Profile } from '@app/models/profile/profile';
import { PageService } from '@app/services/page.service';

@Component({
  selector: 'app-wf-side-nav',
  templateUrl: './wf-side-nav.component.html',
  styleUrls: ['./wf-side-nav.component.scss']
})
export class WfSideNavComponent implements OnInit {

  profileService:ProfileService;
  myProfile:Profile;
  show_n_pages: number = 2;
  constructor(profileService:ProfileService,public pageService: PageService, public urlViewerService: UrlViewerService) { 
    this.profileService=profileService;
  }

  ngOnInit() {
    this.myProfile=(this.profileService.MYPROFILE as any) as Profile;
  }

  get IsShowAllPage() {
    if (this.pageService.MYPAGES.length > 2) {
      return true;
    }
    return false;
  }


}
