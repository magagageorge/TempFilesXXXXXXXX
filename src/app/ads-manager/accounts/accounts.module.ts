import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule, routedComponents } from './accounts-routing.module';
import { ThemeModule } from '@app/theme/theme.module';
import { AdsThemeModule } from '../ads-theme/ads-theme.module';


@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ThemeModule,
    AdsThemeModule
  ]
})
export class AccountsModule { }
