import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosCategoriesComponent } from './pos-categories.component';

describe('PosCategoriesComponent', () => {
  let component: PosCategoriesComponent;
  let fixture: ComponentFixture<PosCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
