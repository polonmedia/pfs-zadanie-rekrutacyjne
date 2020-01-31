import { Component, OnInit, Input } from '@angular/core';
import { BitBayRes } from 'src/app/sys/interfaces/bitbay-res.interface';

@Component({
  selector: 'pfs-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.scss']
})
export class CurrencyPlnComponent implements OnInit {
  @Input() res: BitBayRes;
  constructor() { }

  ngOnInit() {
  }

}
