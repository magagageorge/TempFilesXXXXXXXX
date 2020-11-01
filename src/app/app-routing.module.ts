import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { JoinComponent } from './join/join.component';
import { RequestPasswordResetComponent } from './request-password-reset/request-password-reset.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FeedComponent } from './feed/feed.component';
import { LogoutComponent } from './logout/logout.component';
import { StartComponent } from './start/start.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TosComponent } from './tos/tos.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  { path: 'logout', canActivate: [AuthGuard], component: LogoutComponent },
  { path: 'request-password-reset', component: RequestPasswordResetComponent },
  { path: 'reset-password', canActivate: [AuthGuard], component: ResetPasswordComponent },
  { path: 'start', canActivate: [AuthGuard], component: StartComponent },
  { path: 'nav', canActivate: [AuthGuard], component: SideNavComponent },
  { path: 'tos', component: TosComponent },
  {
    path: 'feed',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard	
    component: FeedComponent
  },
  {
    path: 'mynetwork',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./mynetwork/mynetwork.module').then(m => m.MynetworkModule)
  },
  {
    path: 'notifications',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
  },
  {
    path: 'search',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'settings',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'messages',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule)
  },
  {
    path: 'adsmanager',
    canActivate: [AuthGuard],
    loadChildren: () => import('./ads-manager/ads-manager.module').then(m => m.AdsManagerModule)
  },
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/woorbi-pages.module').then(m => m.WoorbiPagesModule)
  },
  {
    path: ':url/:url_page',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./viewer/viewer.module').then(m => m.ViewerModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: ':url',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./viewer/viewer.module').then(m => m.ViewerModule),
    runGuardsAndResolvers: 'always'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }