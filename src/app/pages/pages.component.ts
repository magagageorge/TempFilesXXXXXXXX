import { Component, OnInit } from '@angular/core';
import { PageService } from '@app/services/page.service';

@Component({
  selector: 'app-woorbi-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class WoorbiPagesComponent implements OnInit {

  parent_route:string='/feed';
  route_name:string = 'Pages';
  constructor(public pageService:PageService) { }

  ngOnInit() {
  }

}
