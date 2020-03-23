import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Comment } from '@models/feed/comment';
import { CommentReply } from '@models/feed/comment-reply';
import * as cloneDeep from 'lodash/cloneDeep';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { FeedService } from './feed.service';
import { Feed } from '@app/models/feed/feed';
import { ProfileService } from './profile.service';
import { PreviewPicture } from "@app/services/posting.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: Comment[];
  currentComment: Comment;
  service: CrudService;
  crudprovider: CrudProvider;
  feedService: FeedService;
  profileService: ProfileService;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean = false;
  errors: string[];
  messages: string[];
  loading_comments: boolean = false;
  current_feed_comment_input: number = 0;
  comment_model: Comment = new Comment();
  modalRef: any;
  feedContainerWidth: number;

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, feedService: FeedService, profileService: ProfileService, router: Router) {
    this.service = service;
    this.feedService = feedService;
    this.profileService = profileService;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.submitted = false;
    this.provider = this.getConfigValue('forms.create.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comments/';
  }

  loadComments(params?: {}): any {
    this.loading_comments = true;
    var _this = this;
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comments/';
    return this.service.getall(this.provider, params).subscribe(results => {
      if (results.isSuccess()) {
        _this.comments = results.getResultData();
        _this.loading_comments = false;
      }
    });
  }

  /* Load more comments and append to the comment list*/
  viewMoreComments(feed: Feed) {
    if (feed.loading_comments) {
      return;
    }
    var last = new Comment();
    last = cloneDeep(feed.comments[feed.comments.length - 1]);
    this.loading_comments = true;
    var _this = this;
    var params = { last: last.id, object_id: last.object_id };
    feed.loading_comments = true;
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comments/';
    return this.service.getall(this.provider, params).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData();
        _this.feedService.pushComments(last.object_id, data);
        feed.loading_comments = false;
      }
    });
  }

  /* Load more replies and prepend to the existing comment replies*/
  viewMoreCommentReplies(comment: Comment) {
    if (comment.loading_replies) {
      return;
    }
    var last = new CommentReply();
    last = cloneDeep(comment.replies[comment.replies.length - 1]);
    this.loading_comments = true;
    var _this = this;
    var params = { last: last.id, object_id: last.object_id };
    comment.loading_replies = true;
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comment-reply/';
    return this.service.getall(this.provider, params).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData() as CommentReply[];
        comment.replies = data.concat(comment.replies);
        comment.loading_replies = false;
      }
    });

  }

  setToEditComment(comment: Comment) {
    comment.edit_mode = true;
    comment.edit_input_content = comment.message;
    if (comment.pictures.length) {
      var i = 0;
      comment.pictures.forEach(picture => {
        comment.preview_pictures.push({ url: picture.data.url, width: picture.data.width, height: picture.data.height, file: null });
        comment.edited_pictures.push({ url: picture.data.url, width: picture.data.width, height: picture.data.height, file: null });
        i++;
      });
    }
    var elem: HTMLElement = document.querySelector("#comment_edit_box_" + comment.id);
    if (elem != null) {
      elem.focus();
      elem.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  }

  setToEditCommentReply(commentReply: CommentReply) {
    commentReply.edit_mode = true;
    commentReply.edit_input_content = commentReply.message;
    var elem: HTMLElement = document.querySelector("#commentReply_edit_box_" + commentReply.id);
    if (elem != null) {
      elem.focus();
      elem.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  }

  EditCommentReply(comment: Comment) {
    //this.current_feed_comment_input = Number(comment.object_id);
    //this.comment_model = comment;
    //this.comment_model.isNew = false;
  }

  setToCommentPost(feed: Feed) {
    feed.comment_mode = true;
    let elem: HTMLElement = document.querySelector("#feed_comment_box_" + feed.id);
    if (elem != null) {
      elem.focus();
      elem.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  }

  comment(feed: Feed) {
    if (feed.comment_input_box.trim() == '' && feed.comment_image_preview == null) {
      return;
    }
    var _this = this;
    this.errors = this.messages = [];
    const formData: any = new FormData();
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comments/';
    //var comment_model=new Comment();
    //comment_model.message=feed.comment_input_box;
    //comment_model.object_id=feed.id;
    //comment_model.profile = this.profileService.MYPROFILE;

    if (feed.comment_image_preview != null) {
      formData.append("Comment[upload_files][]", feed.comment_image_preview.file, feed.comment_image_preview.file['name']);
    } else {
      /* formData.append("link", JSON.stringify(this.linkPreviewService.link_Preview)); */
    }
    formData.append("isNew", true);
    formData.append("message", feed.comment_input_box.trim());
    formData.append("object_id", feed.id);
    formData.append("profile", this.profileService.MYPROFILE);
    if (feed.sending_comment != true) {
      feed.sending_comment = true;
      feed.loading_new_comment = true;
      this.service.create(this.provider, formData, {}).subscribe(function (result) {
        feed.sending_comment = false;
        if (result.isSuccess()) {
          _this.messages = result.getMessages();
          var data = result.getResultData();
          _this.feedService.pushComment(feed.id, data.data);
          feed.loading_new_comment = false;
          feed.comment_input_box = '';
          feed.comment_image_preview = null
        } else {
          _this.errors = result.getErrors();
        }
      });
    }
  }

  /* Send LIke or Unlike Action to once user click on comment LIke or Unlike button */
  commentLike(comment: Comment, action: string) {
    if (comment.sending_like == true) {
      return;
    }
    this.updateCommentLike(comment, action);
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comment-like/';
    comment.sending_like = true;
    if (action == "like") {
      this.service.create(this.provider, { object_id: comment.id, target_id: comment.profile.user_id }, {}).subscribe(function (result) {
        _this.submitted = false;
        comment.sending_like = false;
        if (result.isSuccess()) {
          var data = result.getResultData();
          if (data != true) {
            _this.updateCommentLike(comment, 'unlike');
          }
        }
        else {
          _this.errors = result.getErrors();
          _this.updateCommentLike(comment, 'unlike');
        }
      });
    } else {
      this.service.delete(this.provider, { id: comment.id }).subscribe(function (result) {
        comment.sending_like = false;
        if (result.isSuccess()) {
          var data = result.getResultData();
          if (data != true) {
            _this.updateCommentLike(comment, 'like');
          }
        } else {
          _this.errors = result.getErrors();
          _this.updateCommentLike(comment, 'like');
        }
      });
    }
  }

  /* Send Editec Comment Information */
  commentEdit(comment: Comment) {
    var _this = this;
    this.errors = this.messages = [];
    if (comment.edit_input_content.trim() == '' && comment.preview_pictures.length < 1) {
      return;
    }
    const formData: any = new FormData();
    var previous_message = comment.message;
    comment.message = comment.edit_input_content;
    comment.isNew = false;
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comments/';
    if (comment.sending != true && comment.edit_mode) {
      if (comment.pictures.length) {
        comment.pictures[0].data = comment.preview_pictures[0];
      }
      comment.sending = true;
      comment.edit_mode = false;
      if (comment.upload_files && comment.upload_files.length) {
        for (var i = 0; i < comment.upload_files.length; i++) {
          formData.append("Comment[upload_files][]", comment.upload_files[i], comment.upload_files[i]['name']);
        }
      } else {
        /* formData.append("link", JSON.stringify(this.linkPreviewService.link_Preview)); */
      }
      if (comment.edited_pictures.length) {
        formData.append("edited_pictures", JSON.stringify(comment.edited_pictures));
      }
      formData.append("isNew", false);
      formData.append("message", comment.edit_input_content.trim());
      this.service.update(this.provider, formData, { 'id': comment.id }).subscribe(function (result) {
        comment.sending = false;
        if (result.isSuccess()) {
          _this.messages = result.getMessages();
          var data = result.getResultData();
          if (data.done == true) {
            var tmpcomment = data.data as Comment;
            comment.pictures = tmpcomment.pictures;
            comment.updated_at = tmpcomment.updated_at;
            comment.preview_pictures = [];
            comment.upload_files = [];
            comment.edited_pictures = [];
            comment.edit_input_content = '';
          } else {
            comment.edit_mode = true;
            if (comment.pictures.length && comment.edited_pictures.length) {
              comment.pictures[0].data = comment.edited_pictures[0];
            }
            comment.message = previous_message;
          }
        }
        else {
          _this.errors = result.getErrors();
          comment.edit_mode = true;
          if (comment.pictures.length && comment.edited_pictures.length) {
            comment.pictures[0].data = comment.edited_pictures[0];
          }
          comment.message = previous_message;
        }
      });
    }
    return comment;
  }

  /* Reset BACK COMMENT TO READ MODE ONCE THE USER CANCEL EDITING COMMENT*/
  CancelcommentEdit(comment: Comment) {
    comment.edit_mode = false;
    comment.edit_input_content = '';
  }

  /* Clear Image in new comment Preview once the user click remove button */
  RemoveCommentPreviewImage(feed: Feed) {
    feed.comment_image_preview = null;
  }

  /* Removed Image from being uploaded once removed in image preview*/
  RemoveCommentEditPreviewImage(comment: Comment, preview: PreviewPicture) {
    comment.preview_pictures = comment.preview_pictures.filter((x: PreviewPicture) => x.url !== preview.url);
    comment.edited_pictures = comment.edited_pictures.filter((x: PreviewPicture) => x.url !== preview.url);
    if (comment.upload_files && comment.upload_files.length) {
      comment.upload_files = comment.upload_files.filter((x: File) => x !== <File>preview.file);
    }
  }

  /* Open the device file browswer or capture once the user click camera icon in comment box */
  CommentImageUpload(feed: Feed) {
    var elem: HTMLElement = document.querySelector('#comment_upload_input_' + feed.id);
    elem.click();
  }

  /* Open the device file browswer or capture once the user click camera icon in comment edit box */
  CommentEditImageUpload(comment: Comment) {
    var elem: HTMLElement = document.querySelector('#comment_edit_upload_input_' + comment.id);
    elem.click();
  }

  onSelectFile(event, feed: Feed) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      let files = event.target.files;
      for (let i = 0; i < filesAmount; i++) {
        var f = files[i];
        /* Only process image files. */
        if (!f.type.match('image.*')) {
          continue;
        }
        var fileReader = new FileReader();
        var i_url;
        fileReader.onload = (e) => {
          if (e) {
            i_url = (<FileReader>e.target).result;
            var loadedImage = new Image();
            loadedImage.onload = (event) => {
              if (event) {
                feed.comment_image_preview = { url: i_url, width: loadedImage.width, height: loadedImage.height, file: <File>f };
              }
            }
            loadedImage.src = i_url;
          }
        }
        fileReader.readAsDataURL(<File>f);
      }
    }
  }

  onSelectFileEditComment(event, comment: Comment) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      let files = event.target.files;
      for (let i = 0; i < filesAmount; i++) {
        var f = files[i];
        /* Only process image files. */
        if (!f.type.match('image.*')) {
          continue;
        }
        comment.upload_files.push(<File>f);
        this.PushCommentPreviewPicture(<File>f, comment);
      }
    }
  }

  PushCommentPreviewPicture(f: File, comment: Comment) {
    var fileReader = new FileReader();
    var i_url;
    fileReader.onload = (e) => {
      if (e) {
        i_url = (<FileReader>e.target).result;
        var loadedImage = new Image();
        loadedImage.onload = (event) => {
          if (event) {
            comment.preview_pictures.push({ url: i_url, width: loadedImage.width, height: loadedImage.height, file: <File>f });
          }
        }
        loadedImage.src = i_url;
      }
    }
    fileReader.readAsDataURL(<File>f);
  }

  CancelcommentReplyEdit(commentReply: CommentReply) {
    commentReply.edit_mode = false;
    commentReply.edit_input_content = '';
  }

  deleteComment(comment: Comment) {
    //let elem:Element = document.getElementById("comment_item_"+comment.object_id+"_"+comment.id);
    let elem: HTMLElement = document.querySelector("#comment_item_" + comment.object_id + "_" + comment.id);
    elem.style.opacity = '0.6';
    this.clearComment(comment);
    var _this = this;
    this.errors = this.messages = [];
    this.modalRef.close();
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comments/';
    this.service.delete(this.provider, { id: comment.id }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data == true) {
        } else {
          elem.style.opacity = '1';
        }
      } else {
        _this.errors = result.getErrors();
        elem.style.opacity = '1';
      }
    });
  }

  clearComment(comment: Comment) {
    this.feedService.profileFeedService.searchFeed(comment.object_id).subscribe((feed: Feed) => {
      feed.comments = feed.comments.filter((x: any) => x.id !== comment.id);
      feed.no_comments = Number(feed.no_comments) - 1;
    });
    this.feedService.searchFeed(comment.object_id).subscribe((feed: Feed) => {
      feed.comments = feed.comments.filter((x: any) => x.id !== comment.id);
      feed.no_comments = Number(feed.no_comments) - 1;
    });
  }

  searchComment(comments: any, id: number): Observable<Comment> {
    return of(comments.find((comment: Comment) => comment.id == id));
  }

  updateSentComment(comment: Comment, tmp_id: number) {
    this.feedService.profileFeedService.searchFeed(comment.object_id).subscribe((feed: Feed) => {
      this.searchComment(feed.comments, tmp_id).subscribe((comm: Comment) => {
        if (comm) {
          this.comment_model = cloneDeep(comment);
          comm = cloneDeep(comment);
        }
      });
    });
    this.feedService.searchFeed(comment.object_id).subscribe((feed: Feed) => {
      this.searchComment(feed.comments, tmp_id).subscribe((comm: Comment) => {
        if (comm) {
          this.comment_model = cloneDeep(comment);
          comm = cloneDeep(comment);
        }
      });
    });
  }

  /* Change the comment like color and count after like or unlike action */
  updateCommentLike(comment: Comment, action: string) {

    if (this.feedService.OVERLAY_FEED.feed != null && comment.object_id == this.feedService.OVERLAY_FEED.feed.id) {
      this.searchComment(this.feedService.OVERLAY_FEED.feed.comments, comment.id).subscribe((comm: Comment) => {
        if (comm) {
          if (action == 'like' && comm.i_like!=true) {
            comm.no_likes = Number(comm.no_likes) + 1;
            comm.i_like = true;
          } else {
            if (Number(comm.no_likes) > 0 && comm.i_like==true) {
              comm.no_likes = Number(comm.no_likes) - 1;
              comm.i_like = false;
            }
          }
        }
      });
    }

    this.feedService.profileFeedService.searchFeed(comment.object_id).subscribe((feed: Feed) => {
      this.searchComment(feed.comments, comment.id).subscribe((comm: Comment) => {
        if (comm) {
          if (action == 'like' && comm.i_like!=true) {
            comm.no_likes = Number(comm.no_likes) + 1;
            comm.i_like = true;
          } else {
            if (Number(comm.no_likes) > 0 && comm.i_like==true) {
              comm.no_likes = Number(comm.no_likes) - 1;
              comm.i_like = false;
            }
          }
        }
      });
    });

    this.feedService.searchFeed(comment.object_id).subscribe((feed: Feed) => {
      this.searchComment(feed.comments, comment.id).subscribe((comm: Comment) => {
        if (comm) {
          if (action == 'like' && comm.i_like!=true) {
            comm.no_likes = Number(comm.no_likes) + 1;
            comm.i_like = true;
          } else {
            if (Number(comm.no_likes) > 0 && comm.i_like==true) {
              comm.no_likes = Number(comm.no_likes) - 1;
              comm.i_like = false;
            }
          }
        }
      });
    });
  }

  /*set comment reply box visible and cursor focus */
  setToReplyComment(feedComment: Comment) {
    feedComment.replying = true;
    let elem: HTMLElement = document.querySelector("#comment_reply_box_" + feedComment.object_id + "_" + feedComment.id);
    if (elem) {
      elem.focus();
      elem.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  }

  /*Post comment Reply */
  commentReply(comment: Comment) {
    var _this = this;
    if (comment.reply_box.trim() == "") {
      return;
    }
    this.errors = this.messages = [];
    var reply_model = new CommentReply();
    reply_model.isNew = comment.is_new_reply;
    reply_model.message = comment.reply_box;
    reply_model.id = comment.replyId;
    reply_model.object_id = String(comment.id);
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comment-reply/';
    if (comment.sending_reply !== true) {
      comment.sending_reply = true;
      if (comment.is_new_reply === true) {
        comment.loading_new_reply = true;
        this.service.create(this.provider, reply_model, {}).subscribe(function (result) {
          comment.sending_reply = false;
          if (result.isSuccess()) {
            _this.messages = result.getMessages();
            var data = result.getResultData();
            _this.pushCommentReply(comment, data.data);
            comment.loading_new_reply = false;
          } else {
            _this.errors = result.getErrors();
          }
        });
      }
      comment.is_new_reply = true;
      comment.reply_box = '';
      comment.replyId = 0;
    }
  }


  /*Post comment Reply */
  commentReplyEdit(commentReply: CommentReply) {
    var _this = this;
    if (commentReply.edit_input_content.trim() == "" || commentReply.sending == true) {
      return;
    }
    this.errors = this.messages = [];
    var reply_model = new CommentReply();
    reply_model.message = commentReply.edit_input_content;
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comment-reply/';
    commentReply.sending = true;
    commentReply.edit_mode = false;
    this.service.update(this.provider, reply_model, { 'id': commentReply.id }).subscribe(function (result) {
      commentReply.sending = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var data = result.getResultData();
        commentReply.message = reply_model.message;
        commentReply.edit_input_content = '';
      }
      else {
        _this.errors = result.getErrors();
        commentReply.edit_mode = true;
      }
    });

  }

  deleteCommentReply(comment: Comment, commentReply: CommentReply) {
    //let elem:Element = document.getElementById("comment_item_"+comment.object_id+"_"+comment.id);
    let elem: HTMLElement = document.querySelector("#comment_reply_item_" + commentReply.object_id + "_" + commentReply.id);
    elem.style.opacity = '0.6';
    this.clearCommentReply(comment, commentReply.id);
    var _this = this;
    this.errors = this.messages = [];
    this.modalRef.close();
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comment-reply/';
    this.service.delete(this.provider, { id: commentReply.id }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data == true) {
        } else {
          elem.style.opacity = '1';
        }
      } else {
        _this.errors = result.getErrors();
        elem.style.opacity = '1';
      }
    });
  }

  clearCommentReply(comment: Comment, replyId: number) {
    comment.replies = comment.replies.filter((x: any) => x.id !== replyId);
    comment.no_replies = Number(comment.replies.length) - 1;
  }

  pushCommentReply(feedComment: Comment, reply: any) {
    var _this=this;
    if (this.feedService.OVERLAY_FEED.feed != null && feedComment.object_id == this.feedService.OVERLAY_FEED.feed.id) {
      this.searchComment(this.feedService.OVERLAY_FEED.feed.comments, feedComment.id).subscribe((comm: Comment) => {
        if (comm) {
          _this.searchReply(comm.replies, reply.id).subscribe((rep: CommentReply) => {
            if (rep) { /*Don't push reply */}
            else{
              comm.replies.push(reply);
              comm.no_replies = comm.no_replies + 1;
            }
          });
        }
      });
    }

    this.feedService.profileFeedService.searchFeed(feedComment.object_id).subscribe((feed: Feed) => {
      if (feed) {
        this.searchComment(feed.comments, feedComment.id).subscribe((comm: Comment) => {
          if (comm) {
            _this.searchReply(comm.replies, reply.id).subscribe((rep: CommentReply) => {
              if (rep) { /*Don't push reply */}
              else{
                comm.replies.push(reply);
                comm.no_replies = comm.no_replies + 1;
              }
            });
          }
        });
      }
    });

    this.feedService.searchFeed(feedComment.object_id).subscribe((feed: Feed) => {
      if (feed) {
        this.searchComment(feed.comments, feedComment.id).subscribe((comm: Comment) => {
          if (comm) {
            _this.searchReply(comm.replies, reply.id).subscribe((rep: CommentReply) => {
              if (rep) { /*Don't push reply */}
              else{
                comm.replies.push(reply);
                comm.no_replies = comm.no_replies + 1;
              }
            });
          }
        });
      }
    });
  }


  replaceCommentReply(feedComment: Comment, reply: any) {
    var _this=this;
    if (this.feedService.OVERLAY_FEED.feed != null && feedComment.object_id == this.feedService.OVERLAY_FEED.feed.id) {
      this.searchComment(this.feedService.OVERLAY_FEED.feed.comments, feedComment.id).subscribe((comm: Comment) => {
        if (comm) {
          _this.searchReply(comm.replies, reply.id).subscribe((rep: CommentReply) => {
            if (rep) {
              rep = cloneDeep(reply);
            }
          });
        }
      });
    }

    this.feedService.profileFeedService.searchFeed(feedComment.object_id).subscribe((feed: Feed) => {
      if (feed) {
        _this.searchComment(feed.comments, feedComment.id).subscribe((comm: Comment) => {
          if (comm) {
            _this.searchReply(comm.replies, reply.id).subscribe((rep: CommentReply) => {
              if (rep) {
                rep = cloneDeep(reply);
              }
            });
          }
        });
      }
    });

    this.feedService.searchFeed(feedComment.object_id).subscribe((feed: Feed) => {
      if (feed) {
        this.searchComment(feed.comments, feedComment.id).subscribe((comm: Comment) => {
          if (comm) {
            this.searchReply(comm.replies, reply.id).subscribe((rep: CommentReply) => {
              if (rep) {
                rep = cloneDeep(reply);
              }
            });
          }
        });
      }
    });
  }

  commentReplyLike(commentReply: CommentReply, action: string) {
    if (commentReply.sending_like == true) {
      return;
    }
    this.updateCommentReplyLike(commentReply, action);
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/comment-reply-like/';
    commentReply.sending_like = true;
    if (action == "like") {
      this.service.create(this.provider, { object_id: commentReply.id, target_id: commentReply.profile.user_id }, {}).subscribe(function (result) {
        _this.submitted = false;
        commentReply.sending_like = false;
        if (result.isSuccess()) {
          var data = result.getResultData();
          if (data != true) {
            _this.updateCommentReplyLike(commentReply, 'unlike');
          }
        }
        else {
          _this.errors = result.getErrors();
          _this.updateCommentReplyLike(commentReply, 'unlike');
        }
      });
    } else {
      this.service.delete(this.provider, { id: commentReply.id }).subscribe(function (result) {
        commentReply.sending_like = false;
        if (result.isSuccess()) {
          var data = result.getResultData();
          if (data != true) {
            _this.updateCommentReplyLike(commentReply, 'like');
          }
        } else {
          _this.errors = result.getErrors();
          _this.updateCommentReplyLike(commentReply, 'like');
        }
      });
    }
  }

  updateCommentReplyLike(commentReply: CommentReply, action: string) {
    if (commentReply) {
      if (action == 'like') {
        commentReply.no_likes = Number(commentReply.no_likes) + 1;
        commentReply.i_like = true;
      } else {
        if (Number(commentReply.no_likes) > 0) {
          commentReply.no_likes = Number(commentReply.no_likes) - 1;
          commentReply.i_like = false;
        }
      }
    }
  }

  searchReply(replies: CommentReply[], id: number): Observable<CommentReply> {
    return of(replies.find((reply: CommentReply) => reply.id == id));
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  };
}