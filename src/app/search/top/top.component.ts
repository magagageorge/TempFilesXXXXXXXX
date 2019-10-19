import { Component, OnInit } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  title:string="Top Results";
  parent_route:string="search";  
  tab_name:string="top";
  searchService:SearchService;
  constructor(searchService:SearchService) {
    this.searchService=searchService;
   }

  ngOnInit() {
  }

}
