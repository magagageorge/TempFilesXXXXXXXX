import { MessageBody } from "./message-body";

export class Message {
    id:number;
    seen:string;
    delivered:string;
    sent_at:{date:'',title:''};
    messageBody:MessageBody;
    my_message:boolean;
    sender_name:string;
}
