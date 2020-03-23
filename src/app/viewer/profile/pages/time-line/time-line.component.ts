import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ProfileFeedService } from '@app/services/profile-feed.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {

  menu_tab_name:string='timeline';
  urlviwerService:UrlViewerService;
  profileFeedService:ProfileFeedService;
  constructor(urlviwerService:UrlViewerService,profileFeedService:ProfileFeedService,private title: Title, private meta: Meta) { 
    this.urlviwerService=urlviwerService;
    this.profileFeedService=profileFeedService;
  }


  ngOnInit() {
    this.title.setTitle(this.urlviwerService.PPVIEWER.profile.name+' - Timeline | Woorbi');
  }

}
