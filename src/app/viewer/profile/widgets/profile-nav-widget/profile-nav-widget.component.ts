import { Component, OnInit, Input } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-profile-nav-widget',
  templateUrl: './profile-nav-widget.component.html',
  styleUrls: ['./profile-nav-widget.component.scss']
})
export class ProfileNavWidgetComponent implements OnInit {

  @Input() tab:string; 
  urlViewerService:UrlViewerService;
  constructor(urlViewerService:UrlViewerService) {
    this.urlViewerService=urlViewerService;
   }

  ngOnInit() {
  }

}
