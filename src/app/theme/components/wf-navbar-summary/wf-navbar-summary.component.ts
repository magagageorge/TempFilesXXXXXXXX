import { Component, OnInit,Input } from '@angular/core';
import { NavigationService } from '@app/services/navigation.service';

@Component({
  selector: 'app-wf-navbar-summary',
  templateUrl: './wf-navbar-summary.component.html',
  styleUrls: ['./wf-navbar-summary.component.scss']
})
export class WfNavbarSummaryComponent implements OnInit {

  @Input() back_route:string;
  @Input() display_text:string;
  navigationService:NavigationService;
  constructor(navigationService:NavigationService) {
    this.navigationService=navigationService;
  }

  ngOnInit() {
  }

}
