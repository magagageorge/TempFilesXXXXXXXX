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

@NgModule({
  declarations: [DwNavBarComponent, WelcomeOneWidgetComponent, DwMainContentContainerComponent, ForSeekBusWidgetComponent, DwWelcomePageComponent, DwFooterComponent, DwFindWorkersComponent, DwFindWorkComponent, HowItWorksEmployerWidgetComponent, HowItWorksSeekerWidgetComponent, WelcomeSeekerWidgetComponent, WelcomeEmployerWidgetComponent, PostJobFormComponent, DwOverlayModalContainerComponent, DwCreatePageModalComponent],
  exports: [DwNavBarComponent, WelcomeOneWidgetComponent, DwMainContentContainerComponent, ForSeekBusWidgetComponent, DwWelcomePageComponent, DwFooterComponent, DwFindWorkersComponent, DwFindWorkComponent, HowItWorksEmployerWidgetComponent, HowItWorksSeekerWidgetComponent, WelcomeSeekerWidgetComponent, WelcomeEmployerWidgetComponent, PostJobFormComponent, DwCreatePageModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ImageCropperModule,
  ]
})
export class DaywakaThemeModule { }
