import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models/Post";
import {ActivatedRoute, Router} from "@angular/router";
import {PostIdService} from "../../../services/post-id.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post

  constructor(private postIdService:PostIdService,private router:Router , private activatedRoute :ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>{
      this.post=this.router.getCurrentNavigation()?.extras.state as Post
      if (!this.post){
        this.postIdService.getPostId(params.id).subscribe(value => this.post=value)
      }
      console.log(this.post)
    })
  }

  ngOnInit(): void {
  }

}
