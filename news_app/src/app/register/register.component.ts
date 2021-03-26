import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthenticationService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe(
      (data: any) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('/login');
        let sb = this.snackBar.open("Registered successfully!", "Close", {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ["custom-style"]
        });
        sb.onAction().subscribe(() => {
          sb.dismiss();
        });
      },
      (err: any) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
