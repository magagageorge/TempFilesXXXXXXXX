import { Component, OnInit } from '@angular/core';
import { AppModalService } from '@app/services/app-modal.service';
import { EditPageService } from '@app/services/edit-page.service';

@Component({
  selector: 'app-wb-page-manager-content-container',
  templateUrl: './wb-page-manager-content-container.component.html',
  styleUrls: ['./wb-page-manager-content-container.component.scss']
})
export class WbPageManagerContentContainerComponent implements OnInit {

  constructor(public editPageService: EditPageService, public appModalService: AppModalService) { }

  ngOnInit() {
  }

}
