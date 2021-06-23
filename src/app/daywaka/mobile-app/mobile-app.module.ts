import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileAppRoutingModule, routedComponents } from './mobile-app-routing.module';
import { WbGoogleMapsModule } from '@app/libs/wb-google-maps/wb-google-maps.module';
import { DaywakaThemeModule } from '../daywaka-theme/daywaka-theme.module';
import { DwMobileAppThemeModule } from './dw-mobile-app-theme/dw-mobile-app-theme.module';
import { AuthModule } from '@app/auth';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    MobileAppRoutingModule,
    WbGoogleMapsModule,
    DaywakaThemeModule,
    RouterModule,
    DwMobileAppThemeModule,
    AuthModule
  ]
})
export class MobileAppModule { }

