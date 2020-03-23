import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  menu_tab_name:string='about';
  urlviwerService:UrlViewerService;
  constructor(urlviwerService:UrlViewerService,private title: Title, private meta: Meta) { 
    this.urlviwerService=urlviwerService;
  }

  ngOnInit() {
    this.title.setTitle(this.urlviwerService.PPVIEWER.profile.name+' - About | Woorbi');
  }

}
