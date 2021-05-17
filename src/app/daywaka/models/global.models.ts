export class DwGuestForm {
    firstname: string;
    lastname: string;
    business_name: string;
    business_email: string;
    phone_number: string;
    city_name:string;
    job_type: string;
    no_workers: string;
    description: string;
    source: string;
    constructor(){
        this.source="";
        this.job_type="";
        this.no_workers="";
    }
}