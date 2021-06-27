import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WayBillComponent } from './way-bill/way-bill.component';


const routes: Routes = [
  { path: 'way-bill', component: WayBillComponent },
  { path: 'way-bill', component: WayBillComponent },
  { path: 'way-bill', component: WayBillComponent },
  { path: 'way-bill', component: WayBillComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationsRoutingModule {}
