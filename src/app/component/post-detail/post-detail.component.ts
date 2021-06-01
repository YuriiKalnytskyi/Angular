import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../serveces/post.service";
import {Post} from "../../models/Post";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post:Post

  constructor(private postService:PostService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute. params.subscribe(params => {
      console.log(params.id);
      this.postService.getPostsId(params.id).subscribe(value => this.post=value)
    })
  }

  ngOnInit(): void {
  }

}
