import { Component, OnInit, Input } from '@angular/core';
import { ImageIconsService } from '@app/services/image-icons.service';
import { ShowAdContent } from '@app/models/ads/ad-models';

@Component({
  selector: 'app-ad-text-view-widget',
  templateUrl: './ad-text-view-widget.component.html',
  styleUrls: ['./ad-text-view-widget.component.scss']
})
export class ViewAdTextWidgetComponent implements OnInit {

  @Input() ad_model: ShowAdContent;
  selectedShowType: any = null;
  display_types: any[] = [{ code: 'RC', name: 'Right Column' }, { code: 'IFB', name: 'Feed Banner' }, { code: 'TBS', name: 'Top Banner(Small)' }, { code: 'TBL', name: 'Top Banner(Large)' }];
  constructor(public imageIconsService: ImageIconsService) { }

  ngOnInit() {
    this.ShowType(this.display_types[0]);
  }

  ShowType(type: any) {
    this.selectedShowType = type;
  }

}
