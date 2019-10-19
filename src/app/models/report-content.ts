export class ReportContent {
    id:number;
    object_model:string;
    object_id:number;
    what:string;
    done_reporting:boolean;
    constructor(){
        this.done_reporting=false;
    }
}
