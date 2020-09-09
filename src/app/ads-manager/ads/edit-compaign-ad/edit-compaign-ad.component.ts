import { Component, OnInit } from '@angular/core';
import { AdsService } from '@app/ads-manager/services/ads.service';
import { AdCompaignForm } from '@app/ads-manager/models/ad-compaign-form';
import { PageService } from '@app/services/page.service';
import { UtilitiesService } from '@app/services/utilities.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as cloneDeep from 'lodash/cloneDeep';
import { Router, ActivatedRoute } from '@angular/router';
import { AdCompaign } from '@app/ads-manager/models/ad-compaign';
import { AdFormat } from '@app/ads-manager/models/ad-format';
import { AdContentForm, AdContent } from '@app/ads-manager/models/ad-content';
import { PageSummary } from '@app/models/page/page.model';
import { CallToAction } from '@app/ads-manager/models/call-to-action';

@Component({
  selector: 'app-edit-compaign-ad',
  templateUrl: './edit-compaign-ad.component.html',
  styleUrls: ['./edit-compaign-ad.component.scss'],
  providers: [DatePipe]
})
export class EditCompaignAdComponent implements OnInit {

  ad_formats: AdFormat[] = [];
  saving_changes: boolean = false;
  compaign_model: AdCompaignForm;
  ad_content_model: AdContentForm;
  loading_compaign: boolean = false;
  frm_nameGroup: FormGroup;
  frm_identityGroup: FormGroup;
  frm_adformatGroup: FormGroup;
  identity_submitted: boolean = false;
  loading_ad_forms: boolean = true;
  want_to_discard_ad: boolean = false;
  ad_is_in_edit_model: boolean = false;
  constructor(public adsService: AdsService, public pageService: PageService, public utilitiesService: UtilitiesService, private formBuilder: FormBuilder, private datePipe: DatePipe, protected router: Router, protected route: ActivatedRoute) {
    var _this = this;
    this.adsService.isAccountLoaded().subscribe((accountLoaded) => {
      if (accountLoaded) {
        if (_this.adsService.ad_account != null) {

        }
      }
    });
    this.ad_content_model = new AdContentForm();
  }

  ngOnInit() {

    this.frm_nameGroup = this.formBuilder.group(
      {
        name: ['', Validators.required]
      });

    this.frm_identityGroup = this.formBuilder.group(
      {
        page_id: ['', Validators.required]
      });

    this.frm_adformatGroup = this.formBuilder.group(
      {
        ad_format: ['', Validators.required],
      });

    this.loadCompaign();
  }

  get ident() { return this.frm_identityGroup.controls; }
  get AdName() { return this.frm_nameGroup.controls; }

  saveAdIdentity() {
    this.identity_submitted = true;
    if (this.ident.page_id.errors) {
      return;
    }
  }

  saveAdName() {

  }

  saveAdFormat() {
  }

  get isThisEditable() {
    if (this.ad_is_in_edit_model == true || this.ad_content_model.status == 'Draft' || this.ad_content_model.status == '' || this.ad_content_model.status == null) {
      return true;
    }
    return false
  }

  setSelectedPage(page: PageSummary) {
    this.ad_content_model.selected_page = page;
    this.ad_content_model.page_id = page.id;
  }

  setForm(compaignModel: AdCompaignForm, adId: number) {
    if (adId != null) {
      this.adsService.searchAdInCompaignForm(compaignModel.ads, adId).subscribe((ad_content: AdContentForm) => {
        if (ad_content) {
          this.ad_content_model = ad_content;
        } else {
          this.ad_content_model = new AdContentForm();
        }
      });
    } else {
      this.ad_content_model = new AdContentForm();
    }
    this.ad_formats = this.adsService.getAdFormats(this.compaign_model.selected_objective);
    this.setAdFormat(this.ad_content_model.ad_format);
    this.newCalltoAction();
    this.loading_ad_forms = false;
  }

  newCalltoAction() {
    this.adsService.searchCTA(this.ad_content_model.call_to_action).subscribe((cta: CallToAction) => {
      if (cta) {
        this.ad_content_model.selectedCTA = cta;
      } else {
        this.ad_content_model.selectedCTA = null;
      }
    });
  }

  setAdFormat(code: string) {
    if (code != null && code != '') {
      this.ad_formats.forEach((f: AdFormat) => {
        if (code == f.id) {
          f.selected = true;
        } else {
          f.selected = false;
        }
      });
    } else {
      code = this.ad_formats[0].id;
      this.setAdFormat(code);
    }
    this.ad_content_model.ad_format = code;
  }

  wantToDiscardAd(s: boolean) {
    this.want_to_discard_ad = s;
  }

  DiscardDraft() {
    var _this = this
    this.adsService.service.getProvider(this.adsService.provider).crudconfig.route_url = 'ads/ad/';
    this.adsService.WaitProcessingRequest(true, 'Discarding Ad!');
    return this.adsService.service.delete(this.adsService.provider, { id: this.ad_content_model.id }).subscribe(results => {
      _this.loading_compaign = false;
      this.adsService.WaitProcessingRequest(false, '');
      if (results.isSuccess()) {
        var data = results.getResultData();
        if (data == true) {
          _this.adsService.removeDeletedAd(this.ad_content_model.id);
          _this.router.navigateByUrl('adsmanager/compaigns/edit/' + this.ad_content_model.compaign_id);
          return;
        }
      }
    })
  }

  PublishAd() {
    var _this = this
    this.adsService.service.getProvider(this.adsService.provider).crudconfig.route_url = 'ads/pub-ad/';
    this.adsService.WaitProcessingRequest(true, 'Publishing Ad');
    return this.adsService.service.update(this.adsService.provider, null, { id: this.ad_content_model.id }).subscribe(results => {
      _this.loading_compaign = false;
      this.adsService.WaitProcessingRequest(false, '');
      if (results.isSuccess()) {
        var data = results.getResultData();
        if (data == true) {
          _this.adsService.UpdateAdStatus(_this.ad_content_model.id, 'Published');
          _this.ad_content_model.status = 'Published';
          return;
        }
      }
    })
  }

  updateAdContentModel(ad_model: AdContentForm) {
    this.ad_content_model = ad_model;
    var index = this.compaign_model.ads.findIndex(a => a.id === ad_model.id);
    this.compaign_model.ads[index] = ad_model;
    this.adsService.setCompaingInEdit(this.compaign_model);
  }

  loadCompaign(): any {
    var _this = this;
    this.loading_compaign = true;
    this.route.params.subscribe(params => {
      if (params.edition != undefined && params.edition > 0) {
        var get_compaign = this.adsService.CompaingInEdit;
        if (get_compaign != null && get_compaign.id == params.edition) {
          this.compaign_model = get_compaign;
          if (params.edit_ad != undefined && params.edit_ad > 0) {
            this.setForm(this.compaign_model, params.edit_ad);
          } else {
            this.setForm(this.compaign_model, null);
          }
        } else {
          this.adsService.service.getProvider(this.adsService.provider).crudconfig.route_url = 'ads/compaign/';
          return this.adsService.service.getone(this.adsService.provider, { id: params.edition }).subscribe(results => {
            _this.loading_compaign = false;
            if (results.isSuccess()) {
              var data = results.getResultData() as AdCompaign;
              if (data != null) {
                this.compaign_model = this.adsService.setCompaignModelForm(data);
                this.adsService.setCompaingInEdit(this.compaign_model);
                if (params.edit_ad != undefined && params.edit_ad > 0) {
                  this.setForm(this.compaign_model, params.edit_ad);
                } else {
                  this.setForm(this.compaign_model, null);
                }
              }
            }
          });
        }
      }
    });
  }

}
