import { Component, OnInit } from '@angular/core';
import { HoverCardService } from '../../services/hover-card.service';

@Component({
  selector: 'app-hover-card-container',
  templateUrl: './hover-card-container.component.html',
  styleUrls: ['./hover-card-container.component.scss']
})
export class HoverCardContainerComponent implements OnInit {

  hovercardService:HoverCardService;
  constructor(hovercardService:HoverCardService) { 
    this.hovercardService=hovercardService;
  }

  ngOnInit() {
  }

}
