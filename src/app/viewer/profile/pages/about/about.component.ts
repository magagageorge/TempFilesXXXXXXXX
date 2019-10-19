import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  menu_tab_name:string='about';
  urlviwerService:UrlViewerService;
  constructor(urlviwerService:UrlViewerService) { 
    this.urlviwerService=urlviwerService;
  }


  ngOnInit() {
  }

}
