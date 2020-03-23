import { Profile } from "./profile/profile";

export interface Action{
    link:string;
    label:string;
    do:string;
}
export class Notification {
    id:number;
    class:string;
    post_id:number;
    no_rec:number;
    seen:number;
    time:string;
    note:string;
    people_list:any[];
    t_model:string;
    s_model:string;
    s_profile:Profile;
    action:Action={'link':'','label':'','do':''}
}
