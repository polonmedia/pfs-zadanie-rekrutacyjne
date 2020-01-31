import { Component, OnInit } from '@angular/core';
import { HttpService } from '../sys/http-service/http.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiReq } from '../sys/enums/api.enum';
import { BitBayRes } from '../sys/interfaces/bitbay-res.interface';

@Component({
  selector: 'pfs-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  public bitResponse: BitBayRes[];

  constructor(private http: HttpService) { }

  ngOnInit() {
    forkJoin(
      this.http.get<BitBayRes>(ApiReq.Base + 'BTCPLN/ticker.json').pipe(map(res => Object.assign(res, { currency: 'btc'}))),
      this.http.get<BitBayRes>(ApiReq.Base + 'LSKPLN/ticker.json').pipe(map(res => Object.assign(res, { currency: 'lsk'}))),
      this.http.get<BitBayRes>(ApiReq.Base + 'ETHPLN/ticker.json').pipe(map(res => Object.assign(res, { currency: 'eth'})))
    ).pipe(
      map(([btc, lsk, eth]) => {
        return [ btc, lsk, eth];
      })
    ).subscribe(response => {
      console.log('response', response);
      this.bitResponse = response;
    });
  }

}
