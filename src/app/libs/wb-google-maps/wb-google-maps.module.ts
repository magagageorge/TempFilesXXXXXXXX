import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WbMarkGoogleMapComponent } from './components/wb-mark-google-map/wb-mark-google-map.component';
import { WbShowonGoogleMapComponent } from './components/wb-showon-google-map/wb-showon-google-map.component';



@NgModule({
  declarations: [WbMarkGoogleMapComponent, WbShowonGoogleMapComponent],
  imports: [
    CommonModule
  ],
  exports: [WbMarkGoogleMapComponent, WbShowonGoogleMapComponent]
})
export class WbGoogleMapsModule { }
