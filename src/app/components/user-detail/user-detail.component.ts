import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataTransferService} from "../../services/data-transfer.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
 @Input()
  user:User
  constructor( private dataTransferService:DataTransferService) {

  }

  ngOnInit(): void {
  }

  lodin():void {
    this.dataTransferService.store.next(this.user.name)
  }
}
