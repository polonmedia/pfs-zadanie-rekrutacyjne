import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyUsdComponent } from './currency-usd.component';

describe('CurrencyUsdComponent', () => {
  let component: CurrencyUsdComponent;
  let fixture: ComponentFixture<CurrencyUsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyUsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyUsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
