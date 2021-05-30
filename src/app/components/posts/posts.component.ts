import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {UserService} from "../../serveces/user.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[]
  @Input()
  userid:number

  constructor(private userService :UserService) { }

  ngOnInit(): void {
    this.userService.getPosts(this.userid).subscribe(value => {
      this.posts=value
    })
  }

}
