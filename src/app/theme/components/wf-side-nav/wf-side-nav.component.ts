import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';

@Component({
  selector: 'app-wf-side-nav',
  templateUrl: './wf-side-nav.component.html',
  styleUrls: ['./wf-side-nav.component.scss']
})
export class WfSideNavComponent implements OnInit {

  profileService:ProfileService;
  constructor(profileService:ProfileService) { 
    this.profileService=profileService;
  }

  ngOnInit() {
  }

}
