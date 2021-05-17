import { Component, OnInit } from '@angular/core';
import { DwProfileService } from '@app/daywaka/services/dw-profile.service';

@Component({
  selector: 'app-dw-edit-profile-overlay-container-modal',
  templateUrl: './dw-edit-profile-overlay-container-modal.component.html',
  styleUrls: ['./dw-edit-profile-overlay-container-modal.component.scss']
})
export class DwEditProfileOverlayContainerModalComponent implements OnInit {

  constructor(public dwProfileService:DwProfileService) { }

  ngOnInit(): void {
  }

}
