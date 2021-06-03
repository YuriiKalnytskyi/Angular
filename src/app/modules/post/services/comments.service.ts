import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comments} from "../models/comments";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url='https://jsonplaceholder.typicode.com/posts/'

  constructor(private httpClient:HttpClient) { }
  getComments(id:number):Observable<Comments[]>{
    return this.httpClient.get<Comments[]>(this.url+id+'/comments')
  }
}
