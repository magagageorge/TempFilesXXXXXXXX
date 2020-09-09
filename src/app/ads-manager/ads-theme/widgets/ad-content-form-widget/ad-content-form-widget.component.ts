import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AdsService } from '@app/ads-manager/services/ads.service';
import { AdContentForm, AdContentCard, AdContentCardForm } from '@app/ads-manager/models/ad-content';
import { CallToAction, call_to_actions } from '@app/ads-manager/models/call-to-action';
import { AdCompaignForm } from '@app/ads-manager/models/ad-compaign-form';
import { Observable, of } from 'rxjs';
import * as cloneDeep from 'lodash/cloneDeep';
import { ImageIconsService } from '@app/services/image-icons.service';
import { CommentDeleteModalComponent } from '@app/theme/modals/comment-delete-modal/comment-delete-modal.component';
import { URL_REGEXP } from '@app/libs/utilities/wb-utilities';
import { WfLinkPreviewService } from '@app/libs/wf-link-preview/services/wf-link-preview.service';
import { LinkPreview } from '@app/libs/wf-link-preview';
import { SysFunctions } from '@app/libs/utilities/common-functions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-content-form-widget',
  templateUrl: './ad-content-form-widget.component.html',
  styleUrls: ['./ad-content-form-widget.component.scss']
})
export class AdContentFormWidgetComponent implements OnInit, AfterViewInit {

  @ViewChild("AdCardsContainer", { static: false })
  AdCardsContainer: ElementRef;
  @Input() compaign: AdCompaignForm;
  @Input() ad_model: AdContentForm;
  @Output() adEditedEmit = new EventEmitter<AdContentForm>();
  ad_draft_model: AdContentForm = new AdContentForm();
  frm_adGroup: FormGroup;
  adGroup: FormGroup;
  submitted: boolean = false;
  callActions: CallToAction[];
  AdCardsContainerWidth: number;
  cardImageWidth: number;
  show_block_one: boolean = false;
  show_block_two: boolean = false;
  show_call_to_action: boolean = false;
  show_card_description: boolean = false;
  media_upload_to_card: AdContentCardForm = null;
  saving_ad: boolean;
  constructor(public adsService: AdsService, private formBuilder: FormBuilder, public imageIconsService: ImageIconsService, public linkPreviewService: WfLinkPreviewService, public router: Router) {
  }

  ngOnInit() {
    this.frm_adGroup = this.formBuilder.group(
      {
        name: ['', Validators.required],
        introduction: [''],
        destination_url: [''],
        call_to_action: ['', Validators.required],
        one_destination: [],
        cards: this.formBuilder.array([])
      });
    this.ad_draft_model = cloneDeep(this.ad_model);
    this.loadCards();
    this.checkFormValidations();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  get AdName() {
    return this.frm_adGroup.get('name');
  }

  get AdIntroduction() {
    return this.frm_adGroup.get('introduction');
  }

  get AdDestinationUrl() {
    return this.frm_adGroup.get('destination_url');
  }

  get AdCallToAction() {
    return this.frm_adGroup.get('call_to_action');
  }

  getDimensions() {
    this.AdCardsContainerWidth = this.AdCardsContainer.nativeElement.clientWidth;
    this.cardImageWidth = this.AdCardsContainerWidth * 0.23;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }

  get a() { return this.frm_adGroup.controls; }

  getCardGroup(i: any) {
    return this.frm_adGroup.get('cards').get(i);
  }

  saveAd() {
    this.checkFormValidations();
    this.submitted = true;
    if (this.saving_ad) {
      return;
    }
    if (this.frm_adGroup.invalid) {
      return;
    }
    var _this = this;
    const formData: any = new FormData();
    formData.append("compaign_id", _this.compaign.id);
    formData.append("name", _this.ad_draft_model.name);
    if(_this.ad_draft_model.id!=null){
      formData.append("id", _this.ad_draft_model.id);
    }
    formData.append("introduction", _this.ad_draft_model.introduction);
    formData.append("destination_url", _this.ad_draft_model.destination_url);
    formData.append("one_destination", _this.ad_draft_model.one_destination);
    formData.append("ad_cards", JSON.stringify(_this.ad_draft_model.cards));
    formData.append("call_to_action", _this.ad_draft_model.call_to_action);
    formData.append("ad_format", _this.ad_draft_model.ad_format);
    formData.append("page_id", _this.ad_draft_model.page_id);
    _this.saving_ad = true;
    _this.submitted = false;

    this.adsService.service.getProvider(this.adsService.provider).crudconfig.route_url = 'ads/ad/';
    if (this.ad_draft_model.id > 0) {
      this.adsService.WaitProcessingRequest(true,'Saving Changes!');
      return this.adsService.service.update(this.adsService.provider, formData, { id: _this.ad_draft_model.id }).subscribe(results => {
        _this.saving_ad = false;
        _this.submitted = false;
        _this.adsService.WaitProcessingRequest(false,'');
        if (results.isSuccess()) {
          var data = results.getResultData();
          if (data.done == true && data.adcontent != null) {
            _this.adEditedEmit.emit(_this.adsService.setAdContentForm(data.adcontent));
            _this.adsService.ad_form_open = false;
          }
        }
      });
    } else {
      this.adsService.WaitProcessingRequest(true,'Saving Your Ad!');
      return this.adsService.service.create(this.adsService.provider, formData).subscribe(results => {
        _this.saving_ad = false;
        _this.submitted = false;
        _this.adsService.WaitProcessingRequest(false,'');
        if (results.isSuccess()) {
          var data = results.getResultData();
          if (data.done == true && data.adcontent != null) {
            _this.adsService.CompaingInEdit.ads.push(_this.adsService.setAdContentForm(data.adcontent));
            _this.router.navigateByUrl('adsmanager/compaigns/edit/' + data.adcontent.compaign_id + '/ad/' + data.adcontent.id);
            _this.adsService.ad_form_open = false;
          }
        }
      });
    }
  }

  /* Function to fetch the ad url information and automatically fill the form inputs */
  crawlLink() {
    var _this = this;
    if (this.a.destination_url.invalid == false && _this.ad_draft_model.cards.length == 1) {
      this.linkPreviewService.fetchLink(this.ad_draft_model.destination_url.trim()).subscribe((lPreview: LinkPreview) => {
        if (lPreview) {
          _this.ad_draft_model.cards[0].headline = lPreview.title;
          _this.ad_draft_model.cards[0].description = lPreview.description;
          if (lPreview.image!=null && lPreview.image.trim() != '') {
            var loadedImage = new Image();
            loadedImage.setAttribute('crossorigin', 'anonymous');
            loadedImage.onload = (event) => {
              if (event) {
                SysFunctions.ImageUrlToBlob(lPreview.image.trim()).subscribe(blob => {
                  SysFunctions.BlobtoDataURL(blob).then(base64Url => {
                    var imgFile = SysFunctions.DataUrlToFile(base64Url);
                    _this.ad_draft_model.cards[0].media = base64Url;
                    _this.ad_draft_model.cards[0].media_file = imgFile;
                    _this.ad_draft_model.cards[0].media_height = loadedImage.height;
                    _this.ad_draft_model.cards[0].media_width = loadedImage.width;
                    _this.ad_draft_model.cards[0].media_wh_ratio = loadedImage.width / loadedImage.height;
                  });
                });
              }
            }
            loadedImage.src = lPreview.image.trim();
          }
        }
      });
    }

    if (_this.ad_draft_model.cards.length > 0 && ((_this.ad_draft_model.destination_url.trim() != '' && this.a.destination_url.invalid == false) || _this.ad_draft_model.destination_url.trim() == '')) {
      if (_this.ad_draft_model.one_destination == true) {
        _this.ad_draft_model.cards.forEach(card => {
          card.destination_url = _this.ad_draft_model.destination_url;
        });
      }
    }
  }

  oneDestChanged() {
    var _this = this;
    if (_this.ad_draft_model.cards.length > 0 && ((_this.ad_draft_model.destination_url.trim() != '' && this.a.destination_url.invalid == false) || _this.ad_draft_model.destination_url.trim() == '')) {
      _this.ad_draft_model.cards.forEach(card => {
        if (_this.ad_draft_model.one_destination == true) {
          card.destination_url = _this.ad_draft_model.destination_url;
        } else {
          card.destination_url = '';;
        }
      });
    }
  }

  loadCards() {
    var no_cards = 1;
    if (this.ad_draft_model.cards.length > 0) {
      for (var i = 1; i <= this.ad_draft_model.cards.length; i++) {
        this.cardFormGroup(i);
      }
    } else {
      if (this.ad_draft_model.ad_format == 'CAROUSEL_IMAGE') {
        no_cards = 2;
      }
      for (var i = 1; i <= no_cards; i++) {
        this.ad_draft_model.cards.push(this.createCardForm(i));
      }
    }
    this.showBlocks();
    this.checkFormValidations();
  }

  createCardForm(sn: any): AdContentCardForm {
    var newcard = new AdContentCardForm();
    newcard.sn = parseInt(sn);
    newcard.media_file = null;
    if (this.ad_draft_model.one_destination && this.ad_draft_model.destination_url.trim() != '') {
      newcard.destination_url = this.ad_draft_model.destination_url.trim();
    }
    this.cardFormGroup(sn);
    return newcard;
  }

  cardFormGroup(id: any) {
    const cards = this.formBuilder.group({
      headline: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control(''),
      destination_url: this.formBuilder.control('', [Validators.required, Validators.pattern(URL_REGEXP)])
    });
    this.FBuilderCards.push(cards);
  }

  get FBuilderCards() {
    return this.frm_adGroup.get('cards') as FormArray;
  }

  get cards() {
    return this.frm_adGroup.get('cards') as FormArray;
  }


  testCards() {

  }

  showBlocks() {
    if (this.ad_draft_model.ad_format == 'SINGLE_IMAGE') {
      this.show_block_one = true;
      this.show_block_two = true;
      this.show_call_to_action = true;
      this.ad_draft_model.one_destination = true;
      this.oneDestChanged();
    } else if (this.ad_draft_model.ad_format == 'CAROUSEL_IMAGE') {
      this.show_block_one = true;
      this.show_block_two = true;
      this.show_call_to_action = true;
    } else if (this.ad_draft_model.ad_format == 'TEXT_AD') {
      this.show_block_one = false;
      this.show_block_two = true;
      this.show_call_to_action = false;
    } else { }
  }

  checkDestUrl(): boolean {
    if (this.show_block_one == true && this.ad_draft_model.cards.length == 1) {
      if (this.ad_draft_model.destination_url.trim() == '') {
        return true;
      }
    }
    return false;
  }

  checkFormValidations() {
    if (this.ad_draft_model.ad_format == 'SINGLE_IMAGE') {
      this.AdIntroduction.setValidators([Validators.required]);
      this.AdDestinationUrl.setValidators([Validators.required, Validators.pattern(URL_REGEXP)]);
      this.AdCallToAction.setValidators([Validators.required]);
      for (var i = 0; i < this.cards.length; i++) {
        if (i == 0) {
          this.cards.controls[i].get('headline').setValidators([Validators.required]);
          this.cards.controls[i].get('description').clearValidators();
          this.cards.controls[i].get('destination_url').clearValidators();
        } else {
          this.cards.controls[i].get('headline').clearValidators();
          this.cards.controls[i].get('description').clearValidators();
          this.cards.controls[i].get('destination_url').clearValidators();
        }
      }
    } else if (this.ad_draft_model.ad_format == 'CAROUSEL_IMAGE') {
      this.AdIntroduction.setValidators([Validators.required]);
      this.AdDestinationUrl.setValidators([Validators.required, Validators.pattern(URL_REGEXP)]);
      this.AdCallToAction.setValidators([Validators.required]);
      for (var i = 0; i < this.cards.length; i++) {
        this.cards.controls[i].get('headline').setValidators([Validators.required]);
        this.cards.controls[i].get('description').clearValidators();
        this.cards.controls[i].get('destination_url').setValidators([Validators.required, Validators.pattern(URL_REGEXP)]);
      }
    } else if (this.ad_draft_model.ad_format == 'TEXT_AD') {
      this.AdIntroduction.clearValidators();
      this.AdDestinationUrl.clearValidators();
      this.AdCallToAction.clearValidators();
      for (var i = 0; i < this.cards.length; i++) {
        if(i==0){
          this.cards.controls[i].get('headline').setValidators([Validators.required]);
          this.cards.controls[i].get('description').setValidators([Validators.required]);
          this.cards.controls[i].get('destination_url').setValidators([Validators.required, Validators.pattern(URL_REGEXP)]);  
        }else{
          this.cards.controls[i].get('headline').clearValidators();
          this.cards.controls[i].get('description').clearValidators();
          this.cards.controls[i].get('destination_url').clearValidators();
        }
      }

    } else { }

    this.AdIntroduction.updateValueAndValidity();
    this.AdDestinationUrl.updateValueAndValidity();
    this.AdCallToAction.updateValueAndValidity();
    for (var i = 0; i < this.cards.length; i++) {
      this.cards.controls[i].get('headline').updateValueAndValidity();
      this.cards.controls[i].get('description').updateValueAndValidity();
      this.cards.controls[i].get('destination_url').updateValueAndValidity();
    }
  }

  adMoreCard() {
    if (this.ad_draft_model.cards.length < 10) {
      var sn = this.ad_draft_model.cards[this.ad_draft_model.cards.length - 1].sn + 1;
      this.ad_draft_model.cards.push(this.createCardForm(sn));
    }
  }

  removeCard(card: AdContentCardForm, index: number) {
    this.cards.removeAt(index);
    this.ad_draft_model.cards = this.ad_draft_model.cards.filter((c: AdContentCardForm) => c.sn !== card.sn);
  }

  removeCardImage(card: AdContentCardForm) {
    if (card) {
      card.media_file = null;
      card.media = '';
      card.media_width = null;
      card.media_height = null;
      card.media_wh_ratio = 0;
    }
  }

  newCalltoAction() {
    this.adsService.searchCTA(this.ad_draft_model.call_to_action).subscribe((cta: CallToAction) => {
      if (cta) {
        this.ad_draft_model.selectedCTA = cta;
      } else {
        this.ad_draft_model.selectedCTA = null;
      }
    });
  }

  SelectMediaUpload(card: AdContentCardForm): void {
    var elem: HTMLElement = document.querySelector('#media_upload_input_id');
    if (elem != null) {
      elem.click();
    }

    if (card != null) {
      this.media_upload_to_card = card;
    }
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      //this.filesToUpload = this.filesToUpload.concat(<Array<File>>event.target.files);
      var filesAmount = event.target.files.length;
      let files = event.target.files;
      for (let i = 0; i < filesAmount; i++) {
        var f = files[i];
        if (this.adsService.validateFile(f)) {
          // Process Valid Files.
          if (f.type.match('image.*')) {
            this.PushPreviewImages(<File>f);
          } else {

          }
        } else {
          continue;
        }
      }
    }
  }

  PushPreviewImages(f: File) {
    var fileReader = new FileReader();
    var i_url;
    fileReader.onload = (e) => {
      if (e) {
        i_url = (<FileReader>e.target).result;
        var loadedImage = new Image();
        loadedImage.onload = (event) => {
          if (event) {
            this.searchAdCard(this.media_upload_to_card).subscribe((card: AdContentCardForm) => {
              if (card) {
                card.media_file = f;
                card.media = i_url;
                card.upload_media = true;
                card.media_width = loadedImage.width;
                card.media_height = loadedImage.height;
                card.media_wh_ratio = card.media_width / card.media_height;
              }
              this.media_upload_to_card = null;
            });
          }
        }
        loadedImage.src = i_url;
      }
    }
    fileReader.readAsDataURL(<File>f);
  }

  searchAdCard(card: AdContentCardForm): Observable<AdContentCardForm> {
    return of(this.ad_draft_model.cards.find((c: AdContentCardForm) => c.sn === card.sn));
  }

}
