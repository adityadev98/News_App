import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-pop-up-fav',
  templateUrl: './pop-up-fav.component.html',
  styleUrls: ['./pop-up-fav.component.css']
})
export class PopUpFavComponent implements OnInit {
  article: any;
  constructor(private newsservice: NewsServiceService) { }

  ngOnInit(): void {
    this.article = this.newsservice.currentArticle;
    console.log(this.article);
  }

}
