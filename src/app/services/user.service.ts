import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users'
  private url1 = 'https://jsonplaceholder.typicode.com/posts?userId='



  constructor(private httpClient:HttpClient) { }
  getUser():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url)
  }
  getPost(id:number):Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url1 + id)
  }

}
