import { ProfileAvatar } from "./profile-avatar";
import { ProfileCover } from "./profile-cover";

export class Profile {
    user_id:number;
    firstname:string; 
    middlename:string; 
    lastname:string; 
    name:string; 
    picture:string; 
    avatar:ProfileAvatar; 
    cover:ProfileCover; 
    title:string; 
    about:string;
    no_connections:number;
    no_followers:number;
    no_followings:number;
    gender:string; 
    language:string;
    timezone:string;
    country:string; 
    city:string; 
    location:any;    
    state:string; 
    street:string; 
    zip:string; 
    phone_private:string; 
    phone_work:string; 
    mobile:string; 
    fax:string; 
    user_type:string;
    im_skype:string; 
    url:string; 
    url_facebook:string; 
    url_linkedin:string; 
    url_googleplus:string; 
    url_twitter:string; 
    connectStatus:any;
    my_profile:boolean;
    short_info:string;
    summary_info:string;
    mutualConnections:any[];
    constructor() {
        this.avatar = new ProfileAvatar();
        this.cover = new ProfileCover();
        this.mutualConnections=[];
    }
}

export class ProfileSummary {
    user_id:number;
    firstname:string; 
    middlename:string; 
    lastname:string; 
    name:string; 
    picture:string; 
    avatar:ProfileAvatar; 
    cover:ProfileCover; 
    title:string; 
    about:string;
    no_connections:number;
    no_followers:number;
    no_followings:number;
    location:any;    
    url:string; 
    connectStatus:any;
    my_profile:boolean;
    short_info:string;
    summary_info:string;
    mutualConnections:any[];
    constructor() {
        this.avatar = new ProfileAvatar();
        this.cover = new ProfileCover();
        this.mutualConnections=[];
    }
}
