import { GeoLocation } from "@app/models/location";
import { PageSummary } from "@app/models/page/page.model";
import { ProfilePagePicture, ProfilePageCover } from "@app/models/profile-page.picture";
import { ProfileSummary } from "@app/models/profile/profile";

export class JobDateTime {
    date: string;
    time: string;
    meridian: boolean;
}


export class JobForm {
    id: number;
    name: string;
    page_id: number;
    status: boolean;
    no_workers: number;
    profile_id: number;
    description: string;
    requirements: string;
    travel_tips: string;
    multiple_days:string;
    category_id: number;
    advertized_by: string;
    currency: string;
    fee: string;
    duration_hours: string;
    duration_minutes: string;
    location_name: string;
    lat: string;
    lng: string;
    latlngPos: any;
    dates: JobDateTime[];
    startdate: string;
    starttime: any;
    address: string;
    city_id: string;
    city: string;
    zip: string;
    selected_page: PageSummary;
    selected_profile: ProfileSummary;
    constructor() {
        this.latlngPos = null;
    }
}

export class JobAdSummary {
    id: number;
    status: string;
    name: string;
    no_workers: number;
    advertized_by: string;
    multiple_days: string;
    currency: string;
    fee: string;
    category: JobCategory;
    description: string;
    requirements: string;
    travel_tips: string;
    location: any[];
    address: string;
    startdate: string;
    starttime: string;
    fulltime: string;
    duration_hours: string;
    duration_minutes: string;
    city: any;
    page: any;
    profile: any;
    jobhead: JobHead;
    my_status:string;
    zip: string;
    updated_at: string;
}

export class JobAd {
    id: number;
    status: string;
    name: string;
    no_workers: number;
    advertized_by: string;
    multiple_days: string;
    currency: string;
    fee: string;
    category: JobCategory;
    description: string;
    requirements: string;
    travel_tips: string;
    location: any[];
    address: string;
    startdate: string;
    starttime: string;
    fulltime: string;
    duration_hours: string;
    duration_minutes: string;
    city: any;
    page: any;
    profile: any;
    jobhead: JobHead;
    my_status:string;
    zip: string;
    updated_at: string;
}

export class JobScheduleListItem {
    schedule_id: number;
    job_id:number;
    status: string;
    name: string;
    no_workers: number;
    advertized_by: string;
    multiple_days: string;
    currency: string;
    fee: string;
    category: JobCategory;
    description: string;
    requirements: string;
    travel_tips: string;
    location: any[];
    workers_list:any[];
    address: string;
    startdate: string;
    starttime: string;
    enddate: string;
    endtime: string;    
    fulltime: string;
    duration_hours: string;
    duration_minutes: string;
    city: any;
    page: any;
    profile: any;
    jobhead: JobHead;
    my_status:string;
    zip: string;
    updated_at: string;
}

export class JobAdDetailed {
    id: number;
    status: string;
    name: string;
    no_workers: number;
    advertized_by: string;
    multiple_days: string;
    currency: string;
    fee: string;
    category: JobCategory;
    description: string;
    requirements: string;
    travel_tips: string;
    location: any[];
    address: string;
    startdate: string;
    starttime: string;
    fulltime: string;
    duration_hours: string;
    duration_minutes: string;
    city: any;
    page: any;
    profile: any;
    jobhead: JobHead;
    my_status:string;
    workers:any[];
    zip: string;
    updated_at: string;
}

export class JobCategory {
    id: number;
    name: string;
}

export class JobHead {
    id: number;
    type: string;
    name: string;
    about: string;
    address: string;
    phone: string;
    mobile: string;
    url: string;
    picture: ProfilePagePicture;
    cover: ProfilePageCover;
    category: any;
    no_followers: string;
    i_follow: boolean;
}


export interface DwJobPreferences {
    id: number;
    category_id: number;
    name: string;
}