import { GeoLocationShort } from "@app/models/location";
import { PageSummary } from "@app/models/page/page.model";

export class AdCompaignForm {
    id: number;
    account_id: number;
    compaign_name: string;
    objective: string;
    aud_age_min: number;
    aud_age_max: number;
    aud_locations: GeoLocationShort[];
    selected_page:PageSummary;
    page_id:number;
    gender: string;
    currentForm: string;
    budget_type: string;
    daily_budget: string;
    total_budget: string;
    start_date: string;
    end_date: string;
    date_schedule: string;
    ad_format: string;
    constructor() {
        this.aud_locations = [];
        this.daily_budget='';
        this.total_budget='';
        this.start_date='';
        this.end_date='';
        this.date_schedule='';
        this.budget_type='';
    }
}
