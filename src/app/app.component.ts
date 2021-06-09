import { Component } from '@angular/core';
import {DataTransferService} from "./services/data-transfer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pr4';

  nama:string

  constructor(private dataTransferService:DataTransferService) {
    this.dataTransferService.store.subscribe(value => {
      this.nama=value
    })
  }
}
