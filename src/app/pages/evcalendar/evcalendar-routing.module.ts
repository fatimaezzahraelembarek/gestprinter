import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvcalendarPage } from './evcalendar.page';

const routes: Routes = [
  {
    path: '',
    component: EvcalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvcalendarPageRoutingModule {}
