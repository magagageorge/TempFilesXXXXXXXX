import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@app/services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  contactsService:ContactsService
  router:Router;
  title:string="Invite Contacts";
  parent_route:string="mynetwork";
  constructor(contactsService:ContactsService,router:Router) { 
    this.contactsService=contactsService;
    this.router=router;
  }

  ngOnInit() {
    this.contactsService.loadInviteContacts();
  }

  submit() {
    this.contactsService.inviteContacts();
 }

 redirect_to_import(){
  this.router.navigateByUrl('/mynetwork/contacts/import');
}

}
