import { Component, OnInit } from '@angular/core';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  menu_tab_name: string = 'photos';
  urlviwerService: UrlViewerService;
  constructor(urlviwerService: UrlViewerService, private title: Title, private meta: Meta) {
    this.urlviwerService = urlviwerService;
  }


  ngOnInit() {
    this.title.setTitle(this.urlviwerService.PPVIEWER.profile.name + ' - Photos | Woorbi');
  }

}
