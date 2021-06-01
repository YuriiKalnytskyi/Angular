import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import { HomeComponent } from './component/home/home.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostComponent } from './component/post/post.component';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { CommentsComponent } from './component/comments/comments.component';
import { CommentComponent } from './component/comment/comment.component';


let routers:Routes  = [
  {path:'home' , component:HomeComponent},
  {path:'users' , component:UsersComponent , children: [{path:':id' , component:UserDetailComponent}]},
  {path:'posts' , component:PostsComponent},
  {path:'posts/:id' , component:PostDetailComponent},
  {path:'comments' , component:CommentsComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    UserDetailComponent,
    PostsComponent,
    PostComponent,
    PostDetailComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
