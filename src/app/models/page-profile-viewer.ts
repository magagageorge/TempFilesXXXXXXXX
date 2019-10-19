import { PageViewer } from "./page-viewer";
import { ProfileViewer } from "./profile-viewer";

export class PageProfileViewer {
    type:string;
    profile:ProfileViewer;
    page:PageViewer;
    constructor(){
        this.type="";
    }
}
