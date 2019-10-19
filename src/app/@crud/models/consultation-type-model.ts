import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


let counter = 0;

@Injectable()
export class  ConsultationTypeModel{
  id:number;
  name:string;
}