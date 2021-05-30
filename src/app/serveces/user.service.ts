import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {Post} from "../models/Post";
import {Comments} from "../models/Comments";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users'
  private url1 = 'https://jsonplaceholder.typicode.com/posts?userId='
  private url2='https://jsonplaceholder.typicode.com/posts/'


  constructor(private httpClient:HttpClient ) { }

  getUsers ():Observable<User[]>{
    return this.httpClient.get<User[]>(this.url)
  }
  getPosts(userid:number):Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url1+userid)
  }
  getComments(id:number):Observable<Comments[]>{
    return this.httpClient.get<Comments[]>(this.url2+id+'/comments')
  }
}
