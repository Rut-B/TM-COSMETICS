import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticianCalendarComponent } from './cosmetician-calendar.component';

describe('CosmeticianCalendarComponent', () => {
  let component: CosmeticianCalendarComponent;
  let fixture: ComponentFixture<CosmeticianCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticianCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticianCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
