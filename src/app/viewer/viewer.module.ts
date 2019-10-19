import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerRoutingModule,routedComponents } from './viewer-routing.module';
import { ProfileModule } from './profile/profile.module';
import { ThemeModule } from '@app/theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ViewerRoutingModule,
    ProfileModule,
    ThemeModule,
  ],
  declarations: [...routedComponents]
})
export class ViewerModule { }
