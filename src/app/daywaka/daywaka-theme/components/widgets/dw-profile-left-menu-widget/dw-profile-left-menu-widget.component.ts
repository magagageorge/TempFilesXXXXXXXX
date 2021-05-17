import { Component, OnInit } from '@angular/core';
import { ProfileService } from '@app/services/profile.service';

@Component({
  selector: 'app-dw-profile-left-menu-widget',
  templateUrl: './dw-profile-left-menu-widget.component.html',
  styleUrls: ['./dw-profile-left-menu-widget.component.scss']
})
export class DwProfileLeftMenuWidgetComponent implements OnInit {

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
  }

  getInitLetter(name: string) {
    return (name.substr(0, 1)).toUpperCase();
  }


}
