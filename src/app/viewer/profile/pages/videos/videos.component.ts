import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  menu_tab_name: string = 'videos';
  urlviwerService: UrlViewerService;
  constructor(urlviwerService: UrlViewerService, private title: Title, private meta: Meta) {
    this.urlviwerService = urlviwerService;
  }


  ngOnInit() {
    this.title.setTitle(this.urlviwerService.PPVIEWER.profile.name + ' - Videos | Woorbi');
  }

}
