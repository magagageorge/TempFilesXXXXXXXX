import { MessageBodyMedia } from "./message-body-media";
import { MessageBodyLink } from "./message-body-link";
import { MessageBodyFile } from "./message-body-file";

export class MessageBody {
    id:number;
    message:string;
    medias:MessageBodyMedia[];
    files:MessageBodyFile[];
    links:MessageBodyLink[]; 
}
