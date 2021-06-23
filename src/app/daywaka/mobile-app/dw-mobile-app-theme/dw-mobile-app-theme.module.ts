import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DwJobActionsBarComponent } from './widgets/dw-job-actions-bar/dw-job-actions-bar.component';
import { DwMobileAppWelcomeWidgetComponent } from './widgets/dw-mobile-app-welcome-widget/dw-mobile-app-welcome-widget.component';
import { RouterModule } from '@angular/router';
import { DwMobileAppGlobalNavbarComponent } from './navigation/dw-mobile-app-global-navbar/dw-mobile-app-global-navbar.component';

@NgModule({
  declarations: [DwJobActionsBarComponent, DwMobileAppWelcomeWidgetComponent, DwMobileAppGlobalNavbarComponent],
  exports: [DwJobActionsBarComponent, DwMobileAppWelcomeWidgetComponent, DwMobileAppGlobalNavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DwMobileAppThemeModule { }
