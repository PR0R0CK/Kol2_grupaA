import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemAGComponent } from './orders-item-ag.component';

describe('OrdersItemAGComponent', () => {
  let component: OrdersItemAGComponent;
  let fixture: ComponentFixture<OrdersItemAGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemAGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemAGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
