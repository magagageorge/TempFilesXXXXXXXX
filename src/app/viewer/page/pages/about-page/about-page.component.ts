import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  menu_tab_name:string='about';
  constructor(public urlviewerService:UrlViewerService,private title: Title, private meta: Meta) { 
  }

  ngOnInit() {
    this.title.setTitle(this.urlviewerService.PPVIEWER.page.name+' - About | Woorbi');
  }

}
