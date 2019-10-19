import { Component, OnInit } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  tab_name:string="top";
  searchService:SearchService;
  constructor(searchService:SearchService) {
    this.searchService=searchService;
   }

  ngOnInit() {
  }

}
