import { Component, Input, OnInit } from '@angular/core';
import { DwProfileViewerService } from '@app/daywaka/services/dw-profile-viewer.service';

@Component({
  selector: 'app-dw-employer-profile-viewer-modal',
  templateUrl: './dw-employer-profile-viewer-modal.component.html',
  styleUrls: ['./dw-employer-profile-viewer-modal.component.scss']
})
export class DwEmployerProfileViewerModalComponent implements OnInit {
  
  @Input() back_route:string;
  @Input() display_text:string;

  constructor(public dwProfileViewerService:DwProfileViewerService) { }

  ngOnInit(): void {
  }

}
