import { Component, OnInit } from '@angular/core';
import { EditPageService } from '@app/services/edit-page.service';
import { PageService } from '@app/services/page.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-edit-page-cover-options-widget',
  templateUrl: './edit-page-cover-options-widget.component.html',
  styleUrls: ['./edit-page-cover-options-widget.component.scss']
})
export class EditPageCoverOptionsWidgetComponent implements OnInit {

  constructor(public editPageService:EditPageService,public pageService:PageService,public urlViewerService:UrlViewerService) { 
  }

  ngOnInit() {
  }

  SelectCoverUploadImage(){
    var elem:HTMLElement = document.querySelector('#cover_upload_input_id');
    if(elem!=null){
      elem.click();
    }
  }

}
