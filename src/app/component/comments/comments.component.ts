import { Component, OnInit } from '@angular/core';
import {Comments} from "../../models/Comment";
import {UserService} from "../../serveces/user.service";
import {CommentsService} from "../../serveces/comments.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments:Comments[]

  constructor(private commentsService:CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(value => {
      this.comments=value
    })
  }

}
