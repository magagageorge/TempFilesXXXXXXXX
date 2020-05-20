import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  public static BitesToSize(bites: string): string {
    var b = parseInt(bites);
    var results = '';
    if (b > 1000000000) {
      results = Math.round((b / 1073741824) * 10) / 10 + 'Gb';
    } else if (b > 1000000) {
      results = Math.round((b / 1048576) * 10) / 10 + 'Mb';
    } else if (b > 1000) {
      results = Math.round((b / 1024) * 10) / 10 + 'Kb';
    } else {
      results = bites + 'b';
    }
    return results;
  }
}
