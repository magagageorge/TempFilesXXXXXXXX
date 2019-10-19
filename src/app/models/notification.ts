import { Profile } from "./profile/profile";

export interface Action{
    link:string;
    label:string;
    do:string;
}
export class Notification {
    id:number;
    time:string;
    note:string;
    s_profile:Profile;
    action:Action={'link':'','label':'','do':''}
}
