import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DwPageManagerContentContainerComponent } from './components/layout/dw-page-manager-content-container/dw-page-manager-content-container.component';
import { DwPageManagerLeftMenuComponent } from './components/widgets/dw-page-manager-left-menu/dw-page-manager-left-menu.component';
import { DwBusinessComponent } from './business.component';
import { RouterModule } from '@angular/router';
import { DwPageViewerService } from './services/dw-page-viewer.service';
import { DwBusinessTopMenuWidgetComponent } from './components/widgets/dw-business-top-menu-widget/dw-business-top-menu-widget.component';
import { DwBussinesJobsWidgetComponent } from './components/widgets/dw-bussines-jobs-widget/dw-bussines-jobs-widget.component';
import { DwBusinessContentRouterComponent } from './components/layout/dw-business-content-router/dw-business-content-router.component';
import { DwCreateBusinessJobComponent } from './components/pages/dw-create-business-job/dw-create-business-job.component';
import { DwEditBusinessJobComponent } from './components/pages/dw-edit-business-job/dw-edit-business-job.component';
import { DwBussinessDashboardComponent } from './components/pages/dw-bussiness-dashboard/dw-bussiness-dashboard.component';
import { DwBusinessJobsComponent } from './components/pages/dw-business-jobs/dw-business-jobs.component';
import { DaywakaThemeModule } from '@app/daywaka/daywaka-theme/daywaka-theme.module';
import { DwViewBusinessJobComponent } from './components/pages/dw-view-business-job/dw-view-business-job.component';


@NgModule({
  declarations: [DwBusinessComponent, DwPageManagerContentContainerComponent, DwPageManagerLeftMenuComponent, DwBusinessTopMenuWidgetComponent, DwBussinesJobsWidgetComponent, DwBusinessContentRouterComponent, DwCreateBusinessJobComponent, DwEditBusinessJobComponent, DwBussinessDashboardComponent, DwBusinessJobsComponent, DwViewBusinessJobComponent],
  exports: [DwBusinessComponent, DwPageManagerContentContainerComponent, DwPageManagerLeftMenuComponent, DwBusinessTopMenuWidgetComponent, DwBussinesJobsWidgetComponent, DwBusinessContentRouterComponent, DwCreateBusinessJobComponent, DwEditBusinessJobComponent, DwBussinessDashboardComponent, DwBusinessJobsComponent, DwViewBusinessJobComponent],
  imports: [
    CommonModule,
    RouterModule,
    DaywakaThemeModule
  ],
  providers:[DwPageViewerService]
})
export class DwBusinessModule { }
