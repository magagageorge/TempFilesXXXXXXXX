import { ProfilePagePicture, ProfilePageCover } from "./profile-page.picture";

export class PageViewer {
    id:number;
    name:string; 
    picture:ProfilePagePicture;
    cover:ProfilePageCover;  
    title:string; 
    about:string;
    phone_private:string; 
    phone_work:string; 
    phone:string; 
    street:string;
    address:string;
    zip:string;
    city_id:number;
    country_id:number;
    my_page:any;
    mobile:string; 
    fax:string; 
    url:string;
    website:string;
    email:string; 
    category:any;
    location:any;
    no_followers:string;
    i_follow:boolean;
}
