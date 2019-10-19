import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule,routedComponents } from './settings-routing.module';
import { ThemeModule } from '@app/theme/theme.module';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from './widgets/widgets.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';
import { AuthModule } from '@app/auth';


@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ThemeModule,
    RouterModule,
    WidgetsModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule
  ],
  declarations: [...routedComponents],
  providers:[SettingsService]
})
export class SettingsModule { }
