import { Component, Input, OnInit } from '@angular/core';
import { PageSummary } from '@app/models/page/page.model';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss']
})
export class PageCardComponent implements OnInit {

  @Input() page: PageSummary;
  constructor() { }

  ngOnInit() {
  }

}
