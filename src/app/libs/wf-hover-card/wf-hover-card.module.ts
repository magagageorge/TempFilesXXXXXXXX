import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverCardDirective } from './directives/hover-card.directive';
import { HoverCardContainerComponent } from './components/hover-card-container/hover-card-container.component';
import { HoverCardComponent } from './components/hover-card/hover-card.component';
import { HoverCardService } from './services/hover-card.service';
import { DeviceDetectorModule } from '../device-detector';
import { RouterModule } from '@angular/router';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { PageCardComponent } from './components/page-card/page-card.component';
import { ThemeModule } from '@app/theme/theme.module';


@NgModule({
  imports: [
    CommonModule,
    DeviceDetectorModule,
    RouterModule,
    ThemeModule
  ],
  declarations: [HoverCardDirective, HoverCardContainerComponent, HoverCardComponent, ProfileCardComponent, PageCardComponent],
  exports: [HoverCardDirective, HoverCardContainerComponent, HoverCardComponent]
})
export class WfHoverCardModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WfHoverCardModule,
      providers: [HoverCardService]
    };
  }
 }
