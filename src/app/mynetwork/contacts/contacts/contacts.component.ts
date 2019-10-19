import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@app/services/contacts.service';
import {FormsModule,ReactiveFormsModule,FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { Contact } from '@app/models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  form: FormGroup;
  contacts:Contact[];
  formBuilder: FormBuilder;
  contactsService:ContactsService;
  router:Router;
  title:string="Contacts";
  parent_route:string="mynetwork";
  constructor(contactsService:ContactsService,router:Router,formBuilder: FormBuilder){ 
    this.contactsService=contactsService;
    this.formBuilder=formBuilder;
    this.router=router;
  }

  ngOnInit() {
        this.form = this.formBuilder.group({
        });
    this.contactsService.loadConnectContacts();   
    this.contactsService.selectAllContacts(this.contactsService.CONNECT_CONTACTS);
  }

  submit() {
     this.contactsService.connectContacts();
  }

  redirect_to_invites(){
    this.router.navigateByUrl('/mynetwork/contacts/invite');
  }

}
