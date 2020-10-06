import { Component, OnInit } from '@angular/core';
import { PageViewerService } from '@app/viewer/page/services/page-viewer.service';

@Component({
  selector: 'app-wb-page-manage',
  templateUrl: './wb-page-manage.component.html',
  styleUrls: ['./wb-page-manage.component.scss']
})
export class WbPageManageComponent implements OnInit {

  constructor(public pageViewerService: PageViewerService) { }

  ngOnInit() {
  }

}
