import { Injectable } from '@angular/core';
import { DwViewerService } from '@app/daywaka/services/dw-viewer.service';

@Injectable({
  providedIn: 'root'
})
export class DwPageViewerService {

  constructor(public dwViewerService:DwViewerService) { }
}
