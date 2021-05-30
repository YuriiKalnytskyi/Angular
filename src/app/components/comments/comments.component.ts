import {Component, Input, OnInit} from '@angular/core';
import {Comments} from "../../models/Comments";
import {UserService} from "../../serveces/user.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comments[]
  @Input()
  id: number

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getComments(this.id).subscribe(value => {
      this.comments = value
    })
  }

}
