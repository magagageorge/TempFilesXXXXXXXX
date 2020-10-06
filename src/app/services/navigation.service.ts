import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

export class NavigationState {
  previousRoute: string;
  currentRoute: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  routeState:NavigationState = new NavigationState();
  params: Params;
  constructor() {
  }

  setState(params: Params) {
    this.params = params;
  }
}
