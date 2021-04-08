import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSalesComponent } from './general-sales.component';

describe('GeneralSalesComponent', () => {
  let component: GeneralSalesComponent;
  let fixture: ComponentFixture<GeneralSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
