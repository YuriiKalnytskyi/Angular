import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserService} from "./services/user.service";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import {UserIdService} from "./services/user-id.service";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers:[UserService , UserIdService]
})
export class UserModule { }
