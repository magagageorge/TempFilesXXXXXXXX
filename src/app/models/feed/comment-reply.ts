import { WindoTime } from "@app/models/windo-time";

export class CommentReply {
    id:number;
    message:string;
    object_model:string;
    object_id:string;
    profile:any;
    isNew:boolean;
    created_at:WindoTime;
    updated_at:WindoTime;
    my_comment:boolean;
    no_likes:number;
    i_like:boolean;
    sending_like:boolean;
    sending:boolean;
    replying:boolean;
    edit_mode:boolean;
    edit_input_content:string;
    constructor(){
        this.message='';
        this.sending=false;
        this.created_at=new WindoTime();
        this.updated_at=new WindoTime();
        this.isNew=true;
        this.replying=false;
        this.edit_mode=false;
        this.edit_input_content='';
        this.sending_like=false;
    } 
}
