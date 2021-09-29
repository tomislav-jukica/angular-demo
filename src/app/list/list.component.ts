import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  columns: string[] = ['id', 'name', 'surname', 'email', 'operation'];
  data;
  isListChanged;
  constructor(private app: AppComponent,
              private router: Router) {}

  ngOnInit() {
    this.data = this.app.users;
    console.log(this.data);
  }
  onEdit(user) {
    this.app.editUser = user;
    this.router.navigate(['edit']);
  }
  onDelete(user) {
    for (let i = 0; i < this.app.users.length; i++) {
      if (this.app.users[i].id === user.id) {
        this.app.users.splice(i, 1);
        break;
      }
    }
    this.data = this.data.filter(item => item.id !== user.id);
  }

}
