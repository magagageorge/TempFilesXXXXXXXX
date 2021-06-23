import { Component, OnInit } from '@angular/core';
import { DwViewerService } from '@app/daywaka/services/dw-viewer.service';

@Component({
  selector: 'app-dw-business-content-router',
  templateUrl: './dw-business-content-router.component.html',
  styleUrls: ['./dw-business-content-router.component.scss']
})
export class DwBusinessContentRouterComponent implements OnInit {

  constructor(public dwViewerService:DwViewerService) { }

  ngOnInit(): void {
  }

}
