import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PostService implements Resolve<Observable<Post[]>>{
  private url1 = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<Post[]>> | Promise<Observable<Post[]>> | Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url1)
  }

}
