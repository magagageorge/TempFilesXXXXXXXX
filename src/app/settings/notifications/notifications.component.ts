import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { Observable, of } from 'rxjs';
import { Country } from '@app/models/country';
import { NotificationSettings } from '@app/models/settings/notification-settings';
import { UtilitiesService } from '@app/services/utilities.service';
import { ProfileService } from '@app/services/profile.service';
import { SettingsService } from '../services/settings.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  title: string = "Notification Settings";
  parent_route: string = "settings";
  missionModel: any = {};
  notificationGroup: FormGroup;
  careerGroup: FormGroup;
  missionGroup: FormGroup;
  verifyGroup: FormGroup;
  protected service: CrudService;
  protected crudconfig: {};
  protected router: Router;
  showMessages: any;
  provider: string;
  errors: string[];
  messages: string[];
  submitted: boolean;
  countries: Country[] = [];
  curr_year: any;
  resultData: string[];
  str_success_code: string;
  str_invalid_code: string;
  code_resent: boolean = false;
  parameters:any={};
  resending_code: boolean = false;
  selectedLocation: Country = new Country();
  notification_settings: NotificationSettings = new NotificationSettings();
  utilitiesService: UtilitiesService;
  profileService: ProfileService;
  settingsService:SettingsService;


  constructor(settingsService:SettingsService,utilitiesService: UtilitiesService, profileService: ProfileService, private formBuilder: FormBuilder, service: CrudService, router: Router, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions) {
    this.service = service;
    this.utilitiesService = utilitiesService;
    this.profileService = profileService;
    this.crudconfig = CRUD_OPTIONS;
    this.settingsService=settingsService;
    this.router = router;
    this.showMessages = {};
    this.provider = '';
    this.errors = [];
    this.messages = [];
    this.submitted = false;
    this.selectedLocation = new Country();
    this.provider = this.getConfigValue('forms.update.provider');
  }

  ngOnInit() {
    var __this = this;
    this.notificationGroup = this.formBuilder.group({
      show_email_to: ['', [Validators.required]],
      email_post_likes: ['', [Validators.required]],
      email_comment_likes: ['', [Validators.required]],
      email_mypost_shared: ['', [Validators.required]],
      email_when_mypost_commented: ['', [Validators.required]],
      email_when_myask_answered: ['', [Validators.required]],		
      email_when_followed: ['', [Validators.required]],
      email_when_mentioned: ['', [Validators.required]],
      email_whenimsent_message: ['', [Validators.required]],
      email_whenimsent_connection_request: ['', [Validators.required]],
      email_whensomeone_accept_connection: ['', [Validators.required]],		
      email_whenmycontact_join: ['', [Validators.required]],
      email_research_surveys: ['', [Validators.required]],
      notify_post_likes: ['', [Validators.required]],
      notify_comment_likes: ['', [Validators.required]],
      notify_mypost_shared: ['', [Validators.required]],
      notify_when_mypost_commented: ['', [Validators.required]],
      notify_when_myask_answered: ['', [Validators.required]],				
      notify_when_followed: ['', [Validators.required]],
      notify_when_mentioned: ['', [Validators.required]],
      notify_whenimsent_message: ['', [Validators.required]],
      notify_whenimsent_connection_request: ['', [Validators.required]],
      notify_whensomeone_accept_connection: ['', [Validators.required]],
      notify_whenmycontact_join: ['', [Validators.required]],
      notify_research_surveys: ['', [Validators.required]],
    });
  }

  get f() { return this.notificationGroup.controls; }


  save(): void {

    this.submitted = true;
    // stop here if form is invalid
    if (this.notificationGroup.invalid) {
      //alert();
      //return;
    }
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'settings/notifications/';
    this.service.update(this.provider, this.settingsService.notification_settings, this.parameters).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var res = result.getResultData();
        if (res.done) {
          _this.settingsService.notification_settings=res.data as NotificationSettings;
          _this.settingsService.SETTINGS.NotificationSettings=res.data as NotificationSettings;
          return;
        }
      }
      else {
        _this.errors = result.getErrors();
      }
    });
    return;
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
