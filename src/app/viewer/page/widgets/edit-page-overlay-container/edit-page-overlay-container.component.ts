import { Component, OnInit } from '@angular/core';
import { EditPageService } from '@app/services/edit-page.service';

@Component({
  selector: 'app-edit-page-overlay-container',
  templateUrl: './edit-page-overlay-container.component.html',
  styleUrls: ['./edit-page-overlay-container.component.scss']
})
export class EditPageOverlayContainerComponent implements OnInit {

  constructor(public editPageService:EditPageService) { }

  ngOnInit() {}

}
