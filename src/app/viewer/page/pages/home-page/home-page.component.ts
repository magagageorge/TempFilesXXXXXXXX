import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  menu_tab_name:string='home';
  constructor(public urlviewerService:UrlViewerService,private title: Title, private meta: Meta) { 
  }

  ngOnInit() {
    this.title.setTitle(this.urlviewerService.PPVIEWER.page.name+' - Home | Woorbi');
  }

}
