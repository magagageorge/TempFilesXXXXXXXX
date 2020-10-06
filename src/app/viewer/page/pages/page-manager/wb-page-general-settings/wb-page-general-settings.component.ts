import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditPageService } from '@app/services/edit-page.service';
import { PageGeneralSettingsForm } from '@app/viewer/page/models/page-models';

@Component({
  selector: 'app-wb-page-general-settings',
  templateUrl: './wb-page-general-settings.component.html',
  styleUrls: ['./wb-page-general-settings.component.scss']
})
export class WbPageGeneralSettingsComponent implements OnInit {

  page_id: number;
  loading_settings: boolean = false;
  settings_form: FormGroup;
  settingsModel: PageGeneralSettingsForm = new PageGeneralSettingsForm();
  constructor(public editPageService: EditPageService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.settings_form = this.formBuilder.group({
      page_id: ['', [Validators.required]],
      published: ['', [Validators.required]],
      visitors_can_post: ['', [Validators.required]],
      private_messages: ['', [Validators.required]],
      country_restrictions: ['', [Validators.required]],
      age_restrictions: ['', [Validators.required]],
      page_moderation: ['', [Validators.required]],
      profanity_filter: ['', [Validators.required]],
      page_updates: ['', [Validators.required]],
      post_multiple_language: ['', [Validators.required]],
      translate_automatically: ['', [Validators.required]],
      comment_ranking: ['', [Validators.required]],
      page_deletion: ['', [Validators.required]],
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
    this.editPageService.service.getProvider(this.editPageService.provider).crudconfig.route_url = 'page/g-settings/';
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
