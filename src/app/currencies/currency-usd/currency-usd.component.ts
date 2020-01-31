import { Component, OnInit, Input } from '@angular/core';
import { BitBayRes } from 'src/app/sys/interfaces/bitbay-res.interface';

@Component({
  selector: 'pfs-currency-usd',
  templateUrl: './currency-usd.component.html',
  styleUrls: ['./currency-usd.component.scss']
})
export class CurrencyUsdComponent implements OnInit {
  @Input() res: BitBayRes;
  constructor() { }

  ngOnInit() {
  }

}
