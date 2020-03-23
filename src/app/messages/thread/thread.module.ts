import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreadRoutingModule,routedComponents } from './thread-routing.module';
import { ThemeModule } from '@app/theme/theme.module';
import { MessagesModule } from '../messages.module';


@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    ThreadRoutingModule,
    ThemeModule,
    MessagesModule
  ]
})
export class ThreadModule { }
