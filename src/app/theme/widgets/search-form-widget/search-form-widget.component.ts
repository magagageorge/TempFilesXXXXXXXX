import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule,NgForm,NgModel} from '@angular/forms';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-search-form-widget',
  templateUrl: './search-form-widget.component.html',
  styleUrls: ['./search-form-widget.component.scss']
})
export class SearchFormWidgetComponent implements OnInit {

  searchService:SearchService;
  search_on_focus:boolean=false;
  results_hovered:boolean=false;
  constructor(searchService:SearchService) {
    this.searchService=searchService;
   }


  ngOnInit() {
  }

  Onfocus(){
    this.search_on_focus=true;
  }

  Outfocus(){
    this.search_on_focus=false;
  }

  resultsHovered(event:MouseEvent){
    this.results_hovered=true;
  }
  resultsUnHovered(event:MouseEvent){
    this.results_hovered=false;
  }

}
