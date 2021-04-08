import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSalesDialogComponent } from './general-sales-dialog.component';

describe('GeneralSalesDialogComponent', () => {
  let component: GeneralSalesDialogComponent;
  let fixture: ComponentFixture<GeneralSalesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSalesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSalesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
