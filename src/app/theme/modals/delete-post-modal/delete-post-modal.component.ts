import { Component, OnInit } from '@angular/core';
import { AppModalService } from '@app/services/app-modal.service';

@Component({
  selector: 'app-delete-post-modal',
  templateUrl: './delete-post-modal.component.html',
  styleUrls: ['./delete-post-modal.component.scss']
})
export class DeletePostModalComponent implements OnInit {

  constructor(public appModalService: AppModalService) { }

  ngOnInit() {
  }

  deletePost() {
    if (this.appModalService.deletePostModal.postId != null) {
      this.appModalService.postingService.deletePost(this.appModalService.deletePostModal.postId);
      this.appModalService.showDeletePost(false, null);
    }
  }

}
