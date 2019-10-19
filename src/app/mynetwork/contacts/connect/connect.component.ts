import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@app/services/contacts.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  title:string="Contacts";
  parent_route:string="mynetwork";
  contactsServive:ContactsService
  constructor(contactsServive:ContactsService) { 
    this.contactsServive=contactsServive;
  }

  ngOnInit() {
    this.contactsServive.loadConnectContacts();
  }

}
