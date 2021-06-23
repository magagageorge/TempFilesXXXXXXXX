import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, StartRoutingModule } from './start-routing.module';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewBusinessPageComponent } from './new-business-page/new-business-page.component';
import { DaywakaThemeModule } from '@app/daywaka/daywaka-theme/daywaka-theme.module';


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
