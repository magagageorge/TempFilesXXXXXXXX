import { AccountSettings } from "./account-settings";
import { MissionSettings } from "./mission-settings";
import { PrivacySettings } from "./privacy-settings";
import { NotificationSettings } from "./notification-settings";
import { PersonalContactsInfo } from "./personal-contacts-info";
import { UserPreferences } from "./user-preference";

export class SettingsModel {
    AccountSettings:AccountSettings;
    UserPreferences:UserPreferences;
    PrivacySettings:PrivacySettings;
    NotificationSettings:NotificationSettings;
    PersonalContacts:PersonalContactsInfo;
    constructor(){
        this.AccountSettings=new AccountSettings();
        this.UserPreferences=new UserPreferences();
        this.PrivacySettings=new PrivacySettings();
        this.NotificationSettings= new NotificationSettings();
        this.PersonalContacts = new PersonalContactsInfo();
    }
}
