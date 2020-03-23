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
import { EditProfileOverlayContainerComponent } from './widgets/edit-profile-overlay-container/edit-profile-overlay-container.component';
import { EditCoverOptionsWidgetComponent } from './widgets/edit-widgets/edit-cover-options-widget/edit-cover-options-widget.component';
import { CropCoverWidgetComponent } from './widgets/edit-widgets/crop-cover-widget/crop-cover-widget.component';
import { ImageCropperModule } from '@app/libs/wb-image-cropper';
import { EditAvatarOptionsWidgetComponent } from './widgets/edit-widgets/edit-avatar-options-widget/edit-avatar-options-widget.component';
import { CropAvatarWidgetComponent } from './widgets/edit-widgets/crop-avatar-widget/crop-avatar-widget.component';
import { ProfileTopCardWidgetComponent } from './widgets/edit-widgets/profile-top-card-widget/profile-top-card-widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileAboutWidgetComponent } from './widgets/edit-widgets/edit-profile-about-widget/edit-profile-about-widget.component';
import { ProfileEducationsWidgetComponent } from './widgets/profile-educations-widget/profile-educations-widget.component';
import { EditProfileExperienceWidgetComponent } from './widgets/edit-widgets/edit-profile-experience-widget/edit-profile-experience-widget.component';
import { EditProfileEducationWidgetComponent } from './widgets/edit-widgets/edit-profile-education-widget/edit-profile-education-widget.component';
import { EditProfileSkillsWidgetComponent } from './widgets/edit-widgets/edit-profile-skills-widget/edit-profile-skills-widget.component';
import { EditProfileIndustriesWidgetComponent } from './widgets/edit-widgets/edit-profile-industries-widget/edit-profile-industries-widget.component';
import { DeleteProfileExperienceWidgetComponent } from './widgets/delete-widgets/delete-profile-experience-widget/delete-profile-experience-widget.component';
import { DeleteProfileEducationWidgetComponent } from './widgets/delete-widgets/delete-profile-education-widget/delete-profile-education-widget.component';
import { DeleteProfileOverlayContainerComponent } from './widgets/delete-profile-overlay-container/delete-profile-overlay-container.component';
import { ProcessUploadImagesProgressWidgetComponent } from '../../theme/widgets/process-upload-images-progress-widget/process-upload-images-progress-widget.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    WfHoverCardModule.forRoot(),
    ImageCropperModule
  ],
  declarations: [ProfileComponent, ProfileHeaderComponent, ProfileSkillsWidgetComponent, ProfileActivityWidgetComponent, ProfilePhotosWidgetComponent, ProfileDealingWidgetComponent, ProfileContactsWidgetComponent, ProfileLeftNavWidgetComponent, ProfileLikesWidgetComponent, ProfilePagesWidgetComponent, ProfileVideosWidgetComponent, ProfileMusicWidgetComponent, ProfileMoviesWidgetComponent, ProfileFollowsWidgetComponent, ProfileTitleWidgetComponent, ProfileActionButtonsWidgetComponent, TimeLineComponent, AboutComponent, PhotosComponent, VideosComponent, ProfileAboutSummaryWidgetComponent, ProfilePhotosSummaryWidgetComponent, ProfileVideosSummaryWidgetComponent, ProfileNetworkSummaryWidgetComponent, ProfileNavWidgetComponent, ProfileExperienceWidgetComponent, ProfileAboutWidgetComponent, MutualConnectionsWidgetComponent, ProfileViewsWidgetComponent, ProfileRightSidebarComponent, ConnectionsComponent, ProfileLeftWidgetComponent, ProfilePostImageViewComponent, ProfileImagesOverlayViewComponent, EditProfileOverlayContainerComponent, EditCoverOptionsWidgetComponent, CropCoverWidgetComponent, EditAvatarOptionsWidgetComponent, CropAvatarWidgetComponent, ProfileTopCardWidgetComponent,EditProfileAboutWidgetComponent, ProfileEducationsWidgetComponent, EditProfileExperienceWidgetComponent, EditProfileEducationWidgetComponent, EditProfileSkillsWidgetComponent, EditProfileIndustriesWidgetComponent, DeleteProfileExperienceWidgetComponent, DeleteProfileEducationWidgetComponent, DeleteProfileOverlayContainerComponent],
  exports: [ProfileComponent, ProfileHeaderComponent, ProfileSkillsWidgetComponent, ProfileActivityWidgetComponent, ProfilePhotosWidgetComponent, ProfileDealingWidgetComponent, ProfileContactsWidgetComponent, ProfileLeftNavWidgetComponent, ProfileLikesWidgetComponent, ProfilePagesWidgetComponent, ProfileVideosWidgetComponent, ProfileMusicWidgetComponent, ProfileMoviesWidgetComponent, ProfileFollowsWidgetComponent, ProfileTitleWidgetComponent, ProfileActionButtonsWidgetComponent, TimeLineComponent, AboutComponent, PhotosComponent, VideosComponent, ProfileAboutSummaryWidgetComponent, ProfilePhotosSummaryWidgetComponent, ProfileVideosSummaryWidgetComponent, ProfileNetworkSummaryWidgetComponent, ProfileNavWidgetComponent, ProfileExperienceWidgetComponent, ProfileAboutWidgetComponent, MutualConnectionsWidgetComponent, ProfileViewsWidgetComponent, ProfileRightSidebarComponent, ConnectionsComponent, ProfileLeftWidgetComponent, ProfilePostImageViewComponent, ProfileImagesOverlayViewComponent, EditProfileOverlayContainerComponent, EditCoverOptionsWidgetComponent, CropCoverWidgetComponent, ProfileTopCardWidgetComponent,EditProfileAboutWidgetComponent, ProfileEducationsWidgetComponent, EditProfileExperienceWidgetComponent, EditProfileEducationWidgetComponent, EditProfileSkillsWidgetComponent, EditProfileIndustriesWidgetComponent, DeleteProfileExperienceWidgetComponent, DeleteProfileEducationWidgetComponent, DeleteProfileOverlayContainerComponent],
})
export class ProfileModule { }
