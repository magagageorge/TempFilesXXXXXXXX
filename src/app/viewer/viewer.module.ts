import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewerRoutingModule,routedComponents } from './viewer-routing.module';
import { ProfileModule } from './profile/profile.module';
import { ThemeModule } from '@app/theme/theme.module';
import { PageModule } from './page/page.module';

@NgModule({
  imports: [
    CommonModule,
    ViewerRoutingModule,
    ProfileModule,
    PageModule,
    ThemeModule,
  ],
  declarations: [...routedComponents]
})
export class ViewerModule { }
