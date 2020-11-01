import { Component, OnInit } from '@angular/core';
import { AppModalService } from '@app/services/app-modal.service';
import { FeedService } from '@app/services/feed.service';

@Component({
  selector: 'app-wf-main-content',
  templateUrl: './wf-main-content.component.html',
  styleUrls: ['./wf-main-content.component.scss']
})
export class WfMainContentComponent implements OnInit {

  constructor(public appModalService:AppModalService,public feedService:FeedService) { }

  ngOnInit() {
  }

}
