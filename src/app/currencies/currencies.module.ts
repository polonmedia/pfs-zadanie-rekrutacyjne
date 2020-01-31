import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrenciesRoutingModule } from './currencies-routing.module';
import { CurrenciesComponent } from './currencies.component';
import { CurrencyPlnComponent } from './currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './currency-usd/currency-usd.component';


@NgModule({
  declarations: [CurrenciesComponent, CurrencyPlnComponent, CurrencyUsdComponent],
  imports: [
    CommonModule,
    CurrenciesRoutingModule
  ]
})
export class CurrenciesModule { }
