import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  tab_name:string="pages";
  title:string="Pages Results";
  parent_route:string="search";   
  constructor() { }

  ngOnInit() {
  }

}
