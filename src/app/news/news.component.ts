import { Component, OnInit } from '@angular/core';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  countryCode: string = "IE";
  newsArray: any[] =[];

  newsHeadlineDisabled = true;
  newsCount: string = "";
  
  constructor(private news:NewsProvider) {
    this.newsArray = [];
   }

  ngOnInit(): void {
    this.news.getNews(this.countryCode).subscribe(data =>{
      this.newsArray = data.articles;
      this.newsHeadlineDisabled = false;
      this.newsCount = data.totalResults;
    }, (error) =>{
      console.log("Error Getting the News!!!");
    });
  }

}
