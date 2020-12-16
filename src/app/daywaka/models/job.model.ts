import { PageSummary } from "@app/models/page/page.model";
import { ProfileSummary } from "@app/models/profile/profile";

export class JobForm {
    id: number;
    name: string;
    page_id: number;
    status: string;
    no_workers: number;
    profile_id: number;
    description: string;
    category_id: number;
    advertized_by: string;
    fee: string;
    location_name: string;
    address: string;
    city_id: string;
    city: string;
    zip: string;
    selected_page: PageSummary;
    selected_profile: ProfileSummary;
}

export class JobAd {
    id: number;
    status: string;
    name: string;
    no_workers: number;
    advertized_by: string;
    multiple_days: string;
    fee: string;
    category: JobCategory;
    description: string;
    location: any[];
    address: string;
    city: any;
    page: any;
    profile: any;
    zip: string;
    updated_at: string;
}

export class JobCategory {
    id: number;
    name: string;
}