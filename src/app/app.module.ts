import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';

let routes:Routes =[
  {path:'',component:HomeComponent},
  {path:"users", loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)},
  {path:"posts", loadChildren:()=>import('./modules/post/post.module').then(m=>m.PostModule)}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
