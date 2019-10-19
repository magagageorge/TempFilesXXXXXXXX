import { City } from "./city";

export class Country {
    id:number;
    name:string;
    code:string;
    nationality:string;
    currencyCode:string;
    capital:string;
    continent:string;
    active:string;
    cities:City[];
    constructor(){
        this.cities=[];
    }
}
