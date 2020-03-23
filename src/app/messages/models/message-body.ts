import { MessageBodyMedia } from "./message-body-media";
import { MessageBodyLink } from "./message-body-link";

export class MessageBody {
    id:number;
    message:string;
    medias:MessageBodyMedia[];
    links:MessageBodyLink[]; 
}
