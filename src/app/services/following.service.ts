import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { Profile } from '@app/models/profile/profile';
import { UrlViewerService } from './url-viewer.service';
import { FeedService } from './feed.service';
import { Feed } from '@app/models/feed/feed';
import { Comment } from '@app/models/feed/comment';
import { PageService } from './page.service';
import { PageSummary } from '@app/models/page/page.model';
import { PageFeedService } from '@app/viewer/page/services/page-feed.service';
import { ProfileFeedService } from '@app/viewer/profile/services/profile-feed.service';
import { ShowAdsService } from './show-ads.service';
import { ShowAdContent } from '@app/models/ads/ad-models';

@Injectable({
    providedIn: 'root'
})
export class FollowingService {

    service: CrudService;
    crudprovider: CrudProvider;
    protected crudconfig: {};
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    provider: string;
    submitted: boolean = false;
    errors: string[];
    messages: string[];
    urlViewerService: UrlViewerService;
    feedService: FeedService;

    constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, public pageService: PageService, feedService: FeedService, public pageFeedService: PageFeedService, public profileFeedService: ProfileFeedService, public showAdsService: ShowAdsService, urlViewerService: UrlViewerService, router: Router) {
        this.service = service;
        this.crudconfig = CRUD_OPTIONS;
        this.router = router;
        this.urlViewerService = urlViewerService;
        this.feedService = feedService;
        this.provider = this.getConfigValue('forms.create.provider');
    }

    FollowPage(page_id: number, i_follow: boolean): void {
        var _this = this;
        this.errors = this.messages = [];
        this.service.getProvider(this.provider).crudconfig.route_url = 'page/page-follows/';
        const formData: any = new FormData();
        formData.append('target_id', page_id);
        if (i_follow == false) {
            formData.append('action', 'follow');
        } else {
            formData.append('action', 'unfollow');
        }
        this.service.update(this.provider, formData).subscribe(function (result) {
            if (result.isSuccess()) {
                var data = result.getResultData();
                if (data.done == true) {
                    _this.UpdatePagesFollowStatus(page_id, data.i_follow, data.no_followers);
                } else {
                }
            } else {
                _this.errors = result.getErrors();
            }
        });
    }


    UpdatePagesFollowStatus(page_id: number, i_follow: boolean, no_followers: string) {
        if (this.urlViewerService.PPVIEWER.page != null && this.urlViewerService.PPVIEWER.page.id == page_id) {
            this.urlViewerService.PPVIEWER.page.no_followers = no_followers;
            this.urlViewerService.PPVIEWER.page.i_follow = i_follow;
        }
        if (this.pageService.MYPAGES.length > 0) {
            this.pageService.getPage(page_id).subscribe((page: PageSummary) => {
                if (page) {
                    page.i_follow = i_follow;
                    page.no_followers = no_followers;
                }
            });
        }
        this.feedService.feeds.forEach((post: Feed) => {
            if (post.page != null && post.page.id == page_id) {
                post.page.i_follow = i_follow;
                post.page.no_followers = no_followers;
            }
            if (post.original_post != null && post.original_post.page != null && post.original_post.page.id == page_id) {
                post.original_post.page.i_follow = i_follow;
                post.original_post.page.no_followers = no_followers;
            }
        });
        this.pageFeedService.feeds.forEach((post: Feed) => {
            if (post.page != null && post.page.id == page_id) {
                post.page.i_follow = i_follow;
                post.page.no_followers = no_followers;
            }
            if (post.original_post != null && post.original_post.page != null && post.original_post.page.id == page_id) {
                post.original_post.page.i_follow = i_follow;
                post.original_post.page.no_followers = no_followers;
            }
        });
        this.profileFeedService.feeds.forEach((post: Feed) => {
            if (post.page != null && post.page.id == page_id) {
                post.page.i_follow = i_follow;
                post.page.no_followers = no_followers;
            }
            if (post.original_post != null && post.original_post.page != null && post.original_post.page.id == page_id) {
                post.original_post.page.i_follow = i_follow;
                post.original_post.page.no_followers = no_followers;
            }
        });
        this.showAdsService.POST_ADS.forEach((ad: ShowAdContent) => {
            if (ad.page != null && ad.page.id == page_id) {
                ad.page.i_follow = i_follow;
                ad.page.no_followers = no_followers;
            }
        })

    }

    getConfigValue(key: string): any {
        return getDeepFromObject(this.crudconfig, key, null);
    }
}
