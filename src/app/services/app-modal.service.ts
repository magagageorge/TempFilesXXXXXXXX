import { Injectable } from '@angular/core';
import { FeedService } from './feed.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentsService } from './comments.service';
import { PostingService } from './posting.service';
import { Comment } from '@app/models/feed/comment';
import { CommentReply } from '@app/models/feed/comment-reply';
import { ConnectionsService } from './connections.service';

export interface DeletePostModal {
  visible: boolean;
  postId: number;
}
export interface DeleteCommentModal {
  visible: boolean;
  comment: Comment;
  reply: CommentReply;
}

export interface DeleteConnectionModal {
  visible: boolean;
  profile_id:number
}

@Injectable({
  providedIn: 'root'
})
export class AppModalService {

  feedService: FeedService;
  commentsService: CommentsService;
  modalRef: any;
  _modalService: NgbModal;
  deletePostModal: DeletePostModal = { visible: false, postId: null };
  deleteCommentModal: DeleteCommentModal = { visible: false, comment: null, reply: null };
  removeConnectionModel: DeleteConnectionModal = { visible: false, profile_id: null };
  constructor(public postingService: PostingService,public connectionServices:ConnectionsService, feedService: FeedService, commentsService: CommentsService, _modalService: NgbModal) {
    this.feedService = feedService;
    this.commentsService = commentsService;
    this._modalService = _modalService;
  }

  showDeletePost(v: boolean, Id: number) {
    this.deletePostModal = { visible: v, postId: Id };
  }

  showDeleteComment(v: boolean, com: Comment, commentReply: CommentReply) {
    this.deleteCommentModal = { visible: v, comment: com, reply: commentReply };
  }

  showRemoveConnection(status: boolean, profile_id: number) {
    this.removeConnectionModel.visible = status;
    this.removeConnectionModel.profile_id = profile_id;
  }


}
