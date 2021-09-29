import {Component, Input} from '@angular/core';
import {AuthenticationService} from './authentication.service';
class User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthenticationService) {}
  title = 'emil-frey';
  editUser;
  public users = [{
    id: 1,
    name: 'Tomislav',
    surname: 'Jukica',
    email: 'admin@gmail.com',
    password: 'admin'
  },
    {
      id: 2,
      name: 'Mislav',
      surname: 'Bago',
      email: 'bago@gmail.com',
      password: 'pago'
    },
    {
      id: 3,
      name: 'Željko',
      surname: 'Pervan',
      email: 'pero@gmail.com',
      password: 'pero'
    }];
}
