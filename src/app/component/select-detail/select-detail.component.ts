import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-select-detail',
  templateUrl: './select-detail.component.html',
  styleUrls: ['./select-detail.component.css']
})
export class SelectDetailComponent implements OnInit {
  @Input()
  post:Post[]

  constructor(private userService :UserService) {
  }

  ngOnInit(): void {

  }


}
