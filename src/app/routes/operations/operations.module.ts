import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { OperationsRoutingModule } from './operations.routing.module';
import { WayBillComponent } from './way-bill/way-bill.component';


const COMPONENTS = [
  WayBillComponent,
];

@NgModule({
  imports: [SharedModule, OperationsRoutingModule],
  declarations: [...COMPONENTS],
})
export class OperationsModule {}
