import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupName} from '@angular/forms';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dobarLogin = false;
  hide = true;
  formLogin;
  errorMessage = '';
  constructor(private router: Router,
              private app: AppComponent,
              private snackBar: MatSnackBar,
              private authService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.errorMessage = '';
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
    console.log(this.app.users);
  }

  onLogin() {
    for (let i = 0; i < this.app.users.length; i++) {
      if (this.app.users[i].email === this.formLogin.get('email').value &&
          this.app.users[i].password === this.formLogin.get('password').value) {
        console.log('Dobar login');
        this.dobarLogin = true;
        this.authService.login();
        this.router.navigate(['add']);
        break;
      }
    }
    if (!this.dobarLogin) {
      this.wrongLogin('Wrong e-mail or password', 'OK');
    }
  }
  wrongLogin(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
