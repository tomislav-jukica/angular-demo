import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private app: AppComponent, private router: Router) { }
  user;
  hide = true;
  formEdit;

  ngOnInit() {
    this.user = this.app.editUser;
    this.formEdit = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      password: new FormControl(),
    });
    this.formEdit.setValue({
      name: this.user.name,
      surname: this.user.surname,
      password: this.user.password,
    });
    console.log(this.formEdit);

  }

  onEdit() {
    this.app.users.forEach(editUser => {
      if (editUser.id === this.user.id) {
        editUser.name = this.formEdit.get('name').value;
        editUser.surname = this.formEdit.get('surname').value;
        editUser.password = this.formEdit.get('password').value;
      }
    });
    this.router.navigate(['list']);
  }

}
