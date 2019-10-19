import { Component, OnInit } from '@angular/core';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  title:string="Posts Results";
  parent_route:string="search";   
  tab_name:string="posts";
  searchService:SearchService;
  constructor(searchService:SearchService) {
    this.searchService=searchService;
   }

  ngOnInit() {
  }

}
