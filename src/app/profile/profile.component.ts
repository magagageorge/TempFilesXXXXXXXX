import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '@app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  router:Router;
  profileService:ProfileService;
  route:ActivatedRoute;
  profile_url:string="";
  constructor(profileService:ProfileService,router:Router,route:ActivatedRoute) {
    this.router=router;
    this.route=route;
    this.profileService=profileService;
    this.profile_url = this.route.snapshot.paramMap.get('profile');
   }

  ngOnInit() {
    
  }

}
