import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Notification } from '@models/notification';
import { getDeepFromObject } from 'app/@crud/helpers';
import { CrudService } from 'app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from 'app/@crud/crud.options';
import { CrudProvider } from 'app/@crud/providers/crud.provider';


@Injectable()
export class NotificationsService {
  service: CrudService;
  crudprovider: CrudProvider;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  NOTIFICATIONS: Notification[] = [];
  loading_notifications: boolean = false;
  next_notification_page: number;
  notification_end_reached: boolean = false;
  public new_notifications: any;
  public hide_notification_bubble: boolean;
  private interval: any;

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router) {
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.new_notifications = '';
    this.hide_notification_bubble = true;
    this.next_notification_page = 1;
    this.loadNotification({ page: this.next_notification_page });
  }

  public onScrollUp(): void {
    if (this.loading_notifications == false) {
      this.loadNotification({ page: this.next_notification_page });
    }
  }

  public onScrollDown(): void {
    if (this.loading_notifications == false) {
      this.loadNotification({ page: this.next_notification_page });
    }
  }

  loadNotification(params?: {}): any {
    if (this.notification_end_reached == true) {
      return;
    }
    this.loading_notifications = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'notifications/default/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_notifications = false;
      if (results.isSuccess()) {
        var new_notifications = results.getResultData() as Notification[];
        if (new_notifications.length) {
          _this.searchNotification(new_notifications[0].id).subscribe(notification => {
            if (notification) {
              _this.notification_end_reached = true;
            } else {
              _this.next_notification_page++;
              _this.NOTIFICATIONS = _this.NOTIFICATIONS.concat(results.getResultData());
            }
          });
        } else {
          _this.notification_end_reached = true;
        }
      }
    });
  }

  searchNotification(id: number): Observable<Notification> {
    return of(this.NOTIFICATIONS.find((notification: Notification) => notification.id == id));
  }

  DeleteNotification(id: number) {
    //let elem:Element = document.getElementById("comment_item_"+comment.object_id+"_"+comment.id);
    let elem: HTMLElement = document.querySelector("#notification_item_" + id);
    elem.style.opacity = '0.6';
    this.clearNotification(id);
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'notifications/default/';
    this.service.delete(this.provider, { id: id }).subscribe(function (result) {
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

  clearNotification(notification_id: number) {
    this.NOTIFICATIONS = this.NOTIFICATIONS.filter((x: any) => x.id !== notification_id);
  }

  getNotifications(params?: {}): any {
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'notifications/';
    return this.service.getall(this.provider, params);
  }

  markNotificationsAsRead(params?: {}): any {
    this.provider = this.getConfigValue('forms.update.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'notifications/';
    this.service.update(this.provider, params).subscribe();
  }

  subscribe() {
    var _this = this;
    var results_data;
    var startTime = new Date().getTime();
    _this.interval = setInterval(function () {
      _this.provider = _this.getConfigValue('forms.getone.provider');
      _this.service.getProvider(_this.provider).crudconfig.route_url = 'notifications/';
      _this.service.getone(_this.provider, {}).subscribe(results => {
        if (results.isSuccess()) {
          results_data = results.getResultData();
          if (results_data.new_notifications > 0) {
            _this.new_notifications = results_data.new_notifications;
            _this.hide_notification_bubble = false;
          } else {
            _this.new_notifications = '';
            _this.hide_notification_bubble = true;
          }
        }
      });

      if (new Date().getTime() - startTime > 600000) {
        clearInterval(_this.interval);
        return;
      }

    }, 20000);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  };

}
