import { Component, OnInit } from '@angular/core';
import { RouteStateService } from '@app/services/route-state.service';

@Component({
  selector: 'app-wb-content-not-found-page',
  templateUrl: './wb-content-not-found-page.component.html',
  styleUrls: ['./wb-content-not-found-page.component.scss']
})
export class WbContentNotFoundPageComponent implements OnInit {

  previousUrl: string = '';
  constructor(private routeStateService: RouteStateService) { }

  ngOnInit() {
    // Or subscribe to the previous url observable here
    this.routeStateService.previousUrl$
      .subscribe((previousUrl: string) => {
        this.previousUrl = previousUrl
      });
  }


  goBack() {
    alert(localStorage.getItem('wb_previousUrl'));
  }

  get reffererUrl() {
    var url = localStorage.getItem('wb_previousUrl');
    if (url != null && url != undefined && url != '') {
      return url;
    }
    return false;
  }

}
