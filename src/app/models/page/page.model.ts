import { GeoLocation } from "../location";
import { PageMainCategory } from "./page.cagegory";
import { PreviewPicture } from "../global";
import { ProfilePagePicture, ProfilePageCover } from "../profile-page.picture";



export class PageSummary{
    id: number;
    name: string;
    street: string;
    about: string;
    address: string;
    phone: string;
    mobile: string;
    url:string;
    picture:ProfilePagePicture;
    cover:ProfilePageCover;       
}


export class PageModel {
    id: number;
    name: string;
    street: string;
    zip: string;
    location: GeoLocation;
    category_id: string;
    main_category: PageMainCategory;
    picture_preview_info: PreviewPicture;
    croppedImage: string;
    about: string;
    address: string;
    phone: string;
    mobile: string;
    fax: string;
    im_skype: string;
    im_msn: string;
    im_icq: string;
    im_xmpp: string;
    url: string;
    url_facebook: string;
    url_linkedin: string;
    url_xing: string;
    url_youtube: string;
    url_vimeo: string;
    url_flickr: string;
    url_myspace: string;
    url_googleplus: string;
    url_twitter: string;
    constructor() {
        this.category_id = '';
        this.croppedImage = '';
        this.picture_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
    }

}


export class PageForm{
    id:number;
    name:string;
    street:string;
    zip:string;
    location: GeoLocation;
    location_id: string;
    category_id: string;
    main_category: PageMainCategory;
    picture_preview_info: PreviewPicture;
    croppedImage: string;
    about:string;
    address:string;
    phone:string;
    mobile:string;
    fax:string;
    im_skype:string;
    im_msn:string;
    im_icq:string;
    im_xmpp:string;
    url:string;
    url_facebook:string;
    url_linkedin:string;
    url_xing:string;
    url_youtube:string;
    url_vimeo:string;
    url_flickr:string;
    url_myspace:string;
    url_googleplus:string;
    url_twitter:string;
    constructor() {
        this.category_id = '';
        this.croppedImage = '';
        this.picture_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
    }

}