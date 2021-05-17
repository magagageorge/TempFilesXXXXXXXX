import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '@app/services/edit-profile.service';
import { ProfileService } from '@app/services/profile.service';
import { DwProfileService } from '../services/dw-profile.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  top_title: string;
  constructor(public profileService: ProfileService, public dwprofileService:DwProfileService, public editProfileService:EditProfileService) { }

  ngOnInit(): void {
    this.top_title = 'PROFILE';
  }

}
