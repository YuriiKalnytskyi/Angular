import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comments} from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'https://jsonplaceholder.typicode.com/comments'


  constructor(private httpClient:HttpClient) { }
  getComments ():Observable<Comments[]>{
    return this.httpClient.get<Comments[]>(this.url)
  }
}
