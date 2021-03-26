import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private router: Router, private location: Location) { }

  routeToLogin() {
    this.router.navigate(['login']);
  }
  routeToError() {
    this.router.navigate(['error']);
  }
  routeToCardDetails(idParam: string){
    this.router.navigate(['display', idParam ]);
  }
  
  routeToFavorites(){ 
    this.router.navigate(['favourites']);
  }
  routeToHome(){
    this.router.navigate(['display']);
  }
  routeToBookMarks(){
    this.router.navigate(['bookmarks']);
  }
  routeToPopUpBookMarks(){
    this.router.navigate(['pop-up-bookmark']);
  }
  routeToSignup(){
    this.router.navigate(['signup']);

  }
}
