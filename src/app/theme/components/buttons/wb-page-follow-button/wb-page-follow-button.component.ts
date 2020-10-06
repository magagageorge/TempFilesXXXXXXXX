import { Component, Input, OnInit } from '@angular/core';
import { FollowingService } from '@app/services/following.service';

@Component({
  selector: 'app-wb-page-follow-button',
  templateUrl: './wb-page-follow-button.component.html',
  styleUrls: ['./wb-page-follow-button.component.scss']
})
export class WbPageFollowButtonComponent implements OnInit {

  @Input() page_id:number;
  @Input() i_follow:boolean;
  constructor(public folliwingService:FollowingService) { }

  ngOnInit() {
  }

  following(){
    this.folliwingService.FollowPage(this.page_id,this.i_follow);
  }

}
