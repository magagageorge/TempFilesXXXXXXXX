import { Injectable } from '@angular/core';
import { Observable,of as observableOf,BehaviorSubject } from 'rxjs';
import { switchMap,map,catchError } from 'rxjs/operators';

let counter = 0;

@Injectable()
export class  BookingModel{
  id:number;
  refno:string;
  consultation_type_id:string;
  main_category:string;
  legal_area:string;
  customer_id:string;
  lawyer_id:string;
  total_charge:string;
  time:string;
  have_accepted:boolean;
  notes:string;
  no_bids:string;
  created_at:string;
  updated_at:string;
  constructor(){
	this.legal_area=""; 
    this.main_category="";
    this.notes="";
    this.consultation_type_id='';	
  }
}