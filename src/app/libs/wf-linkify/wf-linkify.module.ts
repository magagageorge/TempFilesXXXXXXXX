import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import * as linkify from 'linkifyjs';
// @ts-ignore
import hashtag from 'linkifyjs/plugins/hashtag';
// @ts-ignore
import mention from 'linkifyjs/plugins/mention';
import { WfLinkifyService } from './services/wf-linkify.service';
import { WfLinkifyPipe } from './pipes/wf-linkify.pipe';

// Export module's public API
export { Link } from './interfaces/wf-linkify.interface';
export { LinkType } from './enum/linktype.enum';
export { WfLinkifyPipe } from './pipes/wf-linkify.pipe';
export { WfLinkifyService } from './services/wf-linkify.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WfLinkifyPipe],
  exports: [WfLinkifyPipe]
})
export class WfLinkifyModule {


  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WfLinkifyModule,
      providers: [WfLinkifyService]
    };
  }

  constructor() {
    hashtag(linkify);
    mention(linkify);
  }

}
