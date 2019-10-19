import { Profile } from "./profile/profile";

export class Contact {
    id:number;
    status:string;
    envite_status:string;
    envite_count:number;
    firstname:string;
    lastname:string;
    fullname:string;
    email:string;
    mobile:string;
    profile:Profile;
    selected:boolean;
    constructor(){
      this.selected=true;
    }
}
