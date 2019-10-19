import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from './answer-model';

export class  Question{
  id:string;
  userid:number;
  picture:string;
  title:string;
  content:string;
  legal_area:string;
  country:string;
  answered:boolean;
  isNewRecord:boolean;
  no_answers:string;
  answers:Answer[];
  constructor(){
	this.id= "";
	this.title= "";
    this.content="";
    this.legal_area= "";
    this.country= "";
    this.answers=[];	
  }
}