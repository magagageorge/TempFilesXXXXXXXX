import { Component, OnInit, Input } from '@angular/core';
import { AdContentForm, AdContentCardForm } from '@app/ads-manager/models/ad-content';
import { ImageIconsService } from '@app/services/image-icons.service';

@Component({
  selector: 'app-ad-text-preview-widget',
  templateUrl: './ad-text-preview-widget.component.html',
  styleUrls: ['./ad-text-preview-widget.component.scss']
})
export class AdTextPreviewWidgetComponent implements OnInit {

  @Input() ad_model: AdContentForm;
  selectedShowType: any = null;
  display_types: any[] = [{ code: 'RC', name: 'Right Column' }, { code: 'IFB', name: 'Feed Banner' }, { code: 'TBS', name: 'Top Banner(Small)' }, { code: 'TBL', name: 'Top Banner(Large)' }];
  constructor(public imageIconsService: ImageIconsService) { }

  ngOnInit() {
    this.ShowType(this.display_types[0]);
  }

  ShowType(type: any) {
    this.selectedShowType = type;
  }

  getHeadLine(card: AdContentCardForm) {
    if (card.headline.trim() != '') {
      return card.headline;
    }
    return 'This is your Ad Headline';
  }

  getDescription(card: AdContentCardForm) {
    if (card.description.trim() != '') {
      return card.description;
    }
    return 'This is your Ad Description';
  }

  getUrl(card: AdContentCardForm) {
    if (card.destination_url.trim() != '') {
      return card.destination_url;
    }
    return 'http://www.example.com';
  }

  getImage(card: AdContentCardForm) {
    if (card.media != null && card.media != '') {
      return card.media;
    }
    return this.imageIconsService.company_icon;
  }

}
