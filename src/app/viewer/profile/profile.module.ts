import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileHeaderComponent } from './widgets/profile-header/profile-header.component';
import { ProfileSkillsWidgetComponent } from './widgets/profile-skills-widget/profile-skills-widget.component';
import { ProfileActivityWidgetComponent } from './widgets/profile-activity-widget/profile-activity-widget.component';
import { ProfilePhotosWidgetComponent } from './widgets/profile-photos-widget/profile-photos-widget.component';
import { ProfileDealingWidgetComponent } from './widgets/profile-dealing-widget/profile-dealing-widget.component';
import { ProfileContactsWidgetComponent } from './widgets/profile-contacts-widget/profile-contacts-widget.component';
import { ProfileLeftNavWidgetComponent } from './widgets/profile-left-nav-widget/profile-left-nav-widget.component';
import { ProfileLikesWidgetComponent } from './widgets/profile-likes-widget/profile-likes-widget.component';
import { ProfilePagesWidgetComponent } from './widgets/profile-pages-widget/profile-pages-widget.component';
import { ProfileVideosWidgetComponent } from './widgets/profile-videos-widget/profile-videos-widget.component';
import { ProfileMusicWidgetComponent } from './widgets/profile-music-widget/profile-music-widget.component';
import { ProfileMoviesWidgetComponent } from './widgets/profile-movies-widget/profile-movies-widget.component';
import { ProfileFollowsWidgetComponent } from './widgets/profile-follows-widget/profile-follows-widget.component';
import { ThemeModule } from '@app/theme/theme.module';
import { WfHoverCardModule } from '@app/libs/wf-hover-card/wf-hover-card.module';
import { ProfileTitleWidgetComponent } from './widgets/profile-title-widget/profile-title-widget.component';
import { ProfileActionButtonsWidgetComponent } from './widgets/profile-action-buttons-widget/profile-action-buttons-widget.component';
import { TimeLineComponent } from './pages/time-line/time-line.component';
import { AboutComponent } from './pages/about/about.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ProfileAboutSummaryWidgetComponent } from './widgets/profile-about-summary-widget/profile-about-summary-widget.component';
import { ProfilePhotosSummaryWidgetComponent } from './widgets/profile-photos-summary-widget/profile-photos-summary-widget.component';
import { ProfileVideosSummaryWidgetComponent } from './widgets/profile-videos-summary-widget/profile-videos-summary-widget.component';
import { ProfileNetworkSummaryWidgetComponent } from './widgets/profile-network-summary-widget/profile-network-summary-widget.component';
import { ProfileNavWidgetComponent } from './widgets/profile-nav-widget/profile-nav-widget.component';
import { RouterModule } from '@angular/router';
import { ProfileExperienceWidgetComponent } from './widgets/profile-experience-widget/profile-experience-widget.component';
import { ProfileAboutWidgetComponent } from './widgets/profile-about-widget/profile-about-widget.component';
import { MutualConnectionsWidgetComponent } from './widgets/mutual-connections-widget/mutual-connections-widget.component';
import { ProfileViewsWidgetComponent } from './widgets/profile-views-widget/profile-views-widget.component';
import { ProfileRightSidebarComponent } from './layout/profile-right-sidebar/profile-right-sidebar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ConnectionsComponent } from './pages/connections/connections.component';
import { ProfileLeftWidgetComponent } from './widgets/profile-left-widget/profile-left-widget.component';
import { ProfilePostImageViewComponent } from './widgets/profile-post-image-view/profile-post-image-view.component';
import { ProfileImagesOverlayViewComponent } from './widgets/profile-images-overlay-view/profile-images-overlay-view.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    InfiniteScrollModule,
    WfHoverCardModule.forRoot(),
  ],
  declarations: [ProfileComponent, ProfileHeaderComponent, ProfileSkillsWidgetComponent, ProfileActivityWidgetComponent, ProfilePhotosWidgetComponent, ProfileDealingWidgetComponent, ProfileContactsWidgetComponent, ProfileLeftNavWidgetComponent, ProfileLikesWidgetComponent, ProfilePagesWidgetComponent, ProfileVideosWidgetComponent, ProfileMusicWidgetComponent, ProfileMoviesWidgetComponent, ProfileFollowsWidgetComponent, ProfileTitleWidgetComponent, ProfileActionButtonsWidgetComponent, TimeLineComponent, AboutComponent, PhotosComponent, VideosComponent, ProfileAboutSummaryWidgetComponent, ProfilePhotosSummaryWidgetComponent, ProfileVideosSummaryWidgetComponent, ProfileNetworkSummaryWidgetComponent, ProfileNavWidgetComponent, ProfileExperienceWidgetComponent, ProfileAboutWidgetComponent, MutualConnectionsWidgetComponent, ProfileViewsWidgetComponent, ProfileRightSidebarComponent, ConnectionsComponent, ProfileLeftWidgetComponent, ProfilePostImageViewComponent, ProfileImagesOverlayViewComponent],
  exports: [ProfileComponent, ProfileHeaderComponent, ProfileSkillsWidgetComponent, ProfileActivityWidgetComponent, ProfilePhotosWidgetComponent, ProfileDealingWidgetComponent, ProfileContactsWidgetComponent, ProfileLeftNavWidgetComponent, ProfileLikesWidgetComponent, ProfilePagesWidgetComponent, ProfileVideosWidgetComponent, ProfileMusicWidgetComponent, ProfileMoviesWidgetComponent, ProfileFollowsWidgetComponent, ProfileTitleWidgetComponent, ProfileActionButtonsWidgetComponent, TimeLineComponent, AboutComponent, PhotosComponent, VideosComponent, ProfileAboutSummaryWidgetComponent, ProfilePhotosSummaryWidgetComponent, ProfileVideosSummaryWidgetComponent, ProfileNetworkSummaryWidgetComponent, ProfileNavWidgetComponent, ProfileExperienceWidgetComponent, ProfileAboutWidgetComponent, MutualConnectionsWidgetComponent, ProfileViewsWidgetComponent, ProfileRightSidebarComponent, ConnectionsComponent, ProfileLeftWidgetComponent, ProfilePostImageViewComponent, ProfileImagesOverlayViewComponent],
})
export class ProfileModule { }
