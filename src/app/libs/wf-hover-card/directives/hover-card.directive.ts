import { Directive } from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { HoverCardService } from '../services/hover-card.service';

@Directive({
  selector: '[appHoverCard]',
  exportAs: '[appHoverCard]',
})
export class HoverCardDirective {

  constructor(hoverCardService:HoverCardService) { }
    ngOnInit(): void {
      this._init();
    }
    
    private _init() {
      const nameInput = document.getElementById('name') as HTMLInputElement;
    fromEvent(document.getElementsByClassName('hover-card-link'), 'hover')
    .pipe(
    //debounceTime(2000),
    //distinctUntilChanged(),
    map(event => {
    const data = event.target['innerHTML'];
    //const links: Link[] = this.hoverCardService.find(data);
    console.log('data: ', data);
    alert(data);
    //console.log('links: ', links);
    //event.target['innerHTML'] = this.linkifyService.linkify(data);
    return;
    })).subscribe((links) => {
    //this.linkPreviewService.onLinkFound.emit(links);
    });
    }
}
