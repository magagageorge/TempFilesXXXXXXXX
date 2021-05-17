import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedOverlayModalContainerComponent } from './modals/shared-overlay-modal-container/shared-overlay-modal-container.component';
import { SharedDeleteProfileEducationWidgetComponent } from './widgets/profile/delete-widgets/delete-profile-education-widget/delete-profile-education-widget.component';
import { SharedDeleteProfileExperienceWidgetComponent } from './widgets/profile/delete-widgets/delete-profile-experience-widget/delete-profile-experience-widget.component';
import { SharedDeleteProfileOverlayContainerComponent } from './widgets/profile/delete-profile-overlay-container/delete-profile-overlay-container.component';
import { SharedEditProfileOverlayContainerComponent } from './widgets/profile/edit-profile-overlay-container/edit-profile-overlay-container.component';
import { SharedCropAvatarWidgetComponent } from './widgets/profile/edit-widgets/crop-avatar-widget/crop-avatar-widget.component';
import { SharedCropCoverWidgetComponent } from './widgets/profile/edit-widgets/crop-cover-widget/crop-cover-widget.component';
import { SharedEditAvatarOptionsWidgetComponent } from './widgets/profile/edit-widgets/edit-avatar-options-widget/edit-avatar-options-widget.component';
import { SharedEditCoverOptionsWidgetComponent } from './widgets/profile/edit-widgets/edit-cover-options-widget/edit-cover-options-widget.component';
import { SharedEditProfileAboutWidgetComponent } from './widgets/profile/edit-widgets/edit-profile-about-widget/edit-profile-about-widget.component';
import { SharedEditProfileEducationWidgetComponent } from './widgets/profile/edit-widgets/edit-profile-education-widget/edit-profile-education-widget.component';
import { SharedEditProfileExperienceWidgetComponent } from './widgets/profile/edit-widgets/edit-profile-experience-widget/edit-profile-experience-widget.component';
import { SharedEditProfileIndustriesWidgetComponent } from './widgets/profile/edit-widgets/edit-profile-industries-widget/edit-profile-industries-widget.component';
import { SharedEditProfileSkillsWidgetComponent } from './widgets/profile/edit-widgets/edit-profile-skills-widget/edit-profile-skills-widget.component';
import { SharedProfileTopCardWidgetComponent } from './widgets/profile/edit-widgets/profile-top-card-widget/profile-top-card-widget.component';
import { ImageCropperModule } from '@app/libs/wb-image-cropper';
import { InViewportModule } from 'ng-in-viewport';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedEditProfileLanguagesWidgetComponent } from './widgets/profile/edit-widgets/shared-edit-profile-languages-widget/shared-edit-profile-languages-widget.component';

@NgModule({
  declarations: [SharedOverlayModalContainerComponent,
    SharedDeleteProfileEducationWidgetComponent,
    SharedDeleteProfileExperienceWidgetComponent,
    SharedDeleteProfileOverlayContainerComponent,
    SharedEditProfileOverlayContainerComponent,
    SharedEditCoverOptionsWidgetComponent,
    SharedCropCoverWidgetComponent,
    SharedEditAvatarOptionsWidgetComponent,
    SharedCropAvatarWidgetComponent,
    SharedProfileTopCardWidgetComponent,
    SharedEditProfileAboutWidgetComponent,
    SharedEditProfileExperienceWidgetComponent,
    SharedEditProfileEducationWidgetComponent,
    SharedEditProfileSkillsWidgetComponent,
    SharedEditProfileIndustriesWidgetComponent,
    SharedEditProfileLanguagesWidgetComponent],
  exports: [SharedOverlayModalContainerComponent,
    SharedDeleteProfileEducationWidgetComponent,
    SharedDeleteProfileExperienceWidgetComponent,
    SharedDeleteProfileOverlayContainerComponent,
    SharedEditProfileOverlayContainerComponent,
    SharedEditCoverOptionsWidgetComponent,
    SharedCropCoverWidgetComponent,
    SharedEditAvatarOptionsWidgetComponent,
    SharedCropAvatarWidgetComponent,
    SharedProfileTopCardWidgetComponent,
    SharedEditProfileAboutWidgetComponent,
    SharedEditProfileExperienceWidgetComponent,
    SharedEditProfileEducationWidgetComponent,
    SharedEditProfileSkillsWidgetComponent,
    SharedEditProfileIndustriesWidgetComponent,
    SharedEditProfileLanguagesWidgetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule,
    InViewportModule
  ]
})
export class SharedThemeModule { }
