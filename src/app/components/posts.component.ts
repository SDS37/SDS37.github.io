import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from '../models/post.class';
import { RedditService } from '../services/reddit.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  public destroy$ = new Subject<boolean>();
  public posts: Post[] = [];

  public isReadMore = true

  constructor(
    private redditService: RedditService
  ) {}

  ngOnInit(): void {
    this.redditService.getPosts().pipe(
      takeUntil(this.destroy$)
    ).subscribe( (posts: Post[]): void => {
      this.posts = posts;
      console.debug('this.posts', this.posts)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.next(true);
  }

}
