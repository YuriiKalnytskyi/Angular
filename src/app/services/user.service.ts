import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService implements Resolve<Observable<User[]>>{

  constructor(private httpClient: HttpClient) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<any[]>> | Promise<Observable<any[]>> | Observable<any[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
