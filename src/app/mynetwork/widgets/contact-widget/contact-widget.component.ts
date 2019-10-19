import { Component, OnInit,Input } from '@angular/core';
import { Contact } from '@app/models/contact';

@Component({
  selector: 'app-contact-widget',
  templateUrl: './contact-widget.component.html',
  styleUrls: ['./contact-widget.component.scss']
})
export class ContactWidgetComponent implements OnInit {

  @Input() contact:Contact;
  @Input() i:number;
  constructor() { }

  ngOnInit() {
  }

}
