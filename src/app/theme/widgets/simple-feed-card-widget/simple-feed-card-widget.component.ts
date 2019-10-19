import {Component, Input, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { FeedService } from '@app/services/feed.service';
import { CommentsService } from "@services/comments.service";
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { Feed } from '@app/models/feed/feed';

@Component({
  selector: 'app-simple-feed-card-widget',
  templateUrl: './simple-feed-card-widget.component.html',
  styleUrls: ['./simple-feed-card-widget.component.scss']
})
export class SimpleFeedCardWidgetComponent implements OnInit {
  @Input() profile:any;
  @Input() feed:Feed;
  container_width:number;

  feedService:FeedService;
  commentService:CommentsService;
  hovercardService:HoverCardService;
  constructor(feedService:FeedService,commentService:CommentsService,hovercardService:HoverCardService) { 
    this.feedService=feedService;
    this.commentService=commentService;
    this.hovercardService=hovercardService;
  }

  ngOnInit() {
    //this.container_width=this.feedContainer.nativeElement.clientWidth*0.98;
    this.container_width=500;
  }

  delete(){

  }

  getPictureHeight(width:number,height:number){
    let ratio=width/height;
    let new_height=this.container_width/ratio;
    return new_height;
  }
}
