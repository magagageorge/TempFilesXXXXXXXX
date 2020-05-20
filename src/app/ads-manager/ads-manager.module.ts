import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsManagerRoutingModule, routedComponents } from './ads-manager-routing.module';
import { ThemeModule } from '@app/theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AdsThemeModule } from './ads-theme/ads-theme.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdsManagerRoutingModule,
    ThemeModule,
    AdsThemeModule
  ],
  declarations: [...routedComponents],
})
export class AdsManagerModule { }
