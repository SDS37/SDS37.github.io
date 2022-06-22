import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RedditService } from '../services/reddit.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  public destroy$ = new Subject<boolean>();
  public posts: any[] = [];

  isReadMore = true

  constructor(
    private redditService: RedditService
  ) {}

  ngOnInit() {
    this.redditService.getPostsData().pipe(
      takeUntil(this.destroy$)
    ).subscribe( (data) => {
      this.posts = data;
      console.debug('posts', this.posts)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.next(true);
  }

}
