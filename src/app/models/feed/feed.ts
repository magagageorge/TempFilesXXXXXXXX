import { WindoTime } from "@app/models/windo-time";
import { Profile } from "@models/profile/profile";
import { FeedLink } from "../feed-link";
import { PreviewPicture } from "@app/services/posting.service";

export class Feed {
    id:string;
    original_id:string;
    message_2trash:string;
    message:string;
    url:string;
    linkpreview_id:string;
    geo_location:string;
    geo_latlong:string;
    visibility:string;
    channel:string;
    post_type:string;
    comments:Comment[];
    profile:Profile;
    images:any[];
    links:FeedLink[];
    published:string;
    created_at:WindoTime;
    updated_at:WindoTime;
    my_post:boolean;
    no_likes:number;
    no_comments:number;
    i_like:boolean;
    sending_like:boolean;
    hidden_post:boolean;    
    unhidding_post:boolean;
    loading_comments:boolean;
    loading_new_comment:boolean;
    comment_input_box:string;
    comment_mode:boolean;
    sending_comment:boolean;
    edit_mode:boolean;
    edit_input_content:string;
    comment_image_preview:PreviewPicture;
    constructor(){
        this.comments=[];
        this.links=[];
        this.created_at=new WindoTime();
        this.updated_at=new WindoTime();
        this.hidden_post=false;
        this.unhidding_post=false;
        this.loading_comments=false;
        this.loading_new_comment=false;
        this.comment_input_box='';
        this.edit_input_content='';
        this.edit_mode=false;
        this.comment_mode=false;
        this.sending_comment=false;
        this.comment_image_preview=null;
        this.sending_like=false;
    }   
}
