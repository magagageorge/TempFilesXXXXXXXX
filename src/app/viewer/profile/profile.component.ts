import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostingService } from '@app/services/posting.service';
import { ProfilePhotosService } from './services/profile-photos.service';
import { ProfileConnectionsService } from '@app/services/profile-connections.service';
import { ProfileFeedService } from './services/profile-feed.service';
import { ProfileViewerService } from './services/profile-viewer.service';
import { AppModalService } from '@app/services/app-modal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  parent_route: string = 'feed';
  navbar_title: string = '';
  route: ActivatedRoute;
  router: Router;
  last_profile_url: string = '';

  constructor(public profileViewerService: ProfileViewerService, public appModalService: AppModalService, public urlviewerService: UrlViewerService, public postingService: PostingService, public profileFeedService: ProfileFeedService, public profilePhotosService: ProfilePhotosService, public profileConnectionsService: ProfileConnectionsService, router: Router, route: ActivatedRoute) {
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
    var _this = this;
    this.route.params.subscribe(params => {
      _this.profileViewerService.checkLoadProfileInfo(params);
    });

  }
}
