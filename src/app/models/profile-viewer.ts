import { ProfileSkill } from "./profile-skill";
import { ProfileIndustry } from "./profile-industry";
import { WorkExperience } from "./profile/work-experience";
import { ProfileEducation } from "./profile/profile-education";
import { ProfileAvatar } from "./profile/profile-avatar";
import { ProfileCover } from "./profile/profile-cover";

export class ProfileViewer {
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
    location:string;
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
    profile_views:any[];
    skills:ProfileSkill[];
    dealing:ProfileIndustry[];
    experiences:WorkExperience[];
    educations:ProfileEducation[];
    constructor(){
        this.skills=[];
        this.dealing=[];
        this.educations=[];
        this.experiences=[];
    }    
}
