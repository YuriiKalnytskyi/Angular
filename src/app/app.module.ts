import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/Users /users/users.component';
import { UserComponent } from './components/Users /user/user.component';
import { UserDetailComponent } from './components/Users /user-detail/user-detail.component';
import {UserService} from "./services/user.service";
import { PostsComponent } from './components/Post/posts/posts.component';
import { PostComponent } from './components/Post/post/post.component';
import { PostDetailComponent } from './components/Post/post-detail/post-detail.component';
import {PostService} from "./services/post.service";
import { CommentsComponent } from './components/Comment/comments/comments.component';
import { CommentComponent } from './components/Comment/comment/comment.component';
import { CommentDetailComponent } from './components/Comment/comment-detail/comment-detail.component';
import {CommentService} from "./services/comment.service";

let routers:Routes = [
  {path:'header' , component:HeaderComponent},
  {path:'users' , component:UsersComponent ,resolve:{data:UserService}, children:[{path:':id',component:UserDetailComponent}] },
  {path:'posts' , component:PostsComponent , resolve:{data:PostService} , children:[{path:':id' , component: PostDetailComponent}] },
  {path:'comments' , component:CommentsComponent , resolve:{data:CommentService} , children:[{path:':id' , component: CommentDetailComponent}] }

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    PostsComponent,
    PostComponent,
    PostDetailComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailComponent
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
