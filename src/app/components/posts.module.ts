import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// material
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { DateAgoPipe } from '../pipes/date-ago.pipe';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    DateAgoPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    // material
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [
    PostsComponent,
    PostComponent
  ]
})
export class PostsModule { }