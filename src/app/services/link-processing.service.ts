import { Injectable } from '@angular/core';
import { SysFunctions } from '@app/libs/utilities/common-functions';

@Injectable({
  providedIn: 'root'
})
export class LinkProcessingService {

  constructor() { }

  removeLinkProtocol(url:string){
    return SysFunctions.removeLinkProtocol(url);
  }

  insertLinkProtocol(url:string){
    return SysFunctions.insertLinkProtocol(url);
  }
  
}
