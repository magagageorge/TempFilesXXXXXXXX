import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyprofileRoutingModule } from './myprofile-routing.module';
import { MyprofileComponent } from '../myprofile/myprofile.component';
import { SharedThemeModule } from '@app/shared-theme/shared-theme.module';
import { DaywakaThemeModule } from '@app/daywaka/daywaka-theme/daywaka-theme.module';


@NgModule({
  declarations: [MyprofileComponent],
  imports: [
    CommonModule,
    MyprofileRoutingModule,
    DaywakaThemeModule,
    SharedThemeModule
  ]
})
export class MyprofileModule { }
