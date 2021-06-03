import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../modules/user";
import {Post} from "../modules/post";

@Injectable({
  providedIn: 'root'
})
export class UserIdService {

  private url1 = 'https://jsonplaceholder.typicode.com/posts?userId='



  constructor(private httpClient: HttpClient) { }
  getUsersId(id:number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url1+id);
  }
}
