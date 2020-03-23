import { Component, OnInit, Input } from '@angular/core';
import { ChatRoom } from '@app/messages/models/chat-room';
import { MessengerService } from '@app/messages/services/messenger.service';
import { Profile } from '@app/messages/models/profile';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-chat-search-people-widget',
  templateUrl: './chat-search-people-widget.component.html',
  styleUrls: ['./chat-search-people-widget.component.scss']
})
export class ChatSearchPeopleWidgetComponent implements OnInit {

  @Input() chatroom: ChatRoom;
  messengerService: MessengerService;
  search_query: string = '';
  loading_search: boolean;
  searchedPeopleList: Profile[] = [];
  constructor(messengerService: MessengerService) {
    this.messengerService = messengerService;
  }

  ngOnInit() {
  }

  addToChat(profile: Profile) {
    this.searchInProfiles(profile).subscribe(p => {
      if (!p && this.chatroom.profiles.length<1) {
        this.chatroom.profiles.push(profile);
      }
    });
    this.search_query = '';
    this.searchedPeopleList = [];
  }

  removeFromChat(profile: Profile) {
    this.chatroom.profiles.push(profile);
    this.chatroom.profiles = this.chatroom.profiles.filter((p: Profile) => p.user_id !== profile.user_id);
  }

  searchInProfiles(profile: Profile): Observable<Profile> {
    return of(this.chatroom.profiles.find((p: Profile) => p.user_id = profile.user_id));
  }

  search(): any {
    var _this = this;
    if (this.search_query.trim().length > 2) {
      this.loading_search = true;
      this.messengerService.service.getProvider(this.messengerService.provider).crudconfig.route_url = 'ms/search-people/';
      return this.messengerService.service.getall(this.messengerService.provider, { query: this.search_query.trim() }).subscribe(results => {
        _this.loading_search = false;
        if (results.isSuccess()) {
          _this.searchedPeopleList = results.getResultData() as Profile[];
        }
      });
    } else {
    }

  }

}
