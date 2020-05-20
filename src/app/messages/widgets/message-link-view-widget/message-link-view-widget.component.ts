import { Component, OnInit, Input } from '@angular/core';
import { Link } from '@app/libs/wf-linkify';

@Component({
  selector: 'app-message-link-view-widget',
  templateUrl: './message-link-view-widget.component.html',
  styleUrls: ['./message-link-view-widget.component.scss']
})
export class MessageLinkViewWidgetComponent implements OnInit {

  @Input() link:Link;
  constructor() { }

  ngOnInit() {
  }

}
