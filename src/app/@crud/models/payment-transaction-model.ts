import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


let counter = 0;

@Injectable()
export class  PaymentTransactionModel{
  id:number;
  booking_id:number;
  gateway_refno:string;
  channel:string;
  amount:string;
  transaction_date:string;
  created_at:string;
  updated_at:string;
}