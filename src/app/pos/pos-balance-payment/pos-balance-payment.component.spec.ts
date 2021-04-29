import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosBalancePaymentComponent } from './pos-balance-payment.component';

describe('PosBalancePaymentComponent', () => {
  let component: PosBalancePaymentComponent;
  let fixture: ComponentFixture<PosBalancePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosBalancePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosBalancePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
