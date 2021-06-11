import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersAGComponent } from './components/orders-ag/orders-ag.component';
import { OrdersItemAGComponent } from './components/orders-item-ag/orders-item-ag.component';
import { OrdersDetailsAGComponent } from './components/orders-details-ag/orders-details-ag.component';
import {HttpClientModule} from '@angular/common/http';
import { AGDataService } from './services/ag-data.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersAGComponent,
    OrdersItemAGComponent,
    OrdersDetailsAGComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AGDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
