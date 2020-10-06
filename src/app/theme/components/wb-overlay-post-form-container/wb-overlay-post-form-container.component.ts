import { Component, OnInit } from '@angular/core';
import { PostingService } from '@app/services/posting.service';

@Component({
  selector: 'app-wb-overlay-post-form-container',
  templateUrl: './wb-overlay-post-form-container.component.html',
  styleUrls: ['./wb-overlay-post-form-container.component.scss']
})
export class WbOverlayPostFormContainerComponent implements OnInit {

  constructor(public postingService: PostingService) { }

  ngOnInit() {
  }

}
