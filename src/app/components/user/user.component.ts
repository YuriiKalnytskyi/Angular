import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user:User

  @Output()
  lift= new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  lifting() {
  this.lift.emit(this.user)
  }

}
