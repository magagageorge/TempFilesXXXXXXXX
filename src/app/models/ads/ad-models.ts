
export class ShowAdContent {
    id: number;
    compaign_id: number;
    name: string;
    introduction: string;
    cards:ShowAdContentCard[];
    destination_url: string;
    redirect_url: string;
    one_destination: string;
    call_to_action: string;
    ad_format:string;
    page:any;
    seen:boolean;
}


export class ShowAdContentCard {
    id: number;
    ad_id: number;
    headline: string;
    description: string;
    destination_url: string;
    redirect_url: string;
    media: string;
    media_width: number;
    media_height: number;
    media_size: number;
    media_ext: string;
}
