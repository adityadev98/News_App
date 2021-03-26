import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { TokenStorageService } from '../token-storage.service';


import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  userN: String = '';
  constructor(private authService: AuthenticationService, private tokenStorage: TokenStorageService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {

        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.authService.isUserLogged.next(true);
        localStorage.setItem("userEmail", username);
        localStorage.setItem("userN", username);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
        this.router.navigateByUrl('/display');
        let sb = this.snackBar.open("Welcome " + localStorage.getItem("userEmail"), "Close", {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ["custom-style"]
        });
        sb.onAction().subscribe(() => {
          sb.dismiss();
        });
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
