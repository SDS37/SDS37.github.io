import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';

const REDDIT_URL = 'http://www.reddit.com/r/golf.json';

@Injectable({
  providedIn: 'root',
})
export class RedditService {

    constructor(
        private httpClient: HttpClient
    ){}

    public getPostsData(): Observable<Post[]> {
        return this.httpClient.get(REDDIT_URL)
            .pipe(
                map(response => response as any),
                map(json => json.data.children as Array<any>),
                map(children => children.map(d => new Post(d.data.title, d.data.url, d.data.selftext)))
            );
      }
}