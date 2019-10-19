import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


let counter = 0;

@Injectable()
export class  LawyerEducationModel{
  id:number;
  profile_id:number;
  institution_name:string;
  major:string;
  startmonth:string;
  startyear:string;
  endmonth:string;
  endyear:string;
  description:string;
  created_at:string;
  updated_at:string;
  added_by:string;
}