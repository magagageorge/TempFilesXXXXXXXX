import { Component, OnInit } from '@angular/core';
import { PostingService } from '@app/services/posting.service';

@Component({
  selector: 'app-mobile-overlay-post-form',
  templateUrl: './mobile-overlay-post-form.component.html',
  styleUrls: ['./mobile-overlay-post-form.component.scss']
})
export class MobileOverlayPostFormComponent implements OnInit {

  postingService:PostingService;
  constructor(postingService:PostingService) { 
    this.postingService=postingService;
  }

  ngOnInit() {
  }

}
