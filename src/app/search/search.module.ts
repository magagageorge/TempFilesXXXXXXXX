import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule,routedComponents } from './search-routing.module';
import { ThemeModule } from '@app/theme/theme.module';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from './widgets/widgets.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    ThemeModule,
    RouterModule,
    WidgetsModule,
    InfiniteScrollModule
  ],
  declarations: [...routedComponents]
})
export class SearchModule { }
