import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '@app/libs/wf-linkify';
import { LinkPreview } from '../..';
import { Subscription } from 'rxjs';
import { WfLinkPreviewService } from '../../services/wf-link-preview.service';
import { ImageIconsService } from '@app/services/image-icons.service';

@Component({
  selector: 'app-wb-links-preview',
  templateUrl: './wb-links-preview.component.html',
  styleUrls: ['./wb-links-preview.component.scss']
})
export class WbLinksPreviewComponent implements OnInit {
  @Input() link: Link;
  @Output() linkPreviewEmit = new EventEmitter<LinkPreview>();
  linkPreview: LinkPreview = null;

  // forwarded from the container
  @Input() color = 'primary'; // accent | warn
  showLoadingsProgress: boolean = false;

  loaded: boolean;
  hasError: boolean;
  private _subscription: Subscription;

  constructor(public linkPreviewService: WfLinkPreviewService,public imageIconsService:ImageIconsService) {
  }

  ngOnInit(): void {
    var _this = this;
    if (this.link && this.link.type == 'url' && !this.linkPreview) {
      // this.loaded = false;
      this._subscription = this.linkPreviewService
        .fetchLink(this.link.href)
        .subscribe(value => {
          if (value.title != '') {
            _this.linkPreviewEmit.emit(value);
            _this.linkPreview = value;
            this.processImageDimensions(_this.linkPreview);

          } else {
            _this.clearLinksPreview();
          }
        },
          error => this.hasError = true,
          () => this.loaded = true);
    }
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  clearLinksPreview() {
    this.linkPreview = null;
    this.linkPreviewEmit.emit(null);
  }

  processImageDimensions(lPreview: LinkPreview) {
    var _this = this;
    if (lPreview.image && lPreview.image != '' && lPreview.image != null) {
      let img = new Image();
      img.src = lPreview.image;
      img.onload = function (event) {
        let loadedImage: any = event.currentTarget;
        _this.linkPreview.imageWidth = loadedImage.width;
        _this.linkPreview.imageHeight = loadedImage.height;
        _this.linkPreview.image_wh_ratio = Math.round((_this.linkPreview.imageWidth / _this.linkPreview.imageHeight) * 10) / 10;
      }
    }

  }

}
