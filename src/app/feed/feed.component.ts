import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { FeedService } from '@app/services/feed.service';
import { ProfileService } from '@app/services/profile.service';
import { PostingService } from '@app/services/posting.service';
import { DeviceDetectorService } from '@app/libs/device-detector';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feedService:FeedService;
  profileService:ProfileService;
  postingService: PostingService;
  deviceService:DeviceDetectorService;
  
  constructor(profileService:ProfileService,feedService:FeedService,postingService: PostingService,deviceService:DeviceDetectorService) {
    this.profileService=profileService;
    this.feedService=feedService;
    this.postingService=postingService;
    this.deviceService=deviceService;
   }

  ngOnInit() {
	  if(this.feedService.feeds.length<1){
      this.feedService.onScrollDown();
    }
  }

}
