import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { News } from './news';
import { Newsfav } from './newsfav';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  currentArticle: any;
  url = environment.url
  apiKey = environment.apiKey
  country: String = "in";
  news: News = new News();
  bookmark: any;
  flag = 0;
  constructor(private http: HttpClient) { }

  getNews(searchText: String) {
    let requesturl;

    requesturl = this.url + 'everything?q=' + searchText + '&sortBy=publishedAt&apiKey=' + this.apiKey

    return this.http.get(requesturl);
  }

  getHeadlines() {
    let requesturl = this.url + "top-headlines?country=in&apiKey=" + this.apiKey

    return this.http.get(requesturl);

  }
  getCategoryNews(category: String) {
    console.log("category= " + category);
    //let requesturl = this.url + "sources?category=" + category + "&apiKey=" + this.apiKey
    let requesturl = this.url + "top-headlines?country=" + this.country + "&category=" + category + "&apiKey=" + this.apiKey
    return this.http.get(requesturl);
  }
  getCountryNews(country: String) {
    console.log("country= " + country);
    let requesturl = this.url + "top-headlines?country=" + country + "&apiKey=" + this.apiKey
    this.country = country;
    return this.http.get(requesturl);
  }
  getSourceNews(source: String) {
    console.log("source= " + source);
    let requesturl = this.url + "top-headlines?sources=" + source + "&apiKey=" + this.apiKey
    return this.http.get(requesturl);
  }
  getBookmarks(): Observable<Array<News>> {
    return this.http.get<Array<News>>('http://localhost:8081/NewsBookmarks/getNewsBookmarks');
  }
  addBookmark(item: any) {
    console.log("item= " + item);
    console.log(item.urlToImage);
    console.log(item.url);
    console.log(item.publishedAt);
    return this.http.post<News>("http://localhost:8081/NewsBookmarks/addNewsBookmarks", item);
  }
  removeBookmark(item: any) {
    console.log("item= " + item);
    console.log(item.urlToImage);
    console.log(item.url);
    console.log(item.publishedAt);
    return this.http.post("http://localhost:8081/NewsBookmarks/deleteBookmark", item, { responseType: "text" });
  }

  getFavourites(): Observable<Array<Newsfav>> {
    //this.username= localStorage.getItem("userN");
    return this.http.get<Array<Newsfav>>('http://localhost:8081/newsFavourite/getnewsFavourite');
  }

  addFavourite(item: any) {
    return this.http.post("http://localhost:8081/newsFavourite/addnewsFavourite", item);
  };
  removeFavourite(item: any) {
    console.log("item= " + item);
    console.log(item.urlToImage);
    console.log(item.url);
    console.log(item.publishedAt);
    return this.http.post("http://localhost:8081/newsFavourite/deleteFavourite", item, { responseType: "text" });
  }
  getDateNews(from: String , to:String) {
    let requesturl = this.url + "everything?q=NOT bitcoinfrom=" + from +"&to="+ to+"&sortBy=popularity"+ "&apiKey=" + this.apiKey
    return this.http.get(requesturl);
  }

}