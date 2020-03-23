import { Feed } from "./feed";

export class OverlayPost{
    feed:Feed;
    loadingFeed:boolean;
    visible:boolean;
    constructor(){
        this.feed=null;
        this.loadingFeed=false;
        this.visible=false;
    }
}