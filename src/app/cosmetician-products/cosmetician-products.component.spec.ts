import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticianProductsComponent } from './cosmetician-products.component';

describe('CosmeticianProductsComponent', () => {
  let component: CosmeticianProductsComponent;
  let fixture: ComponentFixture<CosmeticianProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticianProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticianProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
