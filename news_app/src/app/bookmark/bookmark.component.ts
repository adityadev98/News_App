import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsServiceService } from '../news-service.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  p: number = 1;
  allBookmarks: any;
  flag = 0;
  index = 0;
  bookmark: any;
  constructor(private newsService: NewsServiceService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.newsService.getBookmarks().subscribe(data => {
      this.allBookmarks = data;
      this.flag = 0
    })
  }

  openNews(item: any) {
    this.newsService.currentArticle = item;
    this.router.navigate(['pop-up-bookmark'])
  }

  remBookmark(item: any) {
    this.flag = 0;
    console.log(item.title);
    console.log(localStorage.getItem("userEmail"));
    item.userEmail = [localStorage.getItem("userEmail")];
    console.log(item);
    console.log(item.userEmail);
    this.newsService.getBookmarks().subscribe(data => {
      this.bookmark = data;
      console.log(this.bookmark);
      for (var i = 0; i < this.bookmark.length; i++) {

        if (this.bookmark[i].title === item.title) {
          for (var j = 0; j < this.bookmark[i].userEmail.length; j++) {
            //console.log(this.bookmark[i].userEmail[j]+"=="+item.userEmail+"--->+"+this.bookmark[i].userEmail[j]+)
            if (this.bookmark[i].userEmail[j] === item.userEmail[0]) {
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
        let sb1 = this.snackBar.open("Bookmark has been deleted successfully!", "Done", {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ["sucess"]
        });
        sb1.onAction().subscribe(() => {
          sb1.dismiss();
        });
        this.newsService.removeBookmark(item).subscribe(
          (data: any) => {
            console.log(data);
            if (data == "Bookmark Deleted") {

            }
          }, (error: any) => {
            console.error();
          });
        location.reload();
      }
      else {
        let sb = this.snackBar.open("You have not bookmarked this post!", "Done", {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ["unsucess"]
        });
        sb.onAction().subscribe(() => {
          sb.dismiss();
        });
      }
    })
  }
}
