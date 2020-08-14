import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule, routedComponents } from './ads-routing.module';
import { AdsThemeModule } from '../ads-theme/ads-theme.module';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '@app/theme/theme.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerAdapterModule } from '@app/libs/date/datepicker-adpater.module';
import { ValidateDateDirective } from '@app/libs/date/validateDate.directive';


@NgModule({
  imports: [
    CommonModule,
    AdsThemeModule,
    RouterModule,
    AdsRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdDatepickerAdapterModule
  ],
  declarations: [...routedComponents,ValidateDateDirective],
})
export class AdsModule { }
