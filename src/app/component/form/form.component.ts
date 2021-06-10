import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarsService} from "../../services/cars.service";
import {Car} from "../../models/car";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  cars:Car[]
  car:Car


  idControl=new FormControl()
  modelControl=new FormControl()
  priceControl=new FormControl()
  yearControl = new FormControl()

  myForm:FormGroup=new FormGroup({
    model:this.modelControl,
    id:this.idControl,
    price:this.priceControl,
    year:this.yearControl,
  })

  constructor(private carsService:CarsService) {
    this.carsService.getCar().subscribe(value => this.cars=value)
  }

  ngOnInit(): void {
  }

  save() {

    this.car=this.myForm.getRawValue()
    this.carsService.postCar(this.car).subscribe(value => {

      this.carsService.getCar().subscribe(value => this.cars=value)
    }
    )

  }
}
