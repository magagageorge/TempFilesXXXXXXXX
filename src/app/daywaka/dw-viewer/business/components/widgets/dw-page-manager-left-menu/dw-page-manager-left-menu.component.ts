import { Component, OnInit } from '@angular/core';
import { DwPageViewerService } from '../../../services/dw-page-viewer.service';

@Component({
  selector: 'app-dw-page-manager-left-menu',
  templateUrl: './dw-page-manager-left-menu.component.html',
  styleUrls: ['./dw-page-manager-left-menu.component.scss']
})
export class DwPageManagerLeftMenuComponent implements OnInit {

  child: boolean = false;
  dropDowns: any = { settings: { active: false, general: { active: false }, notifications: { active: false } } };

  constructor(public pageViewerService:DwPageViewerService) { }

  ngOnInit(): void {
  }

}
