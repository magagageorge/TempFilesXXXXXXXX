import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dw-jobs-content-container',
  templateUrl: './dw-jobs-content-container.component.html',
  styleUrls: ['./dw-jobs-content-container.component.scss']
})
export class DwJobsContentContainerComponent implements OnInit {

  @Input() TOPNAV_TITLE: string;
  constructor() { }

  ngOnInit(): void {
  }

}
