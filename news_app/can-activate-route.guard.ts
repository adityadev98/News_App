import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';
import { RouterService } from 'src/app/router.service';
@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private routerService: RouterService) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
    console.log(state)
    if (this.authService.isUserAuthenticated()) {
      return true;
    } else {
      this.routerService.routeToLogin();
      return false;
    }
  }
}