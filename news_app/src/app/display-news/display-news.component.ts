import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { NewsServiceService } from '../news-service.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-display-news',
  templateUrl: './display-news.component.html',
  styleUrls: ['./display-news.component.css']
})
export class DisplayNewsComponent implements OnInit {
  p: number = 1;
  bookmark: any;
  favourite: any;
  flag = 0;
  index = 0;
  // userEmail: String[] = [];
  Articles: any[] = [];
  isUserLoggedin = false;
  constructor(private newsservice: NewsServiceService, private router: Router, private dataService: DataService, private snackBar: MatSnackBar
    , private authService: AuthenticationService) { }
  ngOnInit(): void {
    this.dataService.DateFilter.subscribe(res=>{
      this.getdatefilternews(res)
    })
    this.authService.isUserLogged.subscribe(res => {
      this.isUserLoggedin = res;
    });

    this.flag = 0;
    this.getHeadlines();

    this.dataService.searchData.subscribe(res => {
      console.log(res);
      if (res) {
        this.newsservice.getNews(res).subscribe((result: any) => {
          console.log(result);
          if (result.status == "ok") {
            this.Articles = result.articles;
          }
          else {

            this.Articles = [];
          }
        })
      }
      else if (res == "") {
        this.getHeadlines();
      }
    })

    this.dataService.countryFilter.subscribe(res => {
      console.log(res);
      if (res) {
        this.newsservice.getCountryNews(res).subscribe((result: any) => {
          console.log(result);
          if (result.status == "ok") {
            this.Articles = result.articles;
          }
          else {
            this.Articles = [];
          }
        })
      }
      else if (res == "") {
        this.getHeadlines();
      }
    })
    this.dataService.categoryFilter.subscribe(res => {
      console.log(res);
      if (res) {
        this.newsservice.getCategoryNews(res).subscribe((result: any) => {
          console.log(result);
          if (result.status == "ok") {
            this.Articles = result.articles;
          }
          else {
            this.Articles = [];
          }
        })
      }
      else if (res == "") {
        this.getHeadlines();
      }
    })
    this.dataService.sourceFilter.subscribe(res => {
      console.log(res);
      if (res) {
        this.newsservice.getSourceNews(res).subscribe((result: any) => {
          console.log(result);
          if (result.status == "ok") {
            this.Articles = result.articles;
          }
          else {
            this.Articles = [];
          }
        })
      }
      else if (res == "") {
        this.getHeadlines();
      }
    })

  }

  getHeadlines() {
    this.flag = 0;
    console.log("after")
    this.newsservice.getHeadlines().subscribe((res: any) => {
      if (res.status == "ok") {
        this.Articles = res.articles;
      }
      else {
        this.Articles = [];
      }
      console.log(res)
      // this.dataService.userEmail.subscribe((data: any) => {
      //   //this.userEmail = data;
      //   console.log("before")
      //   console.log(this.userEmail);

      // });
    });
  }
  openNews(item: any) {
    this.newsservice.currentArticle = item;
    this.router.navigate(['pop-up-news'])
  }

  postBookmark(item: any) {
    console.log(item.title);
    console.log(item.description);
    console.log(localStorage.getItem("userEmail"));
    item.userEmail = [localStorage.getItem("userEmail")];
    console.log(item);
    this.flag = 0;
    console.log(this.flag);
    this.newsservice.getBookmarks().subscribe(data => {
      this.bookmark = data;
      if (this.bookmark.length === 0) {
        this.flag = 1;
        console.log(this.flag);
        let sb1 = this.snackBar.open("Bookmark added Successfully!", "Done", {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ["sucess"]
        });
        sb1.onAction().subscribe(() => {
          sb1.dismiss();
        });
      }
      else {
        for (var i = 0; i < this.bookmark.length; i++) {
          if (this.bookmark[i].title == item.title) {
            this.index = i;
            for (var j = 0; j < this.bookmark[this.index].userEmail.length; j++) {

              console.log(this.bookmark[this.index].userEmail[j] + "==" + item.userEmail[0]);

              if (this.bookmark[this.index].userEmail[j] == item.userEmail[0]) {
                console.log(this.bookmark[this.index].userEmail[j] + "===" + item.userEmail[0])
                this.flag = 0;
                console.log("flag______________________", this.flag);
                let sb = this.snackBar.open("This Article is already bookmarked", "Close", {
                  duration: 5000,
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                  panelClass: ["unsucess"]
                });
                sb.onAction().subscribe(() => {
                  sb.dismiss();
                });
                break;
              }
              else {
                this.flag = 1;
              }
            }
            break;
          }
          else {
            this.flag = 1;
          }
        }

      }
      if (this.flag === 1) {
        let sb1 = this.snackBar.open("Bookmark added Successfully!", "Done", {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ["sucess"]
        });
        sb1.onAction().subscribe(() => {
          sb1.dismiss();
        });
        this.newsservice.addBookmark(item).subscribe(
          (data: any) => {
            console.log("add");
            console.log(data);

          }, (error: any) => {
            console.error();
          });

      }

    });
  }

  postFavourite(item: any) {
    // console.log(item.title);
    // console.log(item.description);
    // console.log(localStorage.getItem("userEmail"));
    console.log(item);
    item.username = [localStorage.getItem("userN")];
    console.log(item);
    this.flag = 0;
    console.log(this.flag);
    this.newsservice.getFavourites().subscribe(data => {
      this.favourite = data;
      if (this.favourite.length === 0) {
        this.flag = 1;
        console.log(this.flag);
        let sb1 = this.snackBar.open("Favourite Added!", "Done", {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ["custom-style2"]
        });
        sb1.onAction().subscribe(() => {
          sb1.dismiss();
        });
      }
      else {
        for (var i = 0; i < this.favourite.length; i++) {
          if (this.favourite[i].title == item.title) {
            this.index = i;
            for (var j = 0; j < this.favourite[this.index].username.length; j++) {

              console.log(this.favourite[this.index].username[j] + "==" + item.username[0]);

              if (this.favourite[this.index].username[j] == item.username[0]) {
                console.log(this.favourite[this.index].username[j] + "===" + item.username[0])
                this.flag = 0;
                console.log("flag______________________", this.flag);
                let sb = this.snackBar.open("This Article is already favourited", "Close", {
                  duration: 5000,
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                  panelClass: ["custom-style"]
                });
                sb.onAction().subscribe(() => {
                  sb.dismiss();
                });
                break;
              }
              else {
                this.flag = 1;
              }
            }
            break;
          }
          else {
            this.flag = 1;
          }
        }

      }
      if (this.flag === 1) {
        let sb1 = this.snackBar.open("Favourite added Successfully!", "Done", {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ["custom-style2"]
        });
        sb1.onAction().subscribe(() => {
          sb1.dismiss();
        });
        this.newsservice.addFavourite(item).subscribe(
          (data: any) => {
            console.log("add");
            console.log(data);
          }, (error: any) => {
            console.error();
          });
      }
    });
  }
  getdatefilternews(res:any) {
    if(res) {
      this.newsservice.getDateNews(res.from , res.to).subscribe((result: any) => {
       console.log(result);
       if (result.status == "ok") {
         this.Articles = result.articles;
       }
       else {
         this.Articles = [];
       }
     })
   }
   else if (res == "") {
     this.getHeadlines();
   }
 
    }
   }
