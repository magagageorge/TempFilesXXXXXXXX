import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdsService } from '@app/ads-manager/services/ads.service';
import { AdContentForm, AdContentCard, AdContentCardForm } from '@app/ads-manager/models/ad-content';
import { CallToAction, call_to_actions } from '@app/ads-manager/models/call-to-action';
import { AdCompaignForm } from '@app/ads-manager/models/ad-compaign-form';
import { Observable, of } from 'rxjs';
import { ImageIconsService } from '@app/services/image-icons.service';
import { CommentDeleteModalComponent } from '@app/theme/modals/comment-delete-modal/comment-delete-modal.component';
import { URL_REGEXP } from '@app/libs/utilities/wb-utilities';
import { WfLinkPreviewService } from '@app/libs/wf-link-preview/services/wf-link-preview.service';
import { LinkPreview } from '@app/libs/wf-link-preview';
import { SysFunctions } from '@app/libs/utilities/common-functions';


@Component({
  selector: 'app-ad-content-form-widget',
  templateUrl: './ad-content-form-widget.component.html',
  styleUrls: ['./ad-content-form-widget.component.scss']
})
export class AdContentFormWidgetComponent implements OnInit, AfterViewInit {

  @ViewChild("AdCardsContainer", { static: false })
  AdCardsContainer: ElementRef;
  @Input() compaign: AdCompaignForm;
  frm_adGroup: FormGroup;
  ad_model: AdContentForm;
  submitted: boolean = false;
  callActions: CallToAction[];
  AdCardsContainerWidth: number;
  cardImageWidth: number;
  show_block_one: boolean = false;
  show_block_two: boolean = false;
  show_call_to_action: boolean = false;
  show_card_description: boolean = false;
  media_upload_to_card: AdContentCardForm = null;
  constructor(public adsService: AdsService, private formBuilder: FormBuilder, public imageIconsService: ImageIconsService, public linkPreviewService: WfLinkPreviewService) {
  }

  ngOnInit() {
    this.loadCards();
    this.frm_adGroup = this.formBuilder.group(
      {
        name: [],
        introduction: ['', Validators.required],
        description: [],
        destination_url: ['', [Validators.required, Validators.pattern(URL_REGEXP)]],
        headline: ['', Validators.required],
        call_to_action: ['', Validators.required],
        one_destination: [],
      });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
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

  saveAd() {
    if (this.submitted) {
      return;
    }
    this.submitted = true;
  }

  crawlLink() {
    var _this = this;
    if (this.a.destination_url.invalid == false) {
      this.linkPreviewService.fetchLink(this.ad_model.destination_url.trim()).subscribe((lPreview: LinkPreview) => {
        if (lPreview) {
          this.ad_model.cards[0].headline = lPreview.title;
          this.ad_model.cards[0].description = lPreview.description;
          if (lPreview.image.trim() != '') {
            var loadedImage = new Image();
            loadedImage.setAttribute('crossorigin', 'anonymous'); // works for me
            var base64Url = '';
            loadedImage.onload = (event) => {
              if (event) {
                SysFunctions.ImageUrlToBlob(lPreview.image.trim()).subscribe(blob => {
                  SysFunctions.BlobtoDataURL(blob).then(base64Url => {
                    var imgFile = SysFunctions.DataUrlToFile(base64Url);
                    _this.ad_model.cards[0].media = base64Url;
                    _this.ad_model.cards[0].media_file = imgFile;
                    _this.ad_model.cards[0].media_height = lPreview.imageHeight;
                    _this.ad_model.cards[0].media_width = lPreview.imageWidth;
                    _this.ad_model.cards[0].media_wh_ratio = lPreview.image_wh_ratio;
                  });
                });
              }
            }
            loadedImage.src = lPreview.image.trim();
          }
        }
      });
    }
  }

  loadCards() {
    this.loadCallToActions();
    this.ad_model = new AdContentForm();
    var no_cards = 1;

    if (this.compaign.ad_format == 'CAROUSEL_IMAGE') {
      no_cards = 2;
    }

    for (var i = 1; i <= no_cards; i++) {
      this.ad_model.cards.push(this.createCardForm(i));
    }
    this.showBlocks();
  }

  createCardForm(id: any): AdContentCardForm {
    var newcard = new AdContentCardForm();
    newcard.id = parseInt(id);
    newcard.media_file = null;
    return newcard;
  }

  showBlocks() {
    if (this.compaign.ad_format == 'SINGLE_IMAGE') {
      this.show_block_one = true;
      this.show_block_two = true;
      this.show_call_to_action = true;
    } else if (this.compaign.ad_format == 'CAROUSEL_IMAGE') {
      this.show_block_one = true;
      this.show_block_two = true;
      this.show_call_to_action = true;
    } else if (this.compaign.ad_format == 'TEXT_AD') {
      this.show_block_one = false;
      this.show_block_two = true;
      this.show_call_to_action = false;
    } else { }
  }

  checkDestUrl(): boolean {
    if (this.show_block_one == true && this.ad_model.cards.length == 1) {
      if (this.ad_model.destination_url.trim() == '') {
        return true;
      }
    }
    return false;
  }

  adMoreCard() {
    if (this.ad_model.cards.length < 10) {
      var id = this.ad_model.cards[this.ad_model.cards.length - 1].id + 1;
      this.ad_model.cards.push(this.createCardForm(id));
    }
  }

  removeCard(card: AdContentCardForm) {
    this.ad_model.cards = this.ad_model.cards.filter((c: AdContentCardForm) => c.id !== card.id);
  }

  removeCardImage(card: AdContentCardForm) {
    if (card) {
      card.media_file = null;
      card.media = null;
      card.media_width = null;
      card.media_height = null;
      card.media_wh_ratio = 0;
    }
  }

  loadCallToActions() {
    this.callActions = call_to_actions;
  }

  newCalltoAction() {
    this.searchCTA().subscribe((cta: CallToAction) => {
      if (cta) {
        this.ad_model.selectedCTA = cta;
      } else {
        this.ad_model.selectedCTA = null;
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

  searchCTA(): Observable<CallToAction> {
    return of(this.callActions.find((cta: CallToAction) => cta.code === this.ad_model.call_to_action));
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
            //this.image_preview_urls.push({ url: i_url, width: loadedImage.width, height: loadedImage.height, file: <File>f });
            this.searchAdCard(this.media_upload_to_card).subscribe((card: AdContentCardForm) => {
              if (card) {
                card.media_file = f;
                card.media = i_url;
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
    return of(this.ad_model.cards.find((c: AdContentCardForm) => c.id === card.id));
  }

}
