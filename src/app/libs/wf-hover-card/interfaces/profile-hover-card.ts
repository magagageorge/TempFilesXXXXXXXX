import { ProfileAvatar } from "@app/models/profile/profile-avatar";
import { ProfileCover } from "@app/models/profile/profile-cover";

export interface ProfileHoverCard {
    user_id:number;
    name:string;
    avatar:ProfileAvatar;
    cover:ProfileCover;
    url:string;
    short_info:string;
    summary_info:string;
    connectStatus:any;
    my_profile:boolean;
}
