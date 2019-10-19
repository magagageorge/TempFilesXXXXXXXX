import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../theme/theme.module';

import { ProfileRoutingModule,routedComponents } from './profile-routing.module';
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

@NgModule({
  imports: [
    CommonModule,
	  ThemeModule,
    ProfileRoutingModule
  ],
  declarations: [...routedComponents, ProfileHeaderComponent, ProfileSkillsWidgetComponent, ProfileActivityWidgetComponent, ProfilePhotosWidgetComponent, ProfileDealingWidgetComponent, ProfileContactsWidgetComponent, ProfileLeftNavWidgetComponent, ProfileLikesWidgetComponent, ProfilePagesWidgetComponent, ProfileVideosWidgetComponent, ProfileMusicWidgetComponent, ProfileMoviesWidgetComponent, ProfileFollowsWidgetComponent]
})
export class ProfileModule { }
