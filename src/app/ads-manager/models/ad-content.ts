import { CallToAction } from "./call-to-action";
import { PageSummary } from "@app/models/page/page.model";

export class AdContent {
    id: number;
    compaign_id: number;
    name: string;
    introduction: string;
    cards: AdContentCard[];
    destination_url: string;
    one_destination: boolean;
    call_to_action: string;
    status:string;
    page_id: number;
    ad_format: string;
    page: PageSummary;
}

export class AdContentForm {
    id: number;
    compaign_id: number;
    name: string;
    introduction: string;
    destination_url: string;
    one_destination: boolean;
    call_to_action: string;
    cards: AdContentCardForm[];
    selectedCTA: CallToAction;
    selected_page: PageSummary;
    page_id: number;
    ad_format: string;
    status:string;
    constructor() {
        this.cards = [];
        this.call_to_action = '';
        this.selectedCTA = null;
        this.destination_url = '';
        this.introduction = '';
        this.one_destination = false;
    }
}

export class AdContentCard {
    id: number;
    ad_id: number;
    headline: string;
    description: string;
    destination_url: string;
    media: string;
    media_width: number;
    media_height: number;
    media_size: number;
    media_ext: string;
}

export class AdContentCardForm {
    id: number;
    sn: number;
    headline: string;
    description: string;
    destination_url: string;
    media: string;
    media_file: File;
    upload_media: boolean;
    media_width: number;
    media_height: number;
    media_wh_ratio: number;
    media_size: number;
    media_ext: string;
    constructor() {
        this.headline = '';
        this.description = '';
        this.destination_url = '';
        this.media = '';
        this.id = null;
        this.upload_media = false;
    }
}