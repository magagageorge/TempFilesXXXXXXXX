import { Component, Input, OnInit } from '@angular/core';
import { PageViewer } from '@app/models/page-viewer';
import { PageModel } from '@app/models/page/page.model';

@Component({
  selector: 'app-create-page-post-buttons-widgets',
  templateUrl: './create-page-post-buttons-widgets.component.html',
  styleUrls: ['./create-page-post-buttons-widgets.component.scss']
})
export class CreatePagePostButtonsWidgetsComponent implements OnInit {

  @Input() page:PageViewer;
  constructor() { }

  ngOnInit() {
  }

}
