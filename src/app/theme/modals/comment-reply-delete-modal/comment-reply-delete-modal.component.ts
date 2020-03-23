import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CommentReply } from '@app/models/feed/comment-reply';
import { Comment } from '@app/models/feed/comment';
import { AppModalService } from '@app/services/app-modal.service';

@Component({
  selector: 'app-comment-reply-delete-modal',
  templateUrl: './comment-reply-delete-modal.component.html',
  styleUrls: ['./comment-reply-delete-modal.component.scss']
})
export class CommentReplyDeleteModalComponent implements OnInit {

  @Input() commentReply:CommentReply;
  @Input() comment:Comment;
  constructor(public modal: NgbActiveModal,public appModalService:AppModalService) {}

  ngOnInit() {
  }

}
