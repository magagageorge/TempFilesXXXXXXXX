import { Component, Input, ElementRef, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { PostingService } from '@app/services/posting.service';
import { CommentsService } from "@services/comments.service";
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { FeedService } from '@app/services/feed.service';
import { ImageIconsService } from '@app/services/image-icons.service';
import { AppModalService } from '@app/services/app-modal.service';
import { ReportContentModalComponent } from '@app/theme/modals/report-content-modal/report-content-modal.component';
import { PostDeleteModalComponent } from '@app/theme/modals/post-delete-modal/post-delete-modal.component';
import { LikesModalComponent } from '@app/theme/modals/likes-modal/likes-modal.component';
import { ProfileFeedService } from '../../services/profile-feed.service';

@Component({
  selector: 'app-profile-feed-widget',
  templateUrl: './profile-feed-widget.component.html',
  styleUrls: ['./profile-feed-widget.component.scss']
})
export class ProfileFeedWidgetComponent implements AfterViewInit {
  @Input() profile: any;
  @ViewChild("feedContainer", { static: false })
  feedContainer: ElementRef;
  container_width: number;
  max_post_images_height:number;

  profileFeedService: ProfileFeedService;
  postingService: PostingService;
  commentService: CommentsService;
  hovercardService: HoverCardService;
  urlViewerService: UrlViewerService;
  imageIconsService: ImageIconsService;
  appModalService:AppModalService;
  constructor(profileFeedService: ProfileFeedService,appModalService:AppModalService, postingService: PostingService, commentService: CommentsService,imageIconsService: ImageIconsService, urlViewerService: UrlViewerService, hovercardService: HoverCardService) {
    this.profileFeedService = profileFeedService;
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
