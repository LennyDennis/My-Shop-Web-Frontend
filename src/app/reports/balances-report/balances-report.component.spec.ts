import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesReportComponent } from './balances-report.component';

describe('BalancesReportComponent', () => {
  let component: BalancesReportComponent;
  let fixture: ComponentFixture<BalancesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
