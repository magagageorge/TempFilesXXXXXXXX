import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Link } from '../../../wf-linkify';
import { LinkPreview } from '../../interfaces/linkpreview.interface';
import { WfLinkPreviewService } from '../../services/wf-link-preview.service';

@Component({
  selector: 'app-wf-mention-preview',
  templateUrl: './wf-mention-preview.component.html',
  styleUrls: ['./wf-mention-preview.component.scss']
})
export class WfMentionPreviewComponent implements OnInit {

  @Input() link: Link;
  @Input() linkPreview: LinkPreview;

  // forwarded from the container
  @Input() color = 'primary'; // accent | warn
  @Input() showLoadingsProgress = true;

  loaded: boolean;
  hasError: boolean;
  private _subscription: Subscription;

  constructor(public linkPreviewService: WfLinkPreviewService) {
  }

  ngOnInit(): void {
    var _this=this;
    if (this.link && this.link.type=='mention' && !this.linkPreview ) {
      // this.loaded = false;
      this._subscription = this.linkPreviewService
        .fetchLink(this.link.href)
        .subscribe(value => {
          if(value.title!=''){
            _this.linkPreview = value;
            _this.linkPreviewService.link_Preview=value;
          }else{
            _this.clearLinksPreview();
          }
        },
          error => this.hasError = true,
          () => this.loaded = true);
    }
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  clearLinksPreview(){
    this.linkPreviewService.links=[];
    this.linkPreviewService.link_Preview=null;
  }
}
