import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WbDateTimePickerListComponent } from './components/wb-date-time-picker-list/wb-date-time-picker-list.component';



@NgModule({
  declarations: [WbDateTimePickerListComponent],
  exports: [WbDateTimePickerListComponent],
  imports: [
    CommonModule
  ]
})
export class WfCalendarModule { }
