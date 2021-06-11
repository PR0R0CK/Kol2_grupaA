import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsAGComponent } from './orders-details-ag.component';

describe('OrdersDetailsAGComponent', () => {
  let component: OrdersDetailsAGComponent;
  let fixture: ComponentFixture<OrdersDetailsAGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsAGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsAGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
