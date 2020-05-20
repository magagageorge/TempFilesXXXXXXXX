import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ads-nav-tabs-widget',
  templateUrl: './ads-nav-tabs-widget.component.html',
  styleUrls: ['./ads-nav-tabs-widget.component.scss']
})
export class AdsNavTabsWidgetComponent implements OnInit {

  @Input() tab:string;
  constructor() { }

  ngOnInit() {
  }

}
