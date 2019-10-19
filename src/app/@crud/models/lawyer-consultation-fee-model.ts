import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


let counter = 0;

@Injectable()
export class  LawyerConsultationFeeModel{
  id:number;
  consultation_type_id:number;
  lawyer_id:number;
  amount:string;
  discount_amount:string;
  currency:string;
  duration:string;
  created_at:string;
  updated_at:string;
}