import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  user: User

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  ngOnInit(): void {
  }

  catcUser(value: any) {
    this.user = value
  }

}
