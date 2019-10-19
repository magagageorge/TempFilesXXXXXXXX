import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PrivacySecurityComponent } from './privacy-security/privacy-security.component';
import { PasswordComponent } from './password/password.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { SocialSitesComponent } from './social-sites/social-sites.component';

const routes: Routes = [
  {path:'',component:SettingsComponent},
  {path:'account',component:AccountComponent},
  {path:'contacts-and-personal',component:PersonalInfoComponent},
  {path:'privacy-and-security',component:PrivacySecurityComponent},
  {path:'password',component:PasswordComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'preferences',component:PreferencesComponent},
  {path:'social-sites',component:SocialSitesComponent},               
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

export const routedComponents=[SettingsComponent,AccountComponent, PersonalInfoComponent, PrivacySecurityComponent, PasswordComponent, NotificationsComponent, PreferencesComponent,SocialSitesComponent];
