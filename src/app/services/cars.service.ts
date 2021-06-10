import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "../models/car";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
private url='http://92.253.239.109/api/v1/cars'

  constructor(private httpClient:HttpClient) { }

  getCar():Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.url)
  }
  postCar(car:{}):Observable<Car>{
  return this.httpClient.post<Car>(this.url,car)
  }
}
