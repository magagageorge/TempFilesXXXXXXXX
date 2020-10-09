import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditPageService } from '@app/services/edit-page.service';
import { PageGeneralSettingsForm } from '@app/viewer/page/models/page-models';

export const general_settings: any =
{
  published: { '0': 'Page Unpublished', '1': 'Page Published' },
  visitors_can_post: { '0': 'Choose who can publish to your page timeline', '1': 'Anyone can publish to your page' },
  private_messages: { '0': 'People can not  send Messages Privately', '1': 'People can send Messages Privately' },
  country_restrictions: { 'Hide': 'Page is not Visible to Everyone', 'Show': 'Page is Visible to Everyone' },
  age_restrictions: { '1': 'Page is not shown to Everyone', '17': 'Page is shown to people over 17 years of age', '18': 'Page is shown to people over 18 years of age', '19': 'Page is shown to people over 19 years of age', '21': 'Page is shown to people over 21 years of age' },
  page_moderation: { '0': 'No words are being block from my page.', '1': 'Some words are being block from my page.' },
  profanity_filter: { '0': 'Turned off', '1': 'Turned on' },
  page_updates: { '0': 'Page posts are not automatically published', '1': 'Page posts are automatically published when you update page information.' },
  post_multiple_language: { '0': 'Ability to write posts in Multiple Languages in turned off.', '1': 'Ability to write posts in Multiple Languages in turned on.' },
  translate_automatically: { '0': 'Your posts will not show transilation automatically for people who read other languages.', '1': 'Your posts may show transilation automatically for people who read other languages.' },
  comment_ranking: { '0': 'Most recent comments are shown for my Page by default.', '1': 'Most relevant comments are shown for my Page posts by default.' },
  page_deletion: { 'none': 'Delete your Page', 'pending': 'Confirm your Page Deletion', 'deleted': 'This page has been deleted!' },
}


@Component({
  selector: 'app-wb-page-general-settings',
  templateUrl: './wb-page-general-settings.component.html',
  styleUrls: ['./wb-page-general-settings.component.scss']
})
export class WbPageGeneralSettingsComponent implements OnInit {

  page_id: number;
  GENERAL_SETTINGS: any = general_settings;
  loading_settings: boolean = false;
  settings_form: FormGroup;
  currently_editing: string = '';
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
    var _this = this;
    const formData = new FormData();
    if (this.currently_editing == 'published') {
      this.settingsModel.published = this.f.published.value;
      formData.append('published', this.f.published.value);
      this.submitForm(formData);
    }
    if (this.currently_editing == 'visitors_can_post') {
      this.settingsModel.visitors_can_post = this.f.visitors_can_post.value;
      formData.append('visitors_can_post', this.f.visitors_can_post.value);
      this.submitForm(formData);
    }
    if (this.currently_editing == 'private_messages') {
      this.settingsModel.private_messages = this.f.private_messages.value;
      formData.append('private_messages', this.f.private_messages.value);
      this.submitForm(formData);
    }

    if (this.currently_editing == 'country_restrictions') {
      this.settingsModel.country_restrictions = this.f.country_restrictions.value;
      formData.append('country_restrictions', this.f.country_restrictions.value);
      this.submitForm(formData);
    }

    if (this.currently_editing == 'age_restrictions') {
      this.settingsModel.age_restrictions = this.f.age_restrictions.value;
      formData.append('age_restrictions', this.f.age_restrictions.value);
      this.submitForm(formData);
    }

    if (this.currently_editing == 'page_moderation') {
      this.settingsModel.page_moderation = this.f.page_moderation.value;
      formData.append('page_moderation', this.f.page_moderation.value);
      this.submitForm(formData);
    }

    if (this.currently_editing == 'profanity_filter') {
      this.settingsModel.profanity_filter = this.f.profanity_filter.value;
      formData.append('profanity_filter', this.f.profanity_filter.value);
      this.submitForm(formData);
    }

    if (this.currently_editing == 'page_updates') {
      this.settingsModel.page_updates = this.f.page_updates.value;
      formData.append('page_updates', this.f.page_updates.value);
      this.submitForm(formData);
    }

    if (this.currently_editing == 'post_multiple_language') {
      this.settingsModel.post_multiple_language = this.f.post_multiple_language.value;
      formData.append('post_multiple_language', this.f.post_multiple_language.value);
      this.submitForm(formData);
    }

    if (this.currently_editing == 'translate_automatically') {
      this.settingsModel.translate_automatically = this.f.translate_automatically.value;
      formData.append('translate_automatically', this.f.translate_automatically.value);
      this.submitForm(formData);
    }

    if (this.currently_editing == 'comment_ranking') {
      this.settingsModel.comment_ranking = this.f.comment_ranking.value;
      formData.append('comment_ranking', this.f.comment_ranking.value);
      this.submitForm(formData);
    }

    if (this.currently_editing == 'page_deletion') {
      this.settingsModel.page_deletion = this.f.page_deletion.value;
      formData.append('page_deletion', this.f.page_deletion.value);
      this.submitForm(formData);
    }
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
        _this.laodForm(data);
      }
    });
  }

  submitForm(formData: FormData): any {
    var _this = this;
    this.editPageService.provider = this.editPageService.getConfigValue('forms.getall.provider');
    this.editPageService.service.getProvider(this.editPageService.provider).crudconfig.route_url = 'page/g-settings/';
    this.loading_settings = true;
    return this.editPageService.service.update(this.editPageService.provider, formData, { id: _this.page_id }).subscribe(results => {
      _this.loading_settings = false;
      if (results.isSuccess()) {
        var data = results.getResultData();
        // _this.settingsModel = data;
        //_this.laodForm(data);
      }
      _this.currently_editing = '';
    });
  }

  now_edit(section: string) {
    this.currently_editing = section;
  }

  cancel_edit() {
    this.currently_editing = '';
    this.f.published.setValue(this.settingsModel.published);
    this.f.visitors_can_post.setValue(this.settingsModel.visitors_can_post);
    this.f.private_messages.setValue(this.settingsModel.private_messages);
    this.f.country_restrictions.setValue(this.settingsModel.country_restrictions);
    this.f.age_restrictions.setValue(this.settingsModel.age_restrictions);
    this.f.page_moderation.setValue(this.settingsModel.page_moderation);
    this.f.profanity_filter.setValue(this.settingsModel.profanity_filter);
    this.f.page_updates.setValue(this.settingsModel.page_updates);
    this.f.post_multiple_language.setValue(this.settingsModel.post_multiple_language);
    this.f.translate_automatically.setValue(this.settingsModel.translate_automatically);
    this.f.comment_ranking.setValue(this.settingsModel.comment_ranking);
    this.f.page_deletion.setValue(this.settingsModel.page_deletion);
  }

  laodForm(data: any) {
    this.f.published.setValue(data.published);
    this.f.visitors_can_post.setValue(data.visitors_can_post);
    this.f.private_messages.setValue(data.private_messages);
    this.f.country_restrictions.setValue(data.country_restrictions);
    this.f.age_restrictions.setValue(data.age_restrictions);
    this.f.page_moderation.setValue(data.page_moderation);
    this.f.profanity_filter.setValue(data.profanity_filter);
    this.f.page_updates.setValue(data.page_updates);
    this.f.post_multiple_language.setValue(data.post_multiple_language);
    this.f.translate_automatically.setValue(data.translate_automatically);
    this.f.comment_ranking.setValue(data.comment_ranking);
    this.f.page_deletion.setValue(data.page_deletion);
  }


}
