import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.class';
import { RedditPost } from '../models/reddit.interface';

const REDDIT_URL = 'http://www.reddit.com/r/golf.json';

@Injectable({
  providedIn: 'root',
})
export class RedditService {

    constructor(
        private httpClient: HttpClient
    ){}

    public getPosts(): Observable<Post[]> {
        return this.httpClient.get<RedditPost>(REDDIT_URL)
            .pipe(
                map((response: RedditPost): RedditPost[] => response.data.children),
                map((children: RedditPost[]): Post[] => children.map( (child: RedditPost): Post => 
                    new Post(child.data.title, child.data.url, child.data.selftext)
                ))
            );
    }

} 
