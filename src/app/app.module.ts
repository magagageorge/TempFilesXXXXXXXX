import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxImageCompressService } from 'ngx-image-compress';

import { AUTH_TOKEN_CLASS, AuthJWTToken, AuthModule } from './auth';
import { EmailPassAuthProvider } from './auth/providers';
import { SocialAuthProvider } from './auth/providers';
import { AuthGuard } from './services/auth-guard.service';
import { ProfileService } from './services/profile.service';
import { NotificationsService } from './services/notifications.service';
import { UtilitiesService } from './services/utilities.service';
import { FeedService } from './services/feed.service';
import { PostingService } from '@app/services/posting.service';

import { deepExtend } from './@crud/helpers';
import { CrudModule } from './@crud/crud.module';
import { CrudService } from './@crud/services/crud.service';
import { CrudProvider } from './@crud/providers/crud.provider';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { AppRoutingModule } from './/app-routing.module';
import { RequestPasswordResetComponent } from './request-password-reset/request-password-reset.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FeedComponent } from './feed/feed.component';
import { CommentsService } from '@app/services/comments.service';
import { LogoutComponent } from './logout/logout.component';
import { PostDeleteModalComponent } from './theme/modals/post-delete-modal/post-delete-modal.component';
import { ReportContentModalComponent } from './theme/modals/report-content-modal/report-content-modal.component';
import { CommentDeleteModalComponent } from './theme/modals/comment-delete-modal/comment-delete-modal.component';
import { LikesModalComponent } from './theme/modals/likes-modal/likes-modal.component';
import { StartComponent } from './start/start.component';
import { ConnectionsService } from './services/connections.service';
import { WfHoverCardModule } from './libs/wf-hover-card/wf-hover-card.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TosComponent } from './tos/tos.component';
import { UrlViewerService } from './services/url-viewer.service';
import { DeviceDetectorModule } from './libs/device-detector';
import { CommentReplyDeleteModalComponent } from './theme/modals/comment-reply-delete-modal/comment-reply-delete-modal.component';
import { ProfileFeedService } from './viewer/profile/services/profile-feed.service';
import { ProfileConnectionsService } from './services/profile-connections.service';
import { ImageIconsService } from './services/image-icons.service';
import { EditProfileService } from './services/edit-profile.service';
import { ViewerModule } from './viewer/viewer.module';
import { ProfileModule } from './viewer/profile/profile.module';
import { LoadSubmitProgressService } from './services/load-submit-progress.service';
import { NavigationService } from './services/navigation.service';
import { MessengerProvider } from './@crud';
import { MessengerService } from './messages/services/messenger.service';
import { MessengerModalsService } from './messages/services/messenger-modals.service';
import { ConfirmDeleteContentModalComponent } from './messages/modals/confirm-delete-content-modal/confirm-delete-content-modal.component';
import { ReportMessengerContentModalComponent } from './messages/modals/report-messenger-content-modal/report-messenger-content-modal.component';
import { AppModalService } from './services/app-modal.service';
import { MathService } from './services/math.service';
import { AdsProvider } from './@crud/providers/ads.provider';
import { AdsService } from './ads-manager/services/ads.service';
import { CreateAdAccountFormModalComponent } from './ads-manager/ads-theme/modals/create-ad-account-form-modal/create-ad-account-form-modal.component';
import { CustomAdapter, CustomDateParserFormatter } from './libs/date/datepicker.adapter';
import { PageService } from './services/page.service';
import { ShowAdsService } from './services/show-ads.service';
import { LinkProcessingService } from './services/link-processing.service';
import { WbWindowService } from './services/wb-window.service';
import { PageFeedService } from './viewer/page/services/page-feed.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JoinComponent,
    RequestPasswordResetComponent,
    ResetPasswordComponent,
    FeedComponent,
    LogoutComponent,
    StartComponent,
    SideNavComponent,
    WelcomeComponent,
    TosComponent
  ],
  entryComponents: [PostDeleteModalComponent, CommentDeleteModalComponent, ReportContentModalComponent, LikesModalComponent, CommentReplyDeleteModalComponent, ConfirmDeleteContentModalComponent, ReportMessengerContentModalComponent, CreateAdAccountFormModalComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CommonModule,
    ThemeModule,
    NgSelectModule,
    ProfileModule,
    //MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    WfHoverCardModule.forRoot(),
    DeviceDetectorModule.forRoot(),
    CrudModule.forRoot({
      providers: {
        crud: {
          service: CrudProvider,
          config: {
            token: {
              key: 'token', // this parameter tells Nebular where to look for the token
            },
          },
        },
        messenger: {
          service: MessengerProvider,
          config: {
            token: {
              key: 'token', // this parameter tells Nebular where to look for the token
            },
          },
        },
        ads: {
          service: AdsProvider,
          config: {
            token: {
              key: 'token', // this parameter tells Nebular where to look for the token
            },
          },
        },
      },
    }),
    AuthModule.forRoot({
      providers: {
        social: {
          service: SocialAuthProvider,
          config: {
            token: {
              key: 'token', // this parameter tells Nebular where to look for the token
            },
          },
        },
        email: {
          service: EmailPassAuthProvider,
          config: {
            token: {
              key: 'token', // this parameter tells Nebular where to look for the token
            },
          },
        },

      },
    }),
  ],
  providers: [AuthGuard, UrlViewerService, ProfileService, PageService, PostingService, UtilitiesService, FeedService, ProfileFeedService,PageFeedService,  ProfileConnectionsService, CommentsService, NotificationsService, ConnectionsService, ImageIconsService, EditProfileService,  MessengerService, AppModalService, MessengerModalsService, LoadSubmitProgressService, NavigationService, NgxImageCompressService, MathService, AdsService, ShowAdsService, LinkProcessingService,WbWindowService,
    { provide: NgbDateAdapter, useClass: CustomAdapter },
   /* { provide: Window, useValue: window },*/
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
