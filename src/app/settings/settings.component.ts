import { Component, OnInit } from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  title: string = "Settings";
  parent_route: string = "/";
  settingsService:SettingsService;
  constructor(settingsService:SettingsService) {
    this.settingsService=settingsService;
   }

  ngOnInit() {
  }

}
