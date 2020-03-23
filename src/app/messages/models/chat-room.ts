import { MessageBody } from "./message-body";
import { MessageForm } from "./message-form";
import { Message } from "./message";

export class ChatRoom {
        id:number;
        profiles:any[];
        lastMessage:Message;
        isNew:boolean;
        messages:Message[];
        form:MessageForm;
        constructor(){
          this.id=null;
          this.isNew=true;
          this.profiles=[];
          this.messages=[];
          this.form= new MessageForm();
        }
}
