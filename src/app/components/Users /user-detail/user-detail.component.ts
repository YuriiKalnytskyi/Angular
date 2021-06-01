import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserIdService} from "../../../services/user-id.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User

  constructor(private userIdService:UserIdService,private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.user = this.router.getCurrentNavigation()?.extras.state as User
      if (!this.user){
        this.userIdService.getUserId(params.id).subscribe(value => this.user=value)
      }
      console.log(this.user)
    })
  }

  ngOnInit(): void {
  }

}
