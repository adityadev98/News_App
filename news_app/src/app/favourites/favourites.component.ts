import { Router } from '@angular/router';
import { NewsServiceService } from '../news-service.service';
import { Newsfav } from '../newsfav';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Component, OnInit } from '@angular/core';

//import { User } from '../user';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  p: number = 1;
  allFavourites: Array<Newsfav> = [];
  username: any = "";
  favourite: any;
  flag = 0;
  constructor(private newsService: NewsServiceService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.newsService.getFavourites().subscribe(data => {
      //console.log(data);
      console.log(data);
      //localStorage.setItem("userN",username);
      console.log(typeof (localStorage.getItem("userN")));
      this.username = localStorage.getItem('userN');
      //this.username = userJson !== null ? JSON.parse(userJson) :userJson;
      //console.log(JSON.parse(localStorage.getItem("userN")));
      //this.username=[localStorage.getItem("userN")];
      //this.username=JSON.parse(localStorage.getItem('userN')!);
      //this.username=JSON.parse(localStorage.getItem('userN')||'{}');
      console.log("hello world");
      console.log(this.username);

      for (var i = 0; i < data.length; i++) {
        if (data[i]["username"].includes(this.username)) {
          this.allFavourites.push(data[i]);
        }
      }
    })
  }

  openNews(item: any) {
    this.newsService.currentArticle = item;
    this.router.navigate(['pop-up-favourite'])
  }
  remFavourite(item: any) {
    this.flag = 0;
    console.log(item.title);
    console.log(localStorage.getItem("userN"));
    item.username = [localStorage.getItem("userN")];
    console.log(item);
    console.log(item.username);
    this.newsService.getFavourites().subscribe(data => {
      this.favourite = data;
      console.log(this.favourite);
      for (var i = 0; i < this.favourite.length; i++) {

        if (this.favourite[i].title === item.title) {
          for (var j = 0; j < this.favourite[i].username.length; j++) {
            //console.log(this.bookmark[i].userEmail[j]+"=="+item.userEmail+"--->+"+this.bookmark[i].userEmail[j]+)
            if (this.favourite[i].username[j] === item.username[0]) {
              this.flag = 1;
              break;
            }
            else {
              this.flag = 0;
            }
          }
        }
      }
      if (this.flag == 1) {
        let sb1 = this.snackBar.open("Favourite has been deleted successfully!", "Done", {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ["custom-style2"]
        });
        sb1.onAction().subscribe(() => {
          sb1.dismiss();
        });

        this.newsService.removeFavourite(item).subscribe(
          (data: any) => {
            console.log(data);
            if (data == "Favourite Deleted") {

            }
          }, (error: any) => {
            console.error();
          });
        location.reload();
      }
      else {
        let sb = this.snackBar.open("You have not favourited this post!", "Done", {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ["custom-style"]
        });
        sb.onAction().subscribe(() => {
          sb.dismiss();
        });
      }
    })
  }
}
