import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dw-mobile-app-global-navbar',
  templateUrl: './dw-mobile-app-global-navbar.component.html',
  styleUrls: ['./dw-mobile-app-global-navbar.component.scss']
})
export class DwMobileAppGlobalNavbarComponent implements OnInit {

  @Input() back_route: string;
  @Input() display_text: string;
  @Output() navigatingBack = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

   onNavigateBack(){
     this.navigatingBack.emit(true);
   }

}
