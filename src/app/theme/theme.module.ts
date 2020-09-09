import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InViewportModule } from 'ng-in-viewport';
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
import { AddProfilePhotoAlertWidgetComponent } from './widgets/add-profile-photo-alert-widget/add-profile-photo-alert-widget.component';
import { OverlayModalContainerComponent } from './modals/overlay-modal-container/overlay-modal-container.component';
import { LoadSubmitProcessDataModalComponent } from './modals/load-submit-process-data-modal/load-submit-process-data-modal.component';
import { OverlayLoadSubmitProcessDataWidgetComponent } from './widgets/overlay-load-submit-process-data-widget/overlay-load-submit-process-data-widget.component';
import { NavigationWatchComponent } from './components/navigation-watch/navigation-watch.component';
import { ProcessUploadImagesProgressWidgetComponent } from './widgets/process-upload-images-progress-widget/process-upload-images-progress-widget.component';
import { ProfileFeedImageViewWidgetComponent } from './widgets/profile-feed-image-view-widget/profile-feed-image-view-widget.component';
import { WfLinkifyModule } from '@app/libs/wf-linkify';
import { SharePostFormContainerWidgetComponent } from './widgets/share-post-form-container-widget/share-post-form-container-widget.component';
import { SharedPostWidgetComponent } from './widgets/shared-post-widget/shared-post-widget.component';
import { OverlayPostViewWidgetComponent } from './widgets/overlay-post-view-widget/overlay-post-view-widget.component';
import { PostCardWidgetComponent } from './widgets/post-card-widget/post-card-widget.component';
import { WbMessagesContentComponent } from './components/wb-messages-content/wb-messages-content.component';
import { CreatePageModalComponent } from './modals/create-page-modal/create-page-modal.component';
import { ImageCropperModule } from '@app/libs/wb-image-cropper';
import { ViewAdPostCatalogWidgetComponent } from './widgets/ads/ad-post-catalog-widget/ad-post-catalog-widget.component';
import { ViewAdPostWidgetComponent } from './widgets/ads/ad-post-view-widget/ad-post-view-widget.component';
import { ViewAdTextWidgetComponent } from './widgets/ads/ad-text-view-widget/ad-text-view-widget.component';
import { AdTextRightColumnViewComponent } from './widgets/ads/ad-text-right-column-view/ad-text-right-column-view.component';
import { AdTextTopBannerSmallViewComponent } from './widgets/ads/ad-text-top-banner-small-view/ad-text-top-banner-small-view.component';
import { RightSidebarContainerComponent } from './layouts/right-sidebar-container/right-sidebar-container.component';
import { InPageContentModalComponent } from './widgets/in-page-content-modal/in-page-content-modal.component';
import { VerticalBarsComponent } from './widgets/loaders/vertical-bars/vertical-bars.component';
import { LoadingBarsComponent } from './widgets/loaders/loading-bars/loading-bars.component';
import { LoadingCirclesComponent } from './widgets/loaders/loading-circles/loading-circles.component';
import { FoldingCubeComponent } from './widgets/loaders/folding-cube/folding-cube.component';
import { RippleCirclesComponent } from './widgets/loaders/ripple-circles/ripple-circles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModalModule,
    InfiniteScrollModule,
    RouterModule,
    WfLinkifyModule,
    WfLinkPreviewModule.forRoot(),
    ImageCropperModule,
    InViewportModule
  ],
  providers: [MenuService, sAuthService, WfLinkPreviewService],
  declarations: [WfNavbarComponent, WfSideNavComponent, WfNavbarEmptyComponent, WfFooterComponent, WfMainContentComponent, WfLeftSideBarComponent, WfRightSidebarComponent, PostFormComponent, ContentEditableFormDirective, FeedWidgetComponent, LoadingPostWidgetComponent, FeedCommentsWidgetComponent, PostDeleteModalComponent, ReportContentModalComponent, LoadingNewPostWidgetComponent, CommentDeleteModalComponent, LikesModalComponent, LinkPreviewWidgetComponent, RyouMayknowWidgetComponent, ProfileCardWidgetComponent, SearchFormWidgetComponent, MobileSearchFormWidgetComponent, QuickSearchResultsWidgetComponent, SimpleFeedCardWidgetComponent, WelcomePageComponent, WfNavbarSummaryComponent, WfSocialHeaderComponent, WfSocialHeaderComponent, FaintBodyOverlayComponent, MobileOverlayPostFormComponent, FeedCommentRepliesWidgetComponent, CommentReplyDeleteModalComponent, FeedImageViewWidgetComponent, ProfileFeedWidgetComponent, PostImageOverlayViewComponent, FeedPostImageViewComponent, FeedImagesOverlayViewComponent, AddProfilePhotoAlertWidgetComponent, OverlayModalContainerComponent, LoadSubmitProcessDataModalComponent, OverlayLoadSubmitProcessDataWidgetComponent, NavigationWatchComponent, ProcessUploadImagesProgressWidgetComponent, ProfileFeedImageViewWidgetComponent, SharePostFormContainerWidgetComponent, SharedPostWidgetComponent, OverlayPostViewWidgetComponent, PostCardWidgetComponent, WbMessagesContentComponent, CreatePageModalComponent,ViewAdPostCatalogWidgetComponent,ViewAdPostWidgetComponent,ViewAdTextWidgetComponent, AdTextRightColumnViewComponent, AdTextTopBannerSmallViewComponent, RightSidebarContainerComponent, InPageContentModalComponent, VerticalBarsComponent, LoadingBarsComponent, LoadingCirclesComponent, FoldingCubeComponent, RippleCirclesComponent],
  exports: [WfNavbarComponent, WfSideNavComponent, WfNavbarEmptyComponent, WfFooterComponent, WfMainContentComponent, WfLeftSideBarComponent, WfRightSidebarComponent, PostFormComponent, ContentEditableFormDirective, FeedWidgetComponent, LoadingPostWidgetComponent, FeedCommentsWidgetComponent, PostDeleteModalComponent, ReportContentModalComponent, LoadingNewPostWidgetComponent, CommentDeleteModalComponent, LikesModalComponent, LinkPreviewWidgetComponent, RyouMayknowWidgetComponent, ProfileCardWidgetComponent, SearchFormWidgetComponent, MobileSearchFormWidgetComponent, QuickSearchResultsWidgetComponent, SimpleFeedCardWidgetComponent, WelcomePageComponent, WfNavbarSummaryComponent, WfSocialHeaderComponent, FaintBodyOverlayComponent, MobileOverlayPostFormComponent, FeedCommentRepliesWidgetComponent, CommentReplyDeleteModalComponent, FeedImageViewWidgetComponent, ProfileFeedWidgetComponent, PostImageOverlayViewComponent, FeedPostImageViewComponent, FeedImagesOverlayViewComponent, AddProfilePhotoAlertWidgetComponent, OverlayModalContainerComponent, LoadSubmitProcessDataModalComponent, OverlayLoadSubmitProcessDataWidgetComponent, ProcessUploadImagesProgressWidgetComponent,NavigationWatchComponent, ProfileFeedImageViewWidgetComponent, SharePostFormContainerWidgetComponent, SharedPostWidgetComponent, OverlayPostViewWidgetComponent, PostCardWidgetComponent, WbMessagesContentComponent, CreatePageModalComponent,ViewAdPostCatalogWidgetComponent,ViewAdPostWidgetComponent,ViewAdTextWidgetComponent,AdTextRightColumnViewComponent,AdTextTopBannerSmallViewComponent,RightSidebarContainerComponent,InPageContentModalComponent, VerticalBarsComponent, LoadingBarsComponent, LoadingCirclesComponent, FoldingCubeComponent, RippleCirclesComponent]
})
export class ThemeModule { }
