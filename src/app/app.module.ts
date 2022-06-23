import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';

import { PostsModule } from './components/posts.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PostsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }