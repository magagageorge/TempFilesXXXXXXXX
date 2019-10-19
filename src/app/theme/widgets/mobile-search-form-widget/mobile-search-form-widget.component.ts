import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule,NgForm,NgModel} from '@angular/forms';
import { SearchService } from '@app/services/search.service';

@Component({
  selector: 'app-mobile-search-form-widget',
  templateUrl: './mobile-search-form-widget.component.html',
  styleUrls: ['./mobile-search-form-widget.component.scss']
})
export class MobileSearchFormWidgetComponent implements OnInit {

  searchService:SearchService;
  constructor(searchService:SearchService) {
    this.searchService=searchService;
   }

  ngOnInit() {
  }

}
