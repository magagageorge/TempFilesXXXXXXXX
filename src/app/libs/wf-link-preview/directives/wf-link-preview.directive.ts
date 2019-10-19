import { Directive, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Link, WfLinkifyService } from '../../wf-linkify';
import { WfLinkPreviewService } from '../services/wf-link-preview.service';

@Directive({
  selector: '[appWfLinkPreview]',
  exportAs: '[appWfLinkPreview]',
})
export class WfLinkPreviewDirective implements OnInit {
  constructor(public linkifyService: WfLinkifyService,
    public linkPreviewService: WfLinkPreviewService) {
  }

  ngOnInit(): void {
    this._init();
  }

  private _init() {
    fromEvent(document, 'input')
      .pipe(
        debounceTime(2000),
        distinctUntilChanged(),
        map(event => {
          const data = event.target['innerHTML'];
          const links: Link[] = this.linkifyService.find(data);
          //console.log('data: ', data);
          //console.log('links: ', links);
          //event.target['innerHTML'] = this.linkifyService.linkify(data);
          return links;
        })).subscribe((links) => {
          this.linkPreviewService.onLinkFound.emit(links);
        });
  }


}
