import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule,routedComponents } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { ThemeModule } from '@app/theme/theme.module';
import { ChatThreadWidgetComponent } from './widgets/chat-thread-widget/chat-thread-widget.component';
import { ChatRoomsWidgetComponent } from './widgets/chat-rooms-widget/chat-rooms-widget.component';
import { WfLinkifyModule } from '@app/libs/wf-linkify';
import { WfLinkPreviewModule } from '@app/libs/wf-link-preview';
import { ChatFormWidgetComponent } from './widgets/chat-form-widget/chat-form-widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatSearchPeopleWidgetComponent } from './widgets/chat-search-people-widget/chat-search-people-widget.component';
import { ChatThreadHeadWidgetComponent } from './widgets/chat-thread-head-widget/chat-thread-head-widget.component';
import { ChatThreadMobileHeadWidgetComponent } from './widgets/chat-thread-mobile-head-widget/chat-thread-mobile-head-widget.component';
import { ChatRoomsMobileHeadWidgetComponent } from './widgets/chat-rooms-mobile-head-widget/chat-rooms-mobile-head-widget.component';
import { ChatRoomsRoomWidgetComponent } from './widgets/chat-rooms-room-widget/chat-rooms-room-widget.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportMessengerContentModalComponent } from './modals/report-messenger-content-modal/report-messenger-content-modal.component';
import { ConfirmDeleteContentModalComponent } from './modals/confirm-delete-content-modal/confirm-delete-content-modal.component';
import { ResizableModule } from 'angular-resizable-element';
import { MessageImagesWidgetComponent } from './widgets/message-images-widget/message-images-widget.component';
import { MessageImageModalViewComponent } from './modals/message-image-modal-view/message-image-modal-view.component';
import { MessageImageViewWidgetComponent } from './widgets/message-image-view-widget/message-image-view-widget.component';
import { MessageLinkViewWidgetComponent } from './widgets/message-link-view-widget/message-link-view-widget.component';

@NgModule({
  declarations: [...routedComponents, ChatRoomsWidgetComponent, ChatThreadWidgetComponent, ChatFormWidgetComponent, ChatSearchPeopleWidgetComponent, ChatThreadHeadWidgetComponent, ChatThreadMobileHeadWidgetComponent, ChatRoomsMobileHeadWidgetComponent, ChatRoomsRoomWidgetComponent, ReportMessengerContentModalComponent, ConfirmDeleteContentModalComponent, MessageImagesWidgetComponent, MessageImageModalViewComponent, MessageImageViewWidgetComponent, MessageLinkViewWidgetComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    ThemeModule,
    FormsModule,
    NgbModule,
    ResizableModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    WfLinkifyModule,
    WfLinkPreviewModule.forRoot()
  ],
  exports:[ChatRoomsWidgetComponent, ChatThreadWidgetComponent, ChatFormWidgetComponent, ChatSearchPeopleWidgetComponent,ChatThreadMobileHeadWidgetComponent, ChatRoomsMobileHeadWidgetComponent , ChatRoomsRoomWidgetComponent, MessageImagesWidgetComponent,MessageImageModalViewComponent, MessageImageViewWidgetComponent, MessageLinkViewWidgetComponent]
})
export class MessagesModule { }
