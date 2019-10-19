import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from '@app/libs/device-detector';

@Component({
  selector: 'app-profile-right-sidebar',
  templateUrl: './profile-right-sidebar.component.html',
  styleUrls: ['./profile-right-sidebar.component.scss']
})
export class ProfileRightSidebarComponent implements OnInit {

  deviceService:DeviceDetectorService;
  constructor(deviceService:DeviceDetectorService) { 
    this.deviceService=deviceService;
  }

  ngOnInit() {
  }

}
