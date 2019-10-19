import {Component, Input} from '@angular/core';
import {Link} from '../../../wf-linkify';
import {WfLinkPreviewService} from '../../services/wf-link-preview.service';

@Component({
  selector: 'app-wf-link-preview-container',
  exportAs: 'WfLinkPreviewContainer',
  templateUrl: './wf-link-preview-container.component.html',
  styleUrls: ['./wf-link-preview-container.component.scss']
})
export class WfLinkPreviewContainerComponent {

  // to forward
  @Input() color = 'primary'; // accent | warn
  @Input() multiple: boolean;
  @Input() showLoadingsProgress = true;

  constructor(public linkPreviewService: WfLinkPreviewService) {
  }

  trackLinks(index: number, link: Link) {
    return link ? link.href : undefined;
  }

}
