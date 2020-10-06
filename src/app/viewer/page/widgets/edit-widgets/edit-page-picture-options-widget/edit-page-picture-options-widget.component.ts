import { Component, OnInit } from '@angular/core';
import { EditPageService } from '@app/services/edit-page.service';
import { PageService } from '@app/services/page.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-edit-page-picture-options-widget',
  templateUrl: './edit-page-picture-options-widget.component.html',
  styleUrls: ['./edit-page-picture-options-widget.component.scss']
})
export class EditPagePictureOptionsWidgetComponent implements OnInit {

  constructor(public editPageService:EditPageService,public pageService:PageService,public urlViewerService:UrlViewerService) { 
  }

  ngOnInit() {
  }

}
