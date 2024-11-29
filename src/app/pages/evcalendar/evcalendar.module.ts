import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
//import { CalendarModule } from 'ion7-calendar';
//import { NgCalendarModule  } from 'ionic2-calendar';


import { EvcalendarPageRoutingModule } from './evcalendar-routing.module';

import { EvcalendarPage } from './evcalendar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvcalendarPageRoutingModule,
	//   NgCalendarModule,
  ],
  declarations: [EvcalendarPage]
})
export class EvcalendarPageModule {}
