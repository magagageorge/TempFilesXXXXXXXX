import { Injectable } from '@angular/core';

@Injectable()
export class DwProfileViewerService {

  screenHeight: number;
  screenWidth: number;
  profileCoverWidth: number;
  profileCoverHeight: number;
  profileCoverHeaderHeight: number;
  last_profile_url: string = '';
  VIEW_PROFILE_MODAL: boolean = false;
  VIEW_PROFILEID_MODAL: number;
  constructor() {
    this.profileCoverWidth = 720;
    this.profileCoverHeight = 180;
    this.profileCoverHeaderHeight = 180;
  }

  calculateCoverDimensions(profileCoverWidth: number) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.profileCoverWidth = profileCoverWidth;
    this.profileCoverHeaderHeight = this.profileCoverHeight = (this.screenWidth > 767) ? (this.profileCoverWidth / 4) : ((this.profileCoverWidth / 4) + 30);
  }

  public viewProfileInModal(state: boolean, profileId) {
    this.VIEW_PROFILEID_MODAL = profileId;
    this.VIEW_PROFILE_MODAL = state;
  }

}
