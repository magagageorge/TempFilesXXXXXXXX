import { UserPreferences } from "../settings/user-preference";
import { ProfileAvatar } from "./profile-avatar";
import { ProfileCover } from "./profile-cover";

export class ProfUser {
    email: string;
    mobile: string;
    constructor() {
    }
}

export interface ProfileContacts {
    email: string;
    mobile: string;
}

export interface ProfileLanguages {
    id: number;
    lang_id: number;
    name: string;
}
export class MyProfile {
    user_id: number;
    firstname: string;
    middlename: string;
    lastname: string;
    name: string;
    avatar: ProfileAvatar;
    cover: ProfileCover;
    title: string;
    about: string;
    no_connections: number;
    no_followers: number;
    no_followings: number;
    contacts: ProfileContacts;
    languages: ProfileLanguages[];
    gender: string;
    language: string;
    timezone: string;
    country: string;
    city: string;
    city_id: string;
    location: any;
    state: string;
    street: string;
    zip: string;
    init: any = { locatioin: '', activity: '', contact_imported: '', mission: '', status: '' };
    my_profile: boolean;
    connectStatus: any;
    user: ProfUser = new ProfUser();
    my_preferences: UserPreferences;
    phone_private: string;
    phone_work: string;
    is_student: string;
    college_end_year: string;
    college_start_year: string;
    colleges: string;
    mobile: string;
    fax: string;
    user_type: string;
    im_skype: string;
    url: string;
    birthday: string;
    birth_date: { month: '', day: '', year: '' };
    url_facebook: string;
    url_linkedin: string;
    url_googleplus: string;
    url_twitter: string;
    created_at: string;
    updated_at: string;
    skills: any[];
    dealing: any[];
    educations: any[];
    experiences: any[];
    constructor() {
        this.my_profile = true;
        this.avatar = new ProfileAvatar();
        this.cover = new ProfileCover();
        this.contacts = null;
        this.languages = [];
    }
}
