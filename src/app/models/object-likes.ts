import { Profile } from "./profile/profile";

export class ObjectLikes {
  object_model:string;
  object_id:number;
  no_likes:number;
  likes:any[];
  constructor(){
      this.likes=[];
  }
}
