import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAGComponent } from './orders-ag.component';

describe('OrdersAGComponent', () => {
  let component: OrdersAGComponent;
  let fixture: ComponentFixture<OrdersAGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersAGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
