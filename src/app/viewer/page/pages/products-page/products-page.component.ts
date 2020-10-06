import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  menu_tab_name:string='products';
  constructor(public urlviewerService:UrlViewerService,private title: Title, private meta: Meta) { 
  }

  ngOnInit() {
    this.title.setTitle(this.urlviewerService.PPVIEWER.page.name+' - Products | Woorbi');
  }

}
