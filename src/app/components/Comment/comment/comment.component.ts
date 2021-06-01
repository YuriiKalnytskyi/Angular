import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Comments} from "../../../models/Comments";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input()
  comment:Comments

  constructor(private router :Router  , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  detail2():void{
    this.router.navigate([this.comment.id] ,{relativeTo:this.activatedRoute , state:this.comment})
  }

}
