import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ProfileFeedService } from '@app/viewer/profile/services/profile-feed.service';
import { Title, Meta } from '@angular/platform-browser';
import { ProfileService } from '@app/services/profile.service';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {

  menu_tab_name:string='timeline';
  urlviewerService:UrlViewerService;
  profileFeedService:ProfileFeedService;
  constructor(urlviewerService:UrlViewerService,public profileService:ProfileService, profileFeedService:ProfileFeedService,private title: Title, private meta: Meta) { 
    this.urlviewerService=urlviewerService;
    this.profileFeedService=profileFeedService;
  }

  ngOnInit() {
    this.title.setTitle(this.urlviewerService.PPVIEWER.profile.name+' - Timeline | Woorbi');
  }

}
