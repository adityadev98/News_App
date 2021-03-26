import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-pop-up-bookmark',
  templateUrl: './pop-up-bookmark.component.html',
  styleUrls: ['./pop-up-bookmark.component.css']
})
export class PopUpBookmarkComponent implements OnInit {
  article: any;

  constructor(private newsservice: NewsServiceService) { }

  ngOnInit(): void {
    this.article = this.newsservice.currentArticle;
    console.log(this.article);
  }

}
