import { Component, OnInit,Input } from '@angular/core';
import { SearchService } from '@app/services/search.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-nav-widget',
  templateUrl: './search-nav-widget.component.html',
  styleUrls: ['./search-nav-widget.component.scss']
})
export class SearchNavWidgetComponent implements OnInit {
  
  @Input() tab:string;
  route:ActivatedRoute;
  searchService:SearchService;
  query_str:string;
  constructor(searchService:SearchService,router: Router,route: ActivatedRoute) { 
    this.searchService=searchService;
    this.route=route;
  }

  ngOnInit() {
    this.query_str = this.route.snapshot.paramMap.get('query');
       if(!this.searchService.search_query.length && this.query_str.trim()!=''){
        this.searchService.search_query=this.query_str.trim();
        if(!this.searchService.PEOPLE.length){
          this.searchService.loadSearch();
        }
       }
  }

}
