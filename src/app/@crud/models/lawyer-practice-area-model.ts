import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


let counter = 0;

@Injectable()
export class  LawyerPracticeAreaModel{
  id:number;
  category_id:number;
  lawyer_id:number;
  created_at:string;
  updated_at:string;
}