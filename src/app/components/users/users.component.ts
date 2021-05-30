import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../serveces/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users=value
    })
  }

}
