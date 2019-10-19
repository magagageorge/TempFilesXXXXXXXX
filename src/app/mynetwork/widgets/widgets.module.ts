import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkLeftWidgetComponent } from './network-left-widget/network-left-widget.component';
import { RouterModule } from '@angular/router';
import { ContactWidgetComponent } from './contact-widget/contact-widget.component';
import { NetworkNavWidgetComponent } from './network-nav-widget/network-nav-widget.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NetworkLeftWidgetComponent, ContactWidgetComponent, NetworkNavWidgetComponent],
  exports:[NetworkLeftWidgetComponent, ContactWidgetComponent, NetworkNavWidgetComponent]
})
export class WidgetsModule { }
