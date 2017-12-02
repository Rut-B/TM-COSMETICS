import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticianMenuComponent } from './cosmetician-menu.component';

describe('CosmeticianMenuComponent', () => {
  let component: CosmeticianMenuComponent;
  let fixture: ComponentFixture<CosmeticianMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticianMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticianMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
