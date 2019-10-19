import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsLeftWidgetComponent } from './settings-left-widget/settings-left-widget.component';
import { ThemeModule } from '@app/theme/theme.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule
  ],
  declarations: [SettingsLeftWidgetComponent],
  exports: [SettingsLeftWidgetComponent]
})
export class WidgetsModule { }
