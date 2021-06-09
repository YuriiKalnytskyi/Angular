import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {FormControl, FormGroup} from "@angular/forms";
import {Post} from "../../models/post";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  users:User[]
  post:Post[]


  muForm=new FormGroup({
    id:new FormControl(0)
  });

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(value => {
      this.users=value
    })
  }

  save(): void{
    this.userService.getPost(this.muForm.getRawValue().id).subscribe(value =>this.post=value )
  }
}
