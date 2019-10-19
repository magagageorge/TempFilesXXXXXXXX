import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { Profile } from '@app/models/profile/profile';
import { Contact } from '@app/models/contact';

export interface SelectedContacts {
  id: number;
}


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  CONNECT_CONTACTS: Contact[] = [];
  INVITE_CONTACTS: Contact[] = [];
  SELECTED_CONTACTS: SelectedContacts[] = [];
  service: CrudService;
  crudprovider: CrudProvider;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean = false;
  errors: string[];
  messages: string[];
  loading_connect_contacts: boolean = false;
  next_connect_contacts_page: number;
  loading_invite_contacts: boolean = false;
  next_invite_contacts_page: number;
  done_loading_connect_contacts: boolean = false;
  done_loading_invite_contacts: boolean = false;

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router) {
    this.next_connect_contacts_page = 1;
    this.next_invite_contacts_page = 1;
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
  }


  loadInviteContacts(params?: {}): any {
    this.loading_invite_contacts = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'contacts/invite-contacts/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_invite_contacts = false;
      if (results.isSuccess()) {
        _this.next_invite_contacts_page++;
        _this.INVITE_CONTACTS = results.getResultData();
        _this.done_loading_invite_contacts = true;
      }
    });
  }

  loadConnectContacts(params?: {}): any {
    this.loading_connect_contacts = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'contacts/connect-contacts/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_connect_contacts = false;
      if (results.isSuccess()) {
        _this.next_connect_contacts_page++;
        _this.CONNECT_CONTACTS = results.getResultData();
        _this.done_loading_connect_contacts = true;
      }
    });
  }

  UpdateSelectedConnectContact(event) {
    if (event.target.checked) {
      if (this.SELECTED_CONTACTS.indexOf({ id: parseInt(event.target.name) }) < 0) {
        this.SELECTED_CONTACTS.push({ id: parseInt(event.target.name) });
      }
    } else {
      this.SELECTED_CONTACTS = this.SELECTED_CONTACTS.filter((x: any) => x.id !== parseInt(event.target.name));
    }
  }

  UpdateSelectedInviteContact(event) {
    if (event.target.checked) {
      if (this.SELECTED_CONTACTS.indexOf({ id: parseInt(event.target.name) }) < 0) {
        this.SELECTED_CONTACTS.push({ id: parseInt(event.target.name) });
      }
    } else {
      this.SELECTED_CONTACTS = this.SELECTED_CONTACTS.filter((x: any) => x.id !== parseInt(event.target.name));
    }
  }

  SelectAllConnectContacts(event) {
    var _this = this;
    if (event.target.checked) {
      this.SELECTED_CONTACTS = [];
      this.CONNECT_CONTACTS.forEach(contact => {
        _this.SELECTED_CONTACTS.push({ id: contact.profile.user_id });
      });
    } else {
      this.SELECTED_CONTACTS = [];
    }
  }

  SelectAllInviteContacts(event) {
    var _this = this;
    if (event.target.checked) {
      this.SELECTED_CONTACTS = [];
      this.INVITE_CONTACTS.forEach(contact => {
        _this.SELECTED_CONTACTS.push({ id: contact.id });
      });
    } else {
      this.SELECTED_CONTACTS = [];
    }
  }

  checkSelectedContact(id: number) {
    var index = this.SELECTED_CONTACTS.findIndex(c => c.id === id);
    return index;
  }

  selectAllContacts(CONTACTS: Contact[]) {
    var _this = this;
    CONTACTS.forEach(contact => {
      _this.SELECTED_CONTACTS.push({ id: contact.id });
    });
  }

  connectContacts() {
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'contacts/connect-contacts/';
    this.service.create(this.provider, this.SELECTED_CONTACTS).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data == true) {
          _this.clearConnectedContacts();
          _this.router.navigateByUrl('/mynetwork/contacts/invite');
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  clearConnectedContacts() {
    var _this = this;
    this.SELECTED_CONTACTS.forEach(contact => {
      _this.CONNECT_CONTACTS = _this.CONNECT_CONTACTS.filter((x: Contact) => x.profile.user_id !== contact.id);
    });
    this.SELECTED_CONTACTS = [];
  }

  clearInvitedContacts() {
    var _this = this;
    this.SELECTED_CONTACTS.forEach(contact => {
      _this.INVITE_CONTACTS = _this.INVITE_CONTACTS.filter((x: Contact) => x.id !== contact.id);
    });
    this.SELECTED_CONTACTS = [];
  }


  inviteContacts() {
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'contacts/invite-contacts/';
    this.service.create(this.provider, this.SELECTED_CONTACTS).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data == true) {
          _this.clearInvitedContacts();
          _this.router.navigateByUrl('/mynetwork/contacts/import');
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
