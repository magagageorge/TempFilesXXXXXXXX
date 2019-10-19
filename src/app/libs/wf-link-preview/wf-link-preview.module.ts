import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {WfLinkPreviewService} from './services/wf-link-preview.service';
import {HttpClientModule} from '@angular/common/http';
import {WfLinkPreviewDirective} from './directives/wf-link-preview.directive';
import {WfLinkPreviewComponent} from './components/wf-link-preview/wf-link-preview.component';
import {WfLinkPreviewContainerComponent} from './components/wf-link-preview-container/wf-link-preview-container.component';
import {WfLinkifyModule,WfLinkifyService } from '../wf-linkify';
import { WfHashtagPreviewComponent } from './components/wf-hashtag-preview/wf-hashtag-preview.component';
import { WfMentionPreviewComponent } from './components/wf-mention-preview/wf-mention-preview.component';

// Export module's public API
export {LinkPreview} from './interfaces/linkpreview.interface'
export {WfLinkPreviewComponent} from './components/wf-link-preview/wf-link-preview.component';
export {WfLinkPreviewContainerComponent} from './components/wf-link-preview-container/wf-link-preview-container.component';
export {WfLinkPreviewDirective} from './directives/wf-link-preview.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    WfLinkifyModule,
  ],
  exports: [WfLinkPreviewComponent, WfLinkPreviewContainerComponent, WfLinkPreviewDirective],
  declarations: [WfLinkPreviewComponent, WfLinkPreviewContainerComponent, WfLinkPreviewDirective, WfHashtagPreviewComponent, WfMentionPreviewComponent]

})
export class WfLinkPreviewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WfLinkPreviewModule,
      providers: [WfLinkPreviewService, WfLinkifyService]
    };
  }

 }
