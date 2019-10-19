import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


let counter = 0;

@Injectable()
export class  LawyerAvailabilityModel{
  id:number;
  name:string;
  lawyer_id:number;
  dayname:string;
  time_from:string;
  time_to:string;
  created_at:string;
  updated_at:string;
}