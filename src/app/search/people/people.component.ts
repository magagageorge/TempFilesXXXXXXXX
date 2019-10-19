import { Component, OnInit } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  title:string="People Results";
  parent_route:string="search";   
  tab_name:string="people";
  searchService:SearchService;
  constructor(searchService:SearchService) {
    this.searchService=searchService;
   }

  ngOnInit() {
  }

}
