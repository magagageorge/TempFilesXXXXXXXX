import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ObjectLikes } from '@app/models/object-likes';
import { AppModalService } from '@app/services/app-modal.service';

@Component({
  selector: 'app-likes-modal',
  templateUrl: './likes-modal.component.html',
  styleUrls: ['./likes-modal.component.scss']
})
export class LikesModalComponent implements OnInit {

  appModalService: AppModalService;
  redirectDelay: number;
  submitted: boolean = false;
  likes_model: ObjectLikes = new ObjectLikes();
  loading_likes: boolean = false;
  next_like_page: number;

  constructor(appModalService: AppModalService, public modal: NgbActiveModal) {
    this.appModalService = appModalService;
    this.next_like_page = 1;
  }

  public onScrollUp(): void {
    if (this.loading_likes == false) {
      this.loadLike({ page: this.next_like_page });
    }
  }

  public onScrollDown(): void {
    if (this.loading_likes == false) {
      this.loadLike({ page: this.next_like_page });
    }
  }

  setModel(object_id: number, object_model: string, no_likes: number) {
    this.likes_model.object_id = object_id;
    this.likes_model.object_model = object_model;
    this.likes_model.no_likes = no_likes;
  }

  ngOnInit() {
    this.loadLike({ object_id: this.likes_model.object_id, object_model: this.likes_model.object_model, page: this.next_like_page });
  }

  loadLike(params?: {}): any {
    this.loading_likes = true;
    this.appModalService.feedService.provider = this.appModalService.feedService.getConfigValue('forms.getall.provider');
    this.appModalService.feedService.service.getProvider(this.appModalService.feedService.provider).crudconfig.route_url = 'likes/';
    var _this = this;
    return this.appModalService.feedService.service.getall(this.appModalService.feedService.provider, params).subscribe(results => {
      _this.loading_likes = false;
      if (results.isSuccess()) {
        _this.next_like_page++;
        _this.likes_model.likes = _this.likes_model.likes.concat(results.getResultData());
      }
    });
  }

}
