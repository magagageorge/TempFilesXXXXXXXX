import { Injectable, OnInit } from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ProfileHoverCard } from '../interfaces/profile-hover-card';
import { DeviceDetectorService } from '@app/libs/device-detector';
import { Profile } from '@app/models/profile/profile';

@Injectable({
  providedIn: 'root'
})
export class HoverCardService implements OnInit{

  //profile:ProfileHoverCard={user_id:0,name:'',avatar:{face:'',org_face:'',width:'',height:'',size:0,show_alert:false,wh_ratio:0},cover:{picture:'',org_picture:'',width:'',height:'',size:0,show_alert:false,wh_ratio:0},url:'',short_info:'',summary_info:'',connectStatus:{},my_profile:false};
  profile:Profile=new Profile();
  plink_hovered:boolean=false;
  pcard_hovered:boolean=false;
  pcard_waiting_to_show:boolean=false;
  deviceService:DeviceDetectorService;
  constructor(deviceService:DeviceDetectorService) {
    this.deviceService=deviceService;
  }

  ngOnInit(): void {
  }

  OnHover(event:MouseEvent,profile:any){
    if(this.deviceService.isDesktop){
      var _this=this;
      this.profile=profile;
      var hovercard_elem=document.getElementById('hovercard-container') as HTMLElement;
      if(this.plink_hovered==false){
        this.plink_hovered=true;
  
        setTimeout(function(){
          if(_this.plink_hovered==true){
        var target=event.target as HTMLElement;
        var position = _this.getPosition(target);
        //console.log(target.scrollTop);
        hovercard_elem.style.top=position.y+'px';
        hovercard_elem.style.left=position.x+'px';
        hovercard_elem.style.display='block';
          }
      }, 900); 
      }
    }
  }

 OnMouseOut(event:MouseEvent){
  if(this.deviceService.isDesktop){   
   var _this=this;
   this.plink_hovered=false;
   setTimeout(function(){
    if(_this.pcard_hovered==false){
      var hovercard_elem=document.getElementById('hovercard-container') as HTMLElement;
      hovercard_elem.style.display='none';     
     }
   }, 500);
  }
 }

 OnCardHover(event:MouseEvent){
  this.pcard_hovered=true;
 }

 OnCardLeave(event:MouseEvent){
   this.pcard_hovered=false;
   setTimeout(function(){
      var hovercard_elem=document.getElementById('hovercard-container') as HTMLElement;
      hovercard_elem.style.display='none';     
   }, 500); 
 }

// Helper function to get an element's exact position
getPosition(el){
  var xPos = 0;
  var yPos = 0;

  var myLeft = 0,
  myLeftMirror = 0,
  myTop = 0,
  elemWidth=el.width,
  elemHeight =el.height,
  windowWidth=Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  windowHeight=Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var hovercard_elem=document.getElementById('hovercard-container') as HTMLElement;
  var cardWidth=hovercard_elem.offsetWidth;
  var cardHeight=hovercard_elem.offsetHeight;
 
  // deal with browser quirks with body/window/document and page scroll
  var xScroll = this.getScroll('Left',window);
  var yScroll = this.getScroll('Top',window);
  while (el) {
    if (el.tagName == "body") {
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
 
   if((windowWidth-xPos)<(windowWidth/2)){
        xPos-=cardWidth;
   }else{
        xPos+=20;
   }

   if((windowHeight-(yPos-yScroll))<(windowHeight/2)){
    yPos-=cardHeight;
   }else{
    yPos+=20;
   }


  return {
    x: Math.round(xPos),
    y: Math.round(yPos)
  };
}

getScroll(method, element) {
  // The passed in `method` value should be 'Top' or 'Left'
  method = 'scroll' + method;
  return (element == window || element == document) ? (
    self[(method == 'scrollTop') ? 'pageYOffset' : 'pageXOffset'] ||
    (document.documentElement[method]) ||
    document.body[method]
  ) : element[method];
}

  private _init() {
  fromEvent(document.getElementsByClassName('hover-card-link'), 'hover')
  .pipe(
  //debounceTime(2000),
  //distinctUntilChanged(),
  map(event => {
  const data = event.target['innerHTML'];
  //const links: Link[] = this.hoverCardService.find(data);
  console.log('data: ', data);
  alert(data);
  //console.log('links: ', links);
  //event.target['innerHTML'] = this.linkifyService.linkify(data);
  return;
  })).subscribe((links) => {
  //this.linkPreviewService.onLinkFound.emit(links);
  });
  }
}
