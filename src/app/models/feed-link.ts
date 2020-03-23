export class FeedLinkImage{
   id:number;
   link_id:number;
   url:string;
   width:number;
   height:number;
   wh_ratio:number;
   title:string;
}

export class FeedLink {
    id:number;
    post_id:number;
    title:string;
    description:string;
    url:string;
    canonicalUrl:string;
    image:string;
    linkImage:FeedLinkImage;
    code:string;
}
