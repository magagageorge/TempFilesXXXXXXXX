import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Comment } from '@app/models/feed/comment';
import { AppModalService } from '@app/services/app-modal.service';

@Component({
  selector: 'app-comment-delete-modal',
  templateUrl: './comment-delete-modal.component.html',
  styleUrls: ['./comment-delete-modal.component.scss']
})
export class CommentDeleteModalComponent implements OnInit {

  @Input() comment:Comment;
  constructor(public modal: NgbActiveModal,public appModalService:AppModalService) {}

  ngOnInit() {
  }

}
