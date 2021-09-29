import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroupName, FormGroup, Validators} from '@angular/forms';
import {LoginComponent} from '../login/login.component';
import {AppModule} from '../app.module';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  hide = true;
  passwordError = false;
  emailError = false;
  formAdd;
  newUserId;

  constructor(private app: AppComponent,
              private router: Router) {
  }

  ngOnInit() {
    this.formAdd = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repeatPassword: new FormControl()
    });
  }

  checkPassword() {
    if (this.formAdd.get('password').value !== this.formAdd.get('repeatPassword').value &&
      this.formAdd.get('repeatPassword').dirty === true) {
      this.passwordError = true;
      this.formAdd.setErrors({ invalid: true });
    } else {
      this.passwordError = false;
      this.formAdd.setErrors(null);
    }

  }

  checkEmail() {
    for (let i = 0; i < this.app.users.length; i++) {
      if (this.formAdd.get('email').value === this.app.users[i].email) {
        this.emailError = true;
        this.formAdd.setErrors({ invalid: true });
        break;
      } else {
        this.formAdd.setErrors(null);
        this.emailError = false;
      }
    }
  }

  onAdd() {
    if (this.app.users.length === 0) {
      this.newUserId = 1;
    } else {
      this.newUserId = this.app.users[this.app.users.length - 1].id + 1;
    }
    this.app.users.push({
      id: this.newUserId,
      name: this.formAdd.get('name').value,
      surname: this.formAdd.get('surname').value,
      email: this.formAdd.get('email').value,
      password: this.formAdd.get('password').value,
    });
    this.router.navigate(['list']);
  }
}
