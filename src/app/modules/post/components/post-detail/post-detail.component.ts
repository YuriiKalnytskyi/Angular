import { Component, OnInit } from '@angular/core';
import {Comments} from "../../models/comments";
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  comment:Comments[]

  constructor(private activatedRoute:ActivatedRoute , private commentsService:CommentsService) {
    this.activatedRoute.params.subscribe(params=>{
      this.commentsService.getComments(+params.id).subscribe(value => {
        this.comment=value
      })
    })
  }

  ngOnInit(): void {
  }

}
