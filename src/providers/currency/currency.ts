import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrencyProvider {


  constructor(public http: HttpClient) {
    console.log('Hello CurrencyProvider Provider');
  }

  getSpecificCurrency(currencies: string[]): string {
    var currenciesString  = "";
    for (var i = 0; i < currencies.length; i++ ) {
        currenciesString = currenciesString + currencies[i] + ",";
    }
    return currenciesString;
  }


  getCurrency(currencies: string[]) : Observable<any> {
    return this.http.get("http://data.fixer.io/api/latest?access_key=7bfa77914817eed7d696969df75e3e2c&base=eur&symbols=" + this.getSpecificCurrency(currencies) + "&format=1");
  }

//   https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=7e45304fd6e0a155c79f 

}
