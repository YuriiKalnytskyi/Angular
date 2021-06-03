import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../modules/user";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user:User

  constructor(private router :Router , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  detail():void {
    this.router.navigate([this.user.id],{
      relativeTo:this.activatedRoute
    })
  }
}
