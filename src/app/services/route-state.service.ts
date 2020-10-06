import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteStateService {


  private previousUrl: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public previousUrl$: Observable<string> = this.previousUrl.asObservable();


  private pathParamState = new BehaviorSubject<string>('');
  pathParam: Observable<string>;
  constructor() {
    this.pathParam = this.pathParamState.asObservable();
  }

  updatePathParamState(newPathParam: string) {
    this.pathParamState.next(newPathParam);
  }

  setPreviousUrl(previousUrl: string) {
    this.previousUrl.next(previousUrl);
}

}
