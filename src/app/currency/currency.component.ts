import { Component, OnInit } from '@angular/core';
import { CurrencyProvider } from '../../providers/currency/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies: string[] = ["USD", "JPY", "GBP", "AUD", "CAD", "CHF"];
  currencyArray: string[];
  usd: string = "";
  jpy: string = "";
  gbp: string = "";
  aud: string = "";
  cad: string = "";
  chf: string = "";


  constructor(private currencyProvider : CurrencyProvider) {
    this.currencyArray=[];
   }

  ngOnInit(): void {
    this.currencyProvider.getCurrency(this.currencies).subscribe(data =>{
      this.currencyArray = data.rates;
      this.usd = data.rates.USD.toFixed(3);
      this.jpy = data.rates.JPY.toFixed(3);
      this.gbp = data.rates.GBP.toFixed(3);
      this.aud = data.rates.AUD.toFixed(3);
      this.cad = data.rates.CAD.toFixed(3);
      this.chf = data.rates.CHF.toFixed(3);
      }, (error) =>{
      console.log("Error Getting the Exchange Rates!!!");
    });
  }

}
