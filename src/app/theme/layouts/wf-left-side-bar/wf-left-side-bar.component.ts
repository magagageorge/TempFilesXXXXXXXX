import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';
import { DeviceDetectorService } from '@app/libs/device-detector';


@Component({
  selector: 'app-wf-left-side-bar',
  templateUrl: './wf-left-side-bar.component.html',
  styleUrls: ['./wf-left-side-bar.component.scss']
})
export class WfLeftSideBarComponent implements OnInit {
  profileService:ProfileService;
  deviceService:DeviceDetectorService;
  constructor(profileService:ProfileService,deviceService:DeviceDetectorService) { 
    this.profileService=profileService;
    this.deviceService=deviceService;
  }

  ngOnInit() {
  }

}
