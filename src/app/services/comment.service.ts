import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService implements Resolve<Observable<Comment[]>>{
  private url1 = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private httpClient:HttpClient) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Comment[]>> | Promise<Observable<Comment[]>> | Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.url1)
  }
}
