import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule, routedComponents } from './ads-routing.module';
import { AdsThemeModule } from '../ads-theme/ads-theme.module';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '@app/theme/theme.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AdsThemeModule,
    RouterModule,
    AdsRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [...routedComponents],
})
export class AdsModule { }
