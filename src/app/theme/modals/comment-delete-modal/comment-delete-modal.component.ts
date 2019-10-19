import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentsService } from '@app/services/comments.service';
import { Comment } from '@app/models/feed/comment';

@Component({
  selector: 'app-comment-delete-modal',
  templateUrl: './comment-delete-modal.component.html',
  styleUrls: ['./comment-delete-modal.component.scss']
})
export class CommentDeleteModalComponent implements OnInit {

  @Input() comment:Comment;
  constructor(public modal: NgbActiveModal,public commentService:CommentsService) {}

  ngOnInit() {
  }

}
