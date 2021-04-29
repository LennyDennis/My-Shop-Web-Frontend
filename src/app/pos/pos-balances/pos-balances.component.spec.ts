import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosBalancesComponent } from './pos-balances.component';

describe('PosBalancesComponent', () => {
  let component: PosBalancesComponent;
  let fixture: ComponentFixture<PosBalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosBalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
