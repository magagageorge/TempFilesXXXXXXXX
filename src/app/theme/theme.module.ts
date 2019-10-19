import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { WfLinkPreviewModule } from '../libs/wf-link-preview';
import { ContentEditableFormDirective } from '../libs/content-editable-form.directive';
import { WfNavbarComponent } from './components/wf-navbar/wf-navbar.component';
import { WfSideNavComponent } from './components/wf-side-nav/wf-side-nav.component';
import { WfNavbarEmptyComponent } from './components/wf-navbar-empty/wf-navbar-empty.component';
import { WfFooterComponent } from './components/wf-footer/wf-footer.component';
import { WfMainContentComponent } from './components/wf-main-content/wf-main-content.component';
import { WfLeftSideBarComponent } from './layouts/wf-left-side-bar/wf-left-side-bar.component';
import { WfRightSidebarComponent } from './layouts/wf-right-sidebar/wf-right-sidebar.component';
import { PostFormComponent } from './widgets/post-form/post-form.component';
import { MenuService } from './services/menu.service';
import { FeedWidgetComponent } from './widgets/feed-widget/feed-widget.component';
import { LoadingPostWidgetComponent } from './widgets/loading-post-widget/loading-post-widget.component';
import { FeedCommentsWidgetComponent } from './widgets/feed-comments-widget/feed-comments-widget.component';
import { PostDeleteModalComponent } from './modals/post-delete-modal/post-delete-modal.component';
import { ReportContentModalComponent } from './modals/report-content-modal/report-content-modal.component';
import { LoadingNewPostWidgetComponent } from './widgets/loading-new-post-widget/loading-new-post-widget.component';
import { CommentDeleteModalComponent } from './modals/comment-delete-modal/comment-delete-modal.component';
import { LikesModalComponent } from './modals/likes-modal/likes-modal.component';
import { LinkPreviewWidgetComponent } from './widgets/link-preview-widget/link-preview-widget.component';
import { RyouMayknowWidgetComponent } from './widgets/ryou-mayknow-widget/ryou-mayknow-widget.component';
import { ProfileCardWidgetComponent } from './widgets/profile-card-widget/profile-card-widget.component';
import { SearchFormWidgetComponent } from './widgets/search-form-widget/search-form-widget.component';
import { MobileSearchFormWidgetComponent } from './widgets/mobile-search-form-widget/mobile-search-form-widget.component';
import { QuickSearchResultsWidgetComponent } from './widgets/quick-search-results-widget/quick-search-results-widget.component';
import { SimpleFeedCardWidgetComponent } from './widgets/simple-feed-card-widget/simple-feed-card-widget.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { WfNavbarSummaryComponent } from './components/wf-navbar-summary/wf-navbar-summary.component';
import { WfSocialHeaderComponent } from './components/wf-social-header/wf-social-header.component';
import { AuthService as sAuthService } from "angularx-social-login";
import { FaintBodyOverlayComponent } from './components/faint-body-overlay/faint-body-overlay.component';
import { MobileOverlayPostFormComponent } from './components/mobile-overlay-post-form/mobile-overlay-post-form.component';
import { WfLinkPreviewService } from '@app/libs/wf-link-preview/services/wf-link-preview.service';
import { FeedCommentRepliesWidgetComponent } from './widgets/feed-comment-replies-widget/feed-comment-replies-widget.component';
import { CommentReplyDeleteModalComponent } from './modals/comment-reply-delete-modal/comment-reply-delete-modal.component';
import { FeedImageViewWidgetComponent } from './widgets/feed-image-view-widget/feed-image-view-widget.component';
import { ProfileFeedWidgetComponent } from './widgets/profile-feed-widget/profile-feed-widget.component';
import { ProfileFeedService } from '@app/services/profile-feed.service';
import { PostImageOverlayViewComponent } from './components/post-image-overlay-view/post-image-overlay-view.component';
import { FeedPostImageViewComponent } from './components/feed-post-image-view/feed-post-image-view.component';
import { FeedImagesOverlayViewComponent } from './components/feed-images-overlay-view/feed-images-overlay-view.component';

@NgModule({
  imports: [
   CommonModule,
   FormsModule,
   ReactiveFormsModule,
   NgbModule,
   NgbModalModule,
   InfiniteScrollModule,
   RouterModule,
   WfLinkPreviewModule.forRoot()
  ],
  providers:[MenuService,sAuthService,WfLinkPreviewService],
  declarations: [WfNavbarComponent, WfSideNavComponent, WfNavbarEmptyComponent, WfFooterComponent, WfMainContentComponent, WfLeftSideBarComponent, WfRightSidebarComponent, PostFormComponent,ContentEditableFormDirective, FeedWidgetComponent, LoadingPostWidgetComponent, FeedCommentsWidgetComponent, PostDeleteModalComponent, ReportContentModalComponent, LoadingNewPostWidgetComponent, CommentDeleteModalComponent, LikesModalComponent, LinkPreviewWidgetComponent, RyouMayknowWidgetComponent, ProfileCardWidgetComponent, SearchFormWidgetComponent, MobileSearchFormWidgetComponent, QuickSearchResultsWidgetComponent,SimpleFeedCardWidgetComponent, WelcomePageComponent, WfNavbarSummaryComponent, WfSocialHeaderComponent,WfSocialHeaderComponent, FaintBodyOverlayComponent, MobileOverlayPostFormComponent, FeedCommentRepliesWidgetComponent, CommentReplyDeleteModalComponent, FeedImageViewWidgetComponent, ProfileFeedWidgetComponent, PostImageOverlayViewComponent, FeedPostImageViewComponent, FeedImagesOverlayViewComponent],
  exports: [WfNavbarComponent, WfSideNavComponent, WfNavbarEmptyComponent, WfFooterComponent, WfMainContentComponent, WfLeftSideBarComponent, WfRightSidebarComponent,PostFormComponent,ContentEditableFormDirective, FeedWidgetComponent, LoadingPostWidgetComponent, FeedCommentsWidgetComponent, PostDeleteModalComponent, ReportContentModalComponent, LoadingNewPostWidgetComponent,CommentDeleteModalComponent, LikesModalComponent, LinkPreviewWidgetComponent, RyouMayknowWidgetComponent, ProfileCardWidgetComponent, SearchFormWidgetComponent, MobileSearchFormWidgetComponent, QuickSearchResultsWidgetComponent,SimpleFeedCardWidgetComponent, WelcomePageComponent, WfNavbarSummaryComponent,WfSocialHeaderComponent,FaintBodyOverlayComponent,MobileOverlayPostFormComponent,FeedCommentRepliesWidgetComponent,CommentReplyDeleteModalComponent, FeedImageViewWidgetComponent, ProfileFeedWidgetComponent, PostImageOverlayViewComponent, FeedPostImageViewComponent, FeedImagesOverlayViewComponent]  
})
export class ThemeModule { }
