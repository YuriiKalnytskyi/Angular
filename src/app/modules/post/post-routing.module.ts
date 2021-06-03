import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {PostsComponent} from "./components/posts/posts.component";
import {PostDetailComponent} from "./components/post-detail/post-detail.component";

const routes: Routes = [
  {path:'',component:PostsComponent ,children:[{path:':id' , component:PostDetailComponent}] },
  // {path:':id' , component:PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes) , HttpClientModule],
  exports: [RouterModule , HttpClientModule]
})
export class PostRoutingModule { }
