import { Component, OnInit } from '@angular/core';
import { LoadSubmitProgressService } from '@app/services/load-submit-progress.service';

@Component({
  selector: 'app-overlay-load-submit-process-data-widget',
  templateUrl: './overlay-load-submit-process-data-widget.component.html',
  styleUrls: ['./overlay-load-submit-process-data-widget.component.scss']
})
export class OverlayLoadSubmitProcessDataWidgetComponent implements OnInit {

  processService: LoadSubmitProgressService;
  constructor(processService: LoadSubmitProgressService) {
    this.processService = processService;
  }

  ngOnInit() {
  }

}
