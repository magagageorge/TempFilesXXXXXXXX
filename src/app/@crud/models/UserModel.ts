import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


let counter = 0;

@Injectable()
export class  UserModel{
  id:number;
  username:string;
  email:string;
  mobile:string;
  user_level:string;
  status:string;
  email_verified:string;
  phone_verified:string;
  signup_device:string;
  created_at:string;
  updated_at:string;
}