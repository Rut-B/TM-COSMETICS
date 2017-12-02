import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticianSettingsComponent } from './cosmetician-settings.component';

describe('CosmeticianSettingsComponent', () => {
  let component: CosmeticianSettingsComponent;
  let fixture: ComponentFixture<CosmeticianSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmeticianSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticianSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
