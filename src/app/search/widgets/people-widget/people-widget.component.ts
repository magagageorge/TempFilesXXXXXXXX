import { Component, OnInit,Input } from '@angular/core';
import { Profile } from '@app/models/profile/profile';

@Component({
  selector: 'app-people-widget',
  templateUrl: './people-widget.component.html',
  styleUrls: ['./people-widget.component.scss']
})
export class PeopleWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
