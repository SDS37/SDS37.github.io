import { Component, OnDestroy, ViewChild, Input, ChangeDetectionStrategy, SimpleChanges, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from '../models/post.class';
import { RedditService } from '../services/reddit.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnChanges, OnDestroy {

  @Input() category: string = '';

  @ViewChild(MatPaginator) private _paginator: MatPaginator | undefined;
  
  public posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  public destroy$ = new Subject<boolean>();
  
  public isReadMore = true
  
  private _dataSource: MatTableDataSource<Post> | undefined;

  constructor(
    private redditService: RedditService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {    
    if (changes && changes.category?.currentValue !== changes.category?.previousValue) {
      this.redditService.getPosts(changes.category?.currentValue).pipe(
        takeUntil(this.destroy$)
      ).subscribe( (posts: Post[]): void => {
        this._dataSource = new MatTableDataSource<Post>(posts);
        this._dataSource.paginator = this._paginator as MatPaginator;
        this.posts$ = this._dataSource.connect();
        console.debug('this.posts', posts)
      });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this._dataSource) { 
      this._dataSource.disconnect(); 
    }
    this.posts$.complete();
  }

}
