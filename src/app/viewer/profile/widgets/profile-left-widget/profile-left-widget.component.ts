import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';


@Component({
  selector: 'app-profile-left-widget',
  templateUrl: './profile-left-widget.component.html',
  styleUrls: ['./profile-left-widget.component.scss']
})
export class ProfileLeftWidgetComponent implements OnInit {

  urlviewerService: UrlViewerService;
  constructor(urlviewerService: UrlViewerService) {
    this.urlviewerService = urlviewerService;
  }

  ngOnInit() {
  }

}
