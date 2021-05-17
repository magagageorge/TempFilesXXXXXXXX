import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DwNavBarComponent } from './components/menus/dw-nav-bar/dw-nav-bar.component';
import { WelcomeOneWidgetComponent } from './components/widgets/welcome-one-widget/welcome-one-widget.component';
import { DwMainContentContainerComponent } from './components/layouts/dw-main-content-container/dw-main-content-container.component';
import { ForSeekBusWidgetComponent } from './components/widgets/for-seek-bus-widget/for-seek-bus-widget.component';
import { DwWelcomePageComponent } from './components/pages/dw-welcome-page/dw-welcome-page.component';
import { RouterModule } from '@angular/router';
import { DwFooterComponent } from './components/layouts/dw-footer/dw-footer.component';
import { DwFindWorkersComponent } from './components/pages/dw-find-workers/dw-find-workers.component';
import { DwFindWorkComponent } from './components/pages/dw-find-work/dw-find-work.component';
import { HowItWorksEmployerWidgetComponent } from './components/widgets/how-it-works-employer-widget/how-it-works-employer-widget.component';
import { HowItWorksSeekerWidgetComponent } from './components/widgets/how-it-works-seeker-widget/how-it-works-seeker-widget.component';
import { WelcomeSeekerWidgetComponent } from './components/widgets/welcome-seeker-widget/welcome-seeker-widget.component';
import { WelcomeEmployerWidgetComponent } from './components/widgets/welcome-employer-widget/welcome-employer-widget.component';
import { PostJobFormComponent } from './components/forms/post-job-form/post-job-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DwOverlayModalContainerComponent } from './components/modals/dw-overlay-modal-container/dw-overlay-modal-container.component';
import { DwCreatePageModalComponent } from './components/modals/dw-create-page-modal/dw-create-page-modal.component';
import { ImageCropperModule } from '@app/libs/wb-image-cropper';
import { WbGoogleMapsModule } from '@app/libs/wb-google-maps/wb-google-maps.module';
import { DwPageViewerService } from '../dw-viewer/business/services/dw-page-viewer.service';
import { JobsByListWidgetComponent } from './components/widgets/jobs-by-list-widget/jobs-by-list-widget.component';
import { JobsByMapWidgetComponent } from './components/widgets/jobs-by-map-widget/jobs-by-map-widget.component';
import { DwJobsContentContainerComponent } from './components/layouts/dw-jobs-content-container/dw-jobs-content-container.component';
import { DwProfileLeftMenuWidgetComponent } from './components/widgets/dw-profile-left-menu-widget/dw-profile-left-menu-widget.component';
import { DwProfileNavBarComponent } from './components/menus/dw-profile-nav-bar/dw-profile-nav-bar.component';
import { JobDetailsHeaderWidgetComponent } from './components/widgets/job-details-header-widget/job-details-header-widget.component';
import { DwProfileHeaderWidgetComponent } from './components/widgets/dw-profile-header-widget/dw-profile-header-widget.component';
import { DwProfileViewerService } from '../services/dw-profile-viewer.service';
import { DwEditJobPreferencesWidgetComponent } from './components/widgets/profile/edit-widgets/dw-edit-job-preferences-widget/dw-edit-job-preferences-widget.component';
import { DwEditProfileOverlayContainerModalComponent } from './components/modals/dw-edit-profile-overlay-container-modal/dw-edit-profile-overlay-container-modal.component';
import { DwAcceptJobModalComponent } from './components/modals/dw-accept-job-modal/dw-accept-job-modal.component';
import { EmployerProfileViewerComponent } from './components/pages/employer-profile-viewer/employer-profile-viewer.component';
import { DwEmployerProfileViewerModalComponent } from './components/modals/dw-employer-profile-viewer-modal/dw-employer-profile-viewer-modal.component';
import { DwGlobalNavBarComponent } from './components/menus/dw-global-nav-bar/dw-global-nav-bar.component';
import { DwEmpoloyerJobScheduleListItemWidgetComponent } from './components/widgets/dw-empoloyer-job-schedule-list-item-widget/dw-empoloyer-job-schedule-list-item-widget.component';
import { DwWorkerJobScheduleDetailsModalComponent } from './components/modals/dw-worker-job-schedule-details-modal/dw-worker-job-schedule-details-modal.component';
import { ApproveCompletedJobModalComponent } from './components/modals/approve-completed-job-modal/approve-completed-job-modal.component';
import { DwEmpoloyerJobListItemWidgetComponent } from './components/widgets/dw-empoloyer-job-list-item-widget/dw-empoloyer-job-list-item-widget.component';
import { DwEmployerDeleteJobModalComponent } from './components/modals/dw-employer-delete-job-modal/dw-employer-delete-job-modal.component';
import { DwEmployerCancelJobModalComponent } from './components/modals/dw-employer-cancel-job-modal/dw-employer-cancel-job-modal.component';
import { DwEmployerBulkApproveCompletedJobsModalComponent } from './components/modals/dw-employer-bulk-approve-completed-jobs-modal/dw-employer-bulk-approve-completed-jobs-modal.component';

@NgModule({
  declarations: [DwNavBarComponent, WelcomeOneWidgetComponent, DwMainContentContainerComponent, ForSeekBusWidgetComponent, DwWelcomePageComponent, DwFooterComponent, DwFindWorkersComponent, DwFindWorkComponent, HowItWorksEmployerWidgetComponent, HowItWorksSeekerWidgetComponent, WelcomeSeekerWidgetComponent, WelcomeEmployerWidgetComponent, PostJobFormComponent, DwOverlayModalContainerComponent, DwCreatePageModalComponent, JobsByListWidgetComponent, JobsByMapWidgetComponent, DwJobsContentContainerComponent, DwProfileLeftMenuWidgetComponent, DwProfileNavBarComponent, JobDetailsHeaderWidgetComponent, DwProfileHeaderWidgetComponent, DwEditJobPreferencesWidgetComponent, DwEditProfileOverlayContainerModalComponent, DwAcceptJobModalComponent, EmployerProfileViewerComponent, DwEmployerProfileViewerModalComponent, DwGlobalNavBarComponent, DwEmpoloyerJobScheduleListItemWidgetComponent, DwWorkerJobScheduleDetailsModalComponent, ApproveCompletedJobModalComponent, DwEmpoloyerJobListItemWidgetComponent, DwEmployerDeleteJobModalComponent, DwEmployerCancelJobModalComponent, DwEmployerBulkApproveCompletedJobsModalComponent],
  exports: [DwNavBarComponent, WelcomeOneWidgetComponent, DwMainContentContainerComponent, ForSeekBusWidgetComponent, DwWelcomePageComponent, DwFooterComponent, DwFindWorkersComponent, DwFindWorkComponent, HowItWorksEmployerWidgetComponent, HowItWorksSeekerWidgetComponent, WelcomeSeekerWidgetComponent, WelcomeEmployerWidgetComponent, PostJobFormComponent, DwCreatePageModalComponent, JobsByListWidgetComponent, JobsByMapWidgetComponent, DwJobsContentContainerComponent, DwProfileLeftMenuWidgetComponent, DwProfileNavBarComponent, JobDetailsHeaderWidgetComponent, DwProfileHeaderWidgetComponent, DwEditJobPreferencesWidgetComponent, DwEditProfileOverlayContainerModalComponent, DwAcceptJobModalComponent, EmployerProfileViewerComponent, DwEmployerProfileViewerModalComponent, DwGlobalNavBarComponent, DwEmpoloyerJobScheduleListItemWidgetComponent, DwWorkerJobScheduleDetailsModalComponent,ApproveCompletedJobModalComponent, DwEmpoloyerJobListItemWidgetComponent, DwEmployerDeleteJobModalComponent, DwEmployerCancelJobModalComponent, DwEmployerBulkApproveCompletedJobsModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ImageCropperModule,
    WbGoogleMapsModule
  ],
  providers: [DwPageViewerService, DwProfileViewerService]
})
export class DaywakaThemeModule { }
