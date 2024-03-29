import {Pipe, PipeTransform} from '@angular/core';
// @ts-ignore
import * as linkify from 'linkifyjs';
// @ts-ignore
import linkifyStr from 'linkifyjs/string';

@Pipe({
  name: 'wfLinkify'
})
export class WfLinkifyPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return value ? linkifyStr(value, {target: '_system'}) : value;
  }

}
