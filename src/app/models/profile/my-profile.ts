import { UserPreferences } from "../settings/user-preference";

export class ProfUser{
    email:string;
    mobile:string;
    constructor(){
    }  
}
export class MyProfile {
    user_id:number;
    firstname:string; 
    middlename:string; 
    lastname:string; 
    name:string; 
    avatar:string; 
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
    city_id:string;
    location:string;    
    state:string; 
    street:string; 
    zip:string;
    init:any={locatioin:'',activity:'',contact_imported:'',mission:'',status:''}; 
    user:ProfUser=new ProfUser();
    my_preferences:UserPreferences;
    phone_private:string; 
    phone_work:string;
    is_student:string;
    college_end_year:string;
    college_start_year:string;
    colleges:string; 
    mobile:string; 
    fax:string; 
    user_type:string;
    im_skype:string; 
    url:string; 
    url_facebook:string; 
    url_linkedin:string; 
    url_googleplus:string; 
    url_twitter:string; 
    created_at:string; 
    updated_at:string;
    constructor(){
        
    }
}
