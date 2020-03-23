import { Component, OnInit } from '@angular/core';
import { PostingService } from '@app/services/posting.service';

@Component({
  selector: 'app-share-post-form-container-widget',
  templateUrl: './share-post-form-container-widget.component.html',
  styleUrls: ['./share-post-form-container-widget.component.scss']
})
export class SharePostFormContainerWidgetComponent implements OnInit {

  postingService:PostingService;
  constructor(postingService:PostingService) {
    this.postingService=postingService;
   }

  ngOnInit() {
  }

}
