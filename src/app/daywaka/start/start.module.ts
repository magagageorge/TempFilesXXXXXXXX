import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, StartRoutingModule } from './start-routing.module';
import { DaywakaThemeModule } from '../daywaka-theme/daywaka-theme.module';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBusinessPageComponent } from './new-business-page/new-business-page.component';


@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    StartRoutingModule,
    DaywakaThemeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StartModule { }
