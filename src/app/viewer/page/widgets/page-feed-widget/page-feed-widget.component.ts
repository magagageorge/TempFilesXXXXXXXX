import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { AppModalService } from '@app/services/app-modal.service';
import { CommentsService } from '@app/services/comments.service';
import { FeedService } from '@app/services/feed.service';
import { ImageIconsService } from '@app/services/image-icons.service';
import { PostingService } from '@app/services/posting.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { LikesModalComponent } from '@app/theme/modals/likes-modal/likes-modal.component';
import { PostDeleteModalComponent } from '@app/theme/modals/post-delete-modal/post-delete-modal.component';
import { ReportContentModalComponent } from '@app/theme/modals/report-content-modal/report-content-modal.component';
import { PageFeedService } from '../../services/page-feed.service';

@Component({
  selector: 'app-page-feed-widget',
  templateUrl: './page-feed-widget.component.html',
  styleUrls: ['./page-feed-widget.component.scss']
})
export class PageFeedWidgetComponent implements AfterViewInit {
  @Input() profile: any;
  @ViewChild("feedContainer", { static: false })
  feedContainer: ElementRef;
  container_width: number;
  max_post_images_height:number;

  pageFeedService: PageFeedService;
  postingService: PostingService;
  commentService: CommentsService;
  hovercardService: HoverCardService;
  urlViewerService: UrlViewerService;
  imageIconsService: ImageIconsService;
  appModalService:AppModalService;
  constructor(pageFeedService: PageFeedService,appModalService:AppModalService, postingService: PostingService, commentService: CommentsService,imageIconsService: ImageIconsService, urlViewerService: UrlViewerService, hovercardService: HoverCardService) {
    this.pageFeedService = pageFeedService;
    this.postingService = postingService;
    this.commentService = commentService;
    this.hovercardService = hovercardService;
    this.urlViewerService = urlViewerService;
    this.imageIconsService=imageIconsService;
    this.appModalService=appModalService;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions(){
    this.container_width = this.feedContainer.nativeElement.clientWidth * 0.98;
    this.commentService.feedContainerWidth = this.feedContainer.nativeElement.clientWidth;
    //this.max_post_images_height=window.innerHeight * 0.8;
    this.max_post_images_height=this.container_width * 1.0;
  }

  delete() {
  }

  getPictureHeight(width: number, height: number) {
    let ratio = width / height;
    let new_height = this.container_width / ratio;
    return new_height;
  }

  getPictureRowHeight(width: number, height: number, container_width: number) {
    let ratio = width / height;
    let new_height = container_width / ratio;
    return new_height;
  }

  reportPostContent(post_id: number) {
    this.appModalService.modalRef = this.appModalService._modalService.open(ReportContentModalComponent, { centered: true });
    this.appModalService.modalRef.componentInstance.setModel(post_id, 'Post');
  }

  confirmDeletePost(post_id: number) {
    this.appModalService.modalRef = this.appModalService._modalService.open(PostDeleteModalComponent, { centered: true });
    this.appModalService.modalRef.componentInstance.setFeedId(post_id);
  }

  showPostLikes(post_id: number, no_likes: any) {
    this.appModalService.modalRef = this.appModalService._modalService.open(LikesModalComponent, { centered: true });
    this.appModalService.modalRef.componentInstance.setModel(post_id, 'Post', no_likes);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }

}
