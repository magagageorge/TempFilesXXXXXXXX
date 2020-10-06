import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit {

  menu_tab_name:string='photos';
  constructor(public urlviewerService:UrlViewerService,private title: Title, private meta: Meta) { 
  }

  ngOnInit() {
    this.title.setTitle(this.urlviewerService.PPVIEWER.page.name+' - Photos | Woorbi');
  }

}
