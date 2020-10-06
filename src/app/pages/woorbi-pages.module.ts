import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routed_components, WoorbiPagesRoutingModule } from './woorbi-pages-routing.module';
import { ThemeModule } from '@app/theme/theme.module';
import { WpPagesMainContentContainerComponent } from './layouts/wp-pages-main-content-container/wp-pages-main-content-container.component';
import { WpPagesLeftMenuWidgetComponent } from './widgets/wp-pages-left-menu-widget/wp-pages-left-menu-widget.component';
import { PageListCardWidgetComponent } from './widgets/page-list-card-widget/page-list-card-widget.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [...routed_components, WpPagesMainContentContainerComponent, WpPagesLeftMenuWidgetComponent, PageListCardWidgetComponent],
  imports: [
    CommonModule,
    WoorbiPagesRoutingModule,
    ThemeModule,
    RouterModule
  ],
})
export class WoorbiPagesModule { }
