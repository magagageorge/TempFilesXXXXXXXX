import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-sites',
  templateUrl: './social-sites.component.html',
  styleUrls: ['./social-sites.component.scss']
})
export class SocialSitesComponent implements OnInit {
  title:string="Social Sites";
  parent_route:string="settings";
  constructor() { }

  ngOnInit() {
  }

}
