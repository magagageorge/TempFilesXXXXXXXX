import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {

  menu_tab_name:string='services';
  constructor(public urlviewerService:UrlViewerService,private title: Title, private meta: Meta) { 
  }

  ngOnInit() {
    this.title.setTitle(this.urlviewerService.PPVIEWER.page.name+' - Services | Woorbi');
  }

}
