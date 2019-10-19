import {Component, Input, ElementRef, OnInit, ViewChild, AfterViewInit, HostListener  } from '@angular/core';
import { FeedService } from '@app/services/feed.service';
import { PostingService } from '@app/services/posting.service';
import { CommentsService } from "@services/comments.service";
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-feed-widget',
  templateUrl: './feed-widget.component.html',
  styleUrls: ['./feed-widget.component.scss']
})
export class FeedWidgetComponent implements AfterViewInit {
  @Input() profile:any;
  @ViewChild("feedContainer",{static: false})
  feedContainer: ElementRef;
  container_width:number;

  feedService:FeedService;
  postingService:PostingService;
  commentService:CommentsService;
  hovercardService:HoverCardService;
  urlViewerService:UrlViewerService;
  constructor(feedService:FeedService,postingService:PostingService,commentService:CommentsService,urlViewerService:UrlViewerService,hovercardService:HoverCardService) { 
    this.feedService=feedService;
    this.postingService=postingService;
    this.commentService=commentService;
    this.hovercardService=hovercardService;
    this.urlViewerService=urlViewerService;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions() {
    this.container_width=this.feedContainer.nativeElement.clientWidth*0.98;
    this.commentService.feedContainerWidth=this.feedContainer.nativeElement.clientWidth;
  }

  delete(){
  }

  getPictureHeight(width:number,height:number){
    let ratio=width/height;
    let new_height=this.container_width/ratio;
    return new_height;
  }

  getPictureRowHeight(width:number,height:number,container_width:number){
    let ratio=width/height;
    let new_height=container_width/ratio;
    return new_height;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }

}
