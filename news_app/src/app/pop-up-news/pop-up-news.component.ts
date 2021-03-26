import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-pop-up-news',
  templateUrl: './pop-up-news.component.html',
  styleUrls: ['./pop-up-news.component.css']
})
export class PopUpNewsComponent implements OnInit {
  article: any;

  constructor(private newsservice: NewsServiceService) { }

  ngOnInit(): void {
    this.article = this.newsservice.currentArticle;
    console.log(this.article);
  }

}
