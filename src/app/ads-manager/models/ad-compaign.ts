import { GeoLocationShort } from "@app/models/location";
import { AdObjective } from "./ad-objective";

export class AdCompaign {
    id:number;
    account_id:number;
    compaign_name:string;
    objective:AdObjective;
    aud_gender:string;
    aud_age_min:number;
    aud_age_max:number;
    aud_locations:GeoLocationShort[];
    budget_schedule:any;
}
