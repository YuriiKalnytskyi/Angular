import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {PostService} from "./services/post.service";
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {CommentsService} from "./services/comments.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers:[PostService ,CommentsService]
})
export class PostModule { }
