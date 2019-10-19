import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  menu_tab_name:string='photos';
  urlviwerService:UrlViewerService;
  constructor(urlviwerService:UrlViewerService) { 
    this.urlviwerService=urlviwerService;
  }


  ngOnInit() {
  }

}
