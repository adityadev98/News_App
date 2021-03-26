import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isUserLogged: BehaviorSubject<boolean> = new BehaviorSubject(this.isUserAuthenticated());

  constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  isUserAuthenticated() {
    return this.tokenService.getToken() ? true : false;
  }
}

