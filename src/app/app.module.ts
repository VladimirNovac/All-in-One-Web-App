import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WeatherProvider } from '../providers/weather/weather';
import { NewsProvider } from '../providers/news/news';
import { CurrencyProvider } from '../providers/currency/currency';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { DateComponent } from './date/date.component';
import { NewsComponent } from './news/news.component';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WeatherComponent,
    DateComponent,
    NewsComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WeatherProvider,
    NewsProvider,
    CurrencyProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
