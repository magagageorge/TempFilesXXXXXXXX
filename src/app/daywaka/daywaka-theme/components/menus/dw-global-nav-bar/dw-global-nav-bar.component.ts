import { Component, OnInit,Input } from '@angular/core';
import { NavigationService } from '@app/services/navigation.service';

@Component({
  selector: 'app-dw-global-nav-bar',
  templateUrl: './dw-global-nav-bar.component.html',
  styleUrls: ['./dw-global-nav-bar.component.scss']
})
export class DwGlobalNavBarComponent implements OnInit {

  @Input() back_route:string;
  @Input() display_text:string;
  navigationService:NavigationService;
  constructor(navigationService:NavigationService) {
    this.navigationService=navigationService;
  }

  ngOnInit() {
  }
}
