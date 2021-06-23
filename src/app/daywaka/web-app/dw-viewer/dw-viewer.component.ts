import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DwViewerService } from '@app/daywaka/services/dw-viewer.service';

@Component({
  selector: 'app-dw-viewer',
  templateUrl: './dw-viewer.component.html',
  styleUrls: ['./dw-viewer.component.scss']
})
export class DwViewerComponent implements OnInit {

  _url: string = "";
  constructor(public dwViewerService: DwViewerService, public router: Router, public route: ActivatedRoute) {
    this.router = router;
    this.route = route;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.setViewer(params.dwurl);
      this.dwViewerService.updateUrlParams(params);
    });
  }

  setViewer(url: string) {
    this.dwViewerService.setViewer(url);
  }
}
