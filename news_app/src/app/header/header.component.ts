import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';
import { News } from '../news';
import { NewsServiceService } from '../news-service.service';
import { RouterService } from '../router.service';
import { TokenStorageService } from '../token-storage.service';
import { MatSnackBar } from "@angular/material/snack-bar";
declare const onExpand: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  range = new FormGroup({
    from: new FormControl(),
    to: new FormControl()
  });
  category: string = "";
  country: string = "";
  source: string = "";
  bookmark: any;
  bookmarkById: any;
  @Output() newItemEvent = new EventEmitter<string>();
  searchkey = "";
  isUserLoggedIn = false;

  constructor(private dataService: DataService, private newsService: NewsServiceService,
    private routerService: RouterService,
    private tokenService: TokenStorageService, private authService: AuthenticationService,
    private snackBar: MatSnackBar, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.authService.isUserLogged.subscribe((res: boolean) => {
      this.isUserLoggedIn = res;
    });
  }

  search(event: any) {
    console.log(this.searchkey);
    this.dataService.searchData.next(this.searchkey)
  }
  expand() {
    onExpand();
  }

  getHeadlines() {
    this.dataService.searchData.next("");
    this.searchkey = "";
  }

  getCategory(event: any) {
    this.category = event.target.value;
    console.log(this.category);
    this.dataService.categoryFilter.next(this.category);
  }

  getCountry(event: any) {
    this.country = event.target.value;
    console.log(this.country);
    this.dataService.countryFilter.next(this.country);
  }

  getSource(event: any) {
    this.source = event.target.value;
    console.log(this.source);
    this.dataService.sourceFilter.next(this.source);
  }
  getDate(event:any) {
    console.log(event);
  }

  getBookmark() {
    this.newsService.getBookmarks().subscribe(data => {
      this.bookmark = data;
      console.log(this.bookmark);
    })
  }

  logoutUser() {
    let sb = this.snackBar.open("Logged out successfully " + localStorage.getItem("userEmail"), "Close", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ["custom-style"]
    });
    this.tokenService.signOut();

    this.authService.isUserLogged.next(false);

    this.routerService.routeToHome();

  }
  onDateChange(): void {
    if(this.range.value.from && this.range.value.to)
    {
    console.log(this.range.value.from);
    let date={from:this.datepipe.transform(this.range.value.from,'yyyy-MM-dd'),
    to:this.datepipe.transform(this.range.value.to,'yyyy-MM-dd')

    }
    console.log(date);
    this.dataService.DateFilter.next(date);
    }
    else {

    }
  }

}
