import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule
  ],
  exports: [
    PostsComponent,
    PostComponent
  ]
})
export class PostsModule { }