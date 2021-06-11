import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersAGComponent } from './components/orders-ag/orders-ag.component';
import { OrdersDetailsAGComponent } from './components/orders-details-ag/orders-details-ag.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersAGComponent
  },
  {
    path: 'details',
    component: OrdersDetailsAGComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
