export class AdFormat {
    id:string;
    name:string;
    icon:string;
    image:string;
    active:boolean;
    selected:boolean;
}

export const WB_AD_FORMATS:AdFormat[]=[
    {id:'SINGLE_IMAGE',name:'Single Image Ad',icon:'wb-single-image-ad',image:'wb-single-image-ad.png',active:true,selected:false},
    {id:'CAROUSEL_IMAGE',name:'Carousel Image Ad',icon:'wb-carousel-ad',image:'wb-carousel-ad.png',active:true,selected:false},
    {id:'MESSAGE_AD',name:'Message Ad',icon:'wb-message-ad',image:'wb-message-ad.png',active:false,selected:false},
    {id:'TEXT_AD',name:'Text Ad',icon:'wb-text-ad',image:'wb-text-ad.png',active:true,selected:false},
    {id:'SPOTLIGHT_AD',name:'Spotlight Ad',icon:'wb-spotlight-ad',image:'wb-spotlight-follower-ad.png',active:false,selected:false},
    {id:'FOLLOWER_AD',name:'Follower Ad',icon:'wb-spotlight-ad',image:'wb-spotlight-follower-ad.png',active:false,selected:false},
    {id:'VIDEO_AD',name:'Video Ad',icon:'wb-video-ad',image:'wb-video-ad-icon.png',active:false,selected:false},
];
