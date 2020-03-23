import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadSubmitProgressService {

  loadingData:boolean=false;
  submittingData:boolean=false;
  processingRequest:boolean=false;
  constructor() { }
}
