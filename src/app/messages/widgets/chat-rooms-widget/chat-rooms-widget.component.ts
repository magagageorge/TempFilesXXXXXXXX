import { Component, OnInit } from '@angular/core';
import { MessengerService } from '@app/messages/services/messenger.service';
import { ChatRoom } from '@app/messages/models/chat-room';

@Component({
  selector: 'app-chat-rooms-widget',
  templateUrl: './chat-rooms-widget.component.html',
  styleUrls: ['./chat-rooms-widget.component.scss']
})
export class ChatRoomsWidgetComponent implements OnInit {

  messengerService: MessengerService;
  search_query: string = '';
  constructor(messengerService: MessengerService) {
    this.messengerService = messengerService;
  }

  ngOnInit() {
  }

  clearSearch() {
    this.search_query = '';
  }


  onScrollDown() {
    if (this.search_query.trim() != '') {
      this.search();
    }else{
      this.messengerService.loadChatRooms({ page: this.messengerService.next_chatrooms_page });
    }
  }

  search() {
    var _this = this;
    if (this.search_query.trim() == '') {
      return;
    }

    this.filterChatRooms(this.search_query.trim());
    this.messengerService.loading_more_chatrooms = true;
    this.messengerService.service.getProvider(this.messengerService.provider).crudconfig.route_url = 'ms/c-rooms/';
    return this.messengerService.service.getall(this.messengerService.provider, { search_query: this.search_query }).subscribe(results => {
      _this.messengerService.loading_more_chatrooms = false;
      if (results.isSuccess()) {
        var chatrooms = results.getResultData() as ChatRoom[];
        if (chatrooms.length) {
          _this.populateSearchResults(chatrooms);
          _this.messengerService.setDefaultChatRoom();
          _this.messengerService.next_chatrooms_page++;
        } else {
          _this.messengerService.reached_end_of_chatrooms = true;
        }
      }
    });
  }

  /** Filter chatrooms and add to Filtered list one the user type in the search box */
  filterChatRooms(query: string) {
    var _this = this;
    this.messengerService.FILTERED_CHATROOMS = [];
    this.messengerService.CHATROOMS.forEach((chatroom: ChatRoom) => {
      chatroom.profiles.forEach(user => {
        if (user.profile && user.profile.my_profile != true && user.profile.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
          _this.messengerService.FILTERED_CHATROOMS.push(chatroom);
        }
      });
    });
  }

  populateSearchResults(chatrooms: ChatRoom[]) {
    var _this = this;
    chatrooms.forEach((chatroom: ChatRoom) => {
      _this.messengerService.searchFilteredChatRoom(chatroom.id).subscribe(cRoom => {
        if (cRoom) { /** If Already exists do nothing */ }
        else {
          _this.messengerService.FILTERED_CHATROOMS.push(chatroom);
        }
      });
    });
  }

}
