import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserIdService} from "../../services/user-id.service";
import {Post} from "../../modules/post";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  post:Post[]

  constructor(private activatedRoute:ActivatedRoute  ,private userIdService:UserIdService) {
    this.activatedRoute.params.subscribe(params=>{
      this.userIdService.getUsersId(params.id).subscribe(value => {
        this.post=value
        console.log(value)
      })
    })
  }

  ngOnInit(): void {
  }

}
