import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule, MatFormFieldControl, MatInputModule, MatTableModule, MatSnackBar, MatSnackBarContainer
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './list/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AuthenticationService} from './authentication.service';
import {RoutingGuardService} from './routing-guard.service';
import {MatTooltipModule} from '@angular/material/tooltip';

const appRoutes: Routes = [
 // {path: '', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add', canActivate: [RoutingGuardService], component: AddComponent},
  {path: 'list', canActivate: [RoutingGuardService],  component: ListComponent},
  {path: 'edit', canActivate: [RoutingGuardService], component: EditComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    LoginComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    RouterModule.forRoot(appRoutes, {
      onSameUrlNavigation: 'reload'
    }),
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  exports: [RouterModule],
  providers: [MatSnackBar, AuthenticationService, RoutingGuardService],
  bootstrap: [AppComponent],
  entryComponents: [MatSnackBarContainer]
})
export class AppModule { }
