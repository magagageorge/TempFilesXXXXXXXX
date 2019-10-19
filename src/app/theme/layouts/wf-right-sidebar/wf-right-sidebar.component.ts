import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from '@app/libs/device-detector';

@Component({
  selector: 'app-wf-right-sidebar',
  templateUrl: './wf-right-sidebar.component.html',
  styleUrls: ['./wf-right-sidebar.component.scss']
})
export class WfRightSidebarComponent implements OnInit {

  deviceService:DeviceDetectorService;
  constructor(deviceService:DeviceDetectorService) {
    this.deviceService=deviceService;
  }

  ngOnInit() {
  }

}
