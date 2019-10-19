import { Component, OnInit,Input } from '@angular/core';
import { FeedLink } from '@app/models/feed-link';

@Component({
  selector: 'app-link-preview-widget',
  templateUrl: './link-preview-widget.component.html',
  styleUrls: ['./link-preview-widget.component.scss']
})
export class LinkPreviewWidgetComponent implements OnInit {
 @Input() link:FeedLink;
  constructor() { }

  ngOnInit() {
  }

}
