import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditPageService } from '@app/services/edit-page.service';
import { PageUserProfile } from '@app/viewer/page/models/page-models';
import { Observable, of } from 'rxjs';

export const PAGE_USERROLES: any[] = [
  { name: 'Admin', description: '' },
  { name: 'Editor', description: '' },
  { name: 'Moderator', description: '' },
  { name: 'Advertiser', description: '' },
  { name: 'Analyst', description: '' }
];

@Component({
  selector: 'app-page-admins',
  templateUrl: './page-admins.component.html',
  styleUrls: ['./page-admins.component.scss']
})
export class PageAdminsComponent implements OnInit {

  search_query: string = '';
  new_userrole: string = 'Editor';
  page_users: any[] = [];
  loading_users: boolean = false;
  loading_search: boolean = false;
  loading_new_user: boolean = false;
  submitting_new_user: boolean = false;
  user_roles: any[] = PAGE_USERROLES;
  page_id: number;
  selected_profile: PageUserProfile = null;
  searched_profiles: PageUserProfile[] = [];
  want_to_delete_user: number = null;
  constructor(public editPageService: EditPageService) { }

  ngOnInit() {

    if (this.editPageService.urlViewerService.PPVIEWER.page != null) {
      this.page_id = this.editPageService.urlViewerService.PPVIEWER.page.id;
      this.loadUsers({ id: this.editPageService.urlViewerService.PPVIEWER.page.id });
    }

  }
  searchUser() {
    var _this = this;
    if (this.search_query.trim().length > 2) {
      this.editPageService.service.getProvider(this.editPageService.provider).crudconfig.route_url = 'page/search-page-users-profile/';
      _this.loading_search = true;
      _this.searched_profiles = [];
      return this.editPageService.service.getall(this.editPageService.provider, { query: this.search_query.trim() }).subscribe(results => {
        _this.loading_search = false;
        if (results.isSuccess()) {
          _this.searched_profiles = results.getResultData() as PageUserProfile[];
        }
      });
    } else {
    }
  }

  removeSelectedUser() {
    this.selected_profile = null;
    this.searched_profiles = [];
  }

  SelectThis(profile: PageUserProfile) {
    this.selected_profile = profile;
    this.search_query = '';
    this.searched_profiles = [];
  }

  setUserInEdit(id: number) {
    this.getUserFromList(id).subscribe((user: any) => {
      if (user) {
        user.in_edit = true;
      }
    });
  }


  getUserFromList(id: number): Observable<any> {
    return of(this.page_users.find((u: any) => u.id == id));
  }

  saveUserEdit(page_user: any) {
    var _this = this;
    var formData: any = new FormData();
    if (page_user != null && page_user.profile != null) {
      formData.append("role", page_user.role);
    }
    this.editPageService.provider = this.editPageService.getConfigValue('forms.getall.provider');
    this.editPageService.service.getProvider(this.editPageService.provider).crudconfig.route_url = 'page/page-users/';
    return this.editPageService.service.update(this.editPageService.provider, formData, { id: page_user.id }).subscribe(results => {
      _this.loading_new_user = false;
      if (results.isSuccess()) {
        var data = results.getResultData();
        if (data.done == true && data.user != null) {
          //_this.page_users.push(data.user);
        }
      }
    });
  }

  cancelUserEdit(id: number) {
    this.getUserFromList(id).subscribe((user: any) => {
      if (user) {
        user.in_edit = false;
      }
    });
  }

  RemoveUser() {
    var _this = this;
    this.editPageService.provider = this.editPageService.getConfigValue('forms.getall.provider');
    this.editPageService.service.getProvider(this.editPageService.provider).crudconfig.route_url = 'page/page-users/';
    //this.loading_users = true;
    return this.editPageService.service.delete(this.editPageService.provider, { id: _this.want_to_delete_user }).subscribe(results => {
      //_this.loading_users = false;
      if (results.isSuccess()) {
        var data = results.getResultData();
        if (data == true) {
          _this.page_users = _this.page_users.filter((user: any) => user.id !== this.want_to_delete_user);
        }
      } else {
      }
      _this.want_to_delete_user = null;
    });
  }

  cancelRemoveUser() {
    this.want_to_delete_user = null;
  }

  wantToRemoveUser(id: number) {
    this.want_to_delete_user = id;
  }

  loadUsers(params?: {}): any {
    var _this = this;
    this.editPageService.provider = this.editPageService.getConfigValue('forms.getall.provider');
    this.editPageService.service.getProvider(this.editPageService.provider).crudconfig.route_url = 'page/page-users/';
    this.loading_users = true;
    return this.editPageService.service.getall(this.editPageService.provider, params).subscribe(results => {
      _this.loading_users = false;
      if (results.isSuccess()) {
        var data = results.getResultData();
        _this.page_users = data;
      }
    });
  }

  addUser() {
    var _this = this;
    var formData: any = new FormData();
    if (this.submitting_new_user) {
      return;
    }
    if (this.selected_profile != null) {
      formData.append("profile_id", this.selected_profile.user_id);
      formData.append("page_id", this.page_id);
      formData.append("role", this.new_userrole);
    } else {
      return;
    }
    this.submitting_new_user = true;

    this.editPageService.provider = this.editPageService.getConfigValue('forms.getall.provider');
    this.editPageService.service.getProvider(this.editPageService.provider).crudconfig.route_url = 'page/page-users/';
    this.loading_new_user = true;
    return this.editPageService.service.create(this.editPageService.provider, formData).subscribe(results => {
      _this.loading_new_user = false;
      _this.selected_profile = null;
      _this.submitting_new_user = false;
      if (results.isSuccess()) {
        var data = results.getResultData();
        if (data.done == true && data.user != null) {
          _this.page_users.push(data.user);
        }
      }
    });
  }


}
