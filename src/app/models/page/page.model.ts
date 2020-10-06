import { GeoLocation } from "../location";
import { PageMainCategory } from "./page.cagegory";
import { PreviewPicture } from "../global";
import { ProfilePagePicture, ProfilePageCover } from "../profile-page.picture";

export class PageSummary {
    id: number;
    name: string;
    street: string;
    about: string;
    address: string;
    phone: string;
    mobile: string;
    website:string;
    email:string;
    url: string;
    my_page: any;
    picture: ProfilePagePicture;
    cover: ProfilePageCover;
    category:any;
    location: GeoLocation;
    no_followers:string;
    i_follow:boolean;
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
    email: string;
    website: string;
    url_facebook: string;
    url_linkedin: string;
    url_xing: string;
    url_youtube: string;
    url_vimeo: string;
    url_flickr: string;
    url_myspace: string;
    url_googleplus: string;
    url_twitter: string;
    no_followers:string;
    i_follow:boolean;
    constructor() {
        this.category_id = '';
        this.croppedImage = '';
        this.picture_preview_info = { url: '', width: 0, height: 0, file: null, isNew: true };
    }
}

export class PageForm {
    id: number;
    name: string;
    street: string;
    zip: string;
    location: GeoLocation;
    location_id: string;
    category_id: string;
    country_code:string;
    country_id:string;
    city_id:string;
    main_category: PageMainCategory;
    picture_preview_info: PreviewPicture;
    croppedImage: string;
    about: string;
    address: string;
    phone: string;
    mobile: string;
    email: string;
    fax: string;
    im_skype: string;
    im_msn: string;
    im_icq: string;
    im_xmpp: string;
    url: string;
    website: string;
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
        this.about='';
        this.website='';
        this.zip='';
        this.email='';
        this.phone='';
        this.address='';
        this.fax='';
        this.name='';
        this.street='';
        this.url='';
        this.city_id='';
        this.country_id='';
        this.country_code='';
    }
}

export class PageCover {
    picture: string;
    org_picture: string;
    width: string;
    height: string;
    wh_ratio: number;
    show_alert: boolean;
    size: number;
}

export class PagePicture {
    face: string;
    org_face: string;
    width: string;
    height: string;
    wh_ratio: number;
    show_alert: boolean;
    size: number;
}

