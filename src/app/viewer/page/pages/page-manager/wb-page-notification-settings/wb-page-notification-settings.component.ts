import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditPageService } from '@app/services/edit-page.service';
import { PageNotificationSettingsForm } from '@app/viewer/page/models/page-models';

@Component({
  selector: 'app-wb-page-notification-settings',
  templateUrl: './wb-page-notification-settings.component.html',
  styleUrls: ['./wb-page-notification-settings.component.scss']
})
export class WbPageNotificationSettingsComponent implements OnInit {

  page_id: number;
  loading_settings: boolean = false;
  settings_form: FormGroup;
  settingsModel: PageNotificationSettingsForm = new PageNotificationSettingsForm();
  constructor(public editPageService: EditPageService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.settings_form = this.formBuilder.group({
      notify: ['', [Validators.required]],
      page_mentioned: ['', [Validators.required]],
      page_review: ['', [Validators.required]],
      page_sent_message: ['', [Validators.required]],
      page_followed: ['', [Validators.required]],
      post_commented: ['', [Validators.required]],
      post_shared: ['', [Validators.required]],
      post_likes: ['', [Validators.required]],
      comment_likes: ['', [Validators.required]],
      edit_on_page_post: ['', [Validators.required]],
      edit_on_page_comment: ['', [Validators.required]],
      messages: ['', [Validators.required]],
      email: ['', [Validators.required]],
      text_messages: ['', [Validators.required]],
    });

    if (this.editPageService.urlViewerService.PPVIEWER.page != null) {
      this.page_id = this.editPageService.urlViewerService.PPVIEWER.page.id;
      this.loadSettings({ id: this.editPageService.urlViewerService.PPVIEWER.page.id });
    }

  }

  get f() {
    return this.settings_form.controls;
  }

  saveSettings() {


  }

  loadSettings(params?: {}): any {
    var _this = this;
    this.editPageService.provider = this.editPageService.getConfigValue('forms.getall.provider');
    this.editPageService.service.getProvider(this.editPageService.provider).crudconfig.route_url = 'page/notification-settings/';
    this.loading_settings = true;
    return this.editPageService.service.getone(this.editPageService.provider, params).subscribe(results => {
      _this.loading_settings = false;
      if (results.isSuccess()) {
        var data = results.getResultData();
        _this.settingsModel = data;
      }
    });
  }
}
