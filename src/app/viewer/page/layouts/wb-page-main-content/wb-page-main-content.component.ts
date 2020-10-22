import { Component, OnInit } from '@angular/core';
import { AppModalService } from '@app/services/app-modal.service';

@Component({
  selector: 'app-wb-page-main-content',
  templateUrl: './wb-page-main-content.component.html',
  styleUrls: ['./wb-page-main-content.component.scss']
})
export class WbPageMainContentComponent implements OnInit {

  constructor(public appModalService:AppModalService) { }

  ngOnInit() {
  }

}
