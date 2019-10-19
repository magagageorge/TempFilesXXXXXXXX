import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class  Answer{
  id:string;
  userid:number;
  post_id:string;
  content:string;
  answered:boolean;
  created_at:string;
  created_by:string;
  updated_at:string;
  updated_by:string;  
}