import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {Comments} from "../models/Comments";

@Injectable({
  providedIn: 'root'
})
export class CommentIdService {

  private url = 'https://jsonplaceholder.typicode.com/comments/'


  constructor(private httpClient: HttpClient) {
  }

  getCommentId(id: number): Observable<Comments> {
    return this.httpClient.get<Comments>(this.url + id)
  }
}
