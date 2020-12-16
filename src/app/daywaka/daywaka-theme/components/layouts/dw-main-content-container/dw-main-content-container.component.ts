import { Component, OnInit } from '@angular/core';
import { PageService } from '@app/services/page.service';

@Component({
  selector: 'app-dw-main-content-container',
  templateUrl: './dw-main-content-container.component.html',
  styleUrls: ['./dw-main-content-container.component.scss']
})
export class DwMainContentContainerComponent implements OnInit {

  constructor(public pageService:PageService) { }

  ngOnInit(): void {
  }

}
