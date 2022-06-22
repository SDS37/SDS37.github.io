export interface RedditPost {
    kind: string;
    data: RedditData;
}

export interface RedditData {
    children: RedditPost[],
    title: string;
    url: string;
    selftext: string;
    created: number,
    num_comments: number,
    author: string,
    score: number
}
