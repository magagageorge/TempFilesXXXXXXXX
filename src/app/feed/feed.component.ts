import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { FeedService } from '@app/services/feed.service';
import { ProfileService } from '@app/services/profile.service';
import { PostingService } from '@app/services/posting.service';
import { DeviceDetectorService } from '@app/libs/device-detector';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feedService: FeedService;
  profileService: ProfileService;
  postingService: PostingService;
  deviceService: DeviceDetectorService;

  constructor(profileService: ProfileService, feedService: FeedService, postingService: PostingService, private title: Title, private meta: Meta, deviceService: DeviceDetectorService) {
    this.profileService = profileService;
    this.feedService = feedService;
    this.postingService = postingService;
    this.deviceService = deviceService;
  }

  ngOnInit() {
    this.title.setTitle('Home | Woorbi');
    this.meta.updateTag({ name: 'description', content: 'A service that brands your career and social identity,then unlock the power of your knowledge,skills,experience and open the door to unlimited number of business and career opportunities around you.' });
    if (this.feedService.feeds.length < 1) {
      this.feedService.onScrollDown();
    }
  }

}
