import { Component, OnInit } from '@angular/core';
import {Comments} from "../../../models/Comments";
import {CommentIdService} from "../../../services/comment-id.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  comment:Comments

  constructor(private commentIdService :CommentIdService , private router:Router ,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>{
      this.comment = this.router.getCurrentNavigation()?.extras.state as Comments
      if (!this.comment){
        this.commentIdService.getCommentId(params.id).subscribe(value => this.comment=value)
      }
    })
  }

  ngOnInit(): void {
  }

}
