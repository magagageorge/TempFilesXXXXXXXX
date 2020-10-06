import { Component, Input, OnInit } from '@angular/core';
import { PageSummary } from '@app/models/page/page.model';

@Component({
  selector: 'app-page-actions-buttons-widget',
  templateUrl: './page-actions-buttons-widget.component.html',
  styleUrls: ['./page-actions-buttons-widget.component.scss']
})
export class PageActionsButtonsWidgetComponent implements OnInit {

  @Input() page:PageSummary;
  constructor() { }

  ngOnInit() {
  }

}
