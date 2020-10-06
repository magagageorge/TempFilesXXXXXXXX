import { WindoTime } from "@app/models/windo-time";
import { CommentReply} from './comment-reply';
import { PreviewPicture } from "@app/services/posting.service";
import { Profile } from "../profile/profile";

export class Comment {
    id:number;
    message:string;
    object_model:string;
    object_id:number;
    profile:Profile;
    pictures:any[];
    upload_files:Array<File>;
    preview_pictures:PreviewPicture[];
    edited_pictures:any[];
    isNew:boolean;
    created_at:WindoTime;
    updated_at:WindoTime;
    my_comment:boolean;
    no_likes:number;
    no_replies:number;
    i_like:boolean;
    sending_like:boolean;
    sending:boolean;
    replying:boolean;
    sending_reply:boolean;
    replies:CommentReply[];
    reply_box:string;
    is_new_reply:boolean;
    replyId:number;
    loading_replies:boolean;
    loading_new_reply:boolean;
    edit_mode:boolean;
    edit_input_content:string;
    constructor(){
        this.message='';
        this.sending=false;
        this.sending_reply=false;
        this.created_at=new WindoTime();
        this.updated_at=new WindoTime();
        this.isNew=true;
        this.replying=false;
        this.reply_box='';
        this.is_new_reply=true;
        this.loading_replies=false;
        this.loading_new_reply=false;
        this.replyId=0;
        this.edit_mode=false;
        this.edit_input_content='';
        this.upload_files=[];
        this.edited_pictures=[];
        this.sending_like=false;
    } 

    clearReply(){
        this.replying=false;
        this.sending_reply=false;
        this.reply_box='';
        this.is_new_reply=true;
        this.replyId=0;
        this.upload_files=[];
        this.sending_like=false;
    }
}
