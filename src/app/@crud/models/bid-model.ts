import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


let counter = 0;

@Injectable()
export class  Bids{
  id:number;
  booking:string[];
  lawyer:string[];
  status:string;
  created_at:string;
  updated_at:string;
}