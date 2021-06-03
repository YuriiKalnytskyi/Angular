import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { AboutComponent } from './components/about/about.component';

let  routes: Routes =[
  {path:"" , component:HomeComponent},
  {path:"about" ,component:AboutComponent},
  {path:"users", loadChildren:()=>import('./modules/users/users.module').then(m=>m.UsersModule)},
  {path:"posts", loadChildren:()=>import('./modules/posrs/posrs.module').then(m=>m.PosrsModule)}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
