import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileViewerService {
  screenHeight: number;
  screenWidth: number;
  profileCoverWidth: number;
  profileCoverHeight: number;
  profileCoverHeaderHeight:number;
  constructor() { 
    this.profileCoverWidth = 720;
    this.profileCoverHeight = 240;
    this.profileCoverHeaderHeight=250;
  }


  calculateCoverDimensions(profileCoverWidth:number) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;    
    this.profileCoverWidth = profileCoverWidth;
    this.profileCoverHeight = this.profileCoverWidth / 3;
    this.profileCoverHeaderHeight=(this.screenHeight>767)?(this.profileCoverHeight+20):(this.profileCoverHeight+50);
  }


}
