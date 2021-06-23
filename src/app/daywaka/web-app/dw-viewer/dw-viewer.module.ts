import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwViewerRoutingModule, routedComponents } from './dw-viewer-routing.module';
import { DwBusinessModule } from './business/business.module';


@NgModule({
  declarations: [...routedComponents],
  imports: [
    CommonModule,
    DwViewerRoutingModule,
    DwBusinessModule
  ]
})
export class DwViewerModule { }
