export class Post {
  constructor(
    public title: string,
    public imageUrl: string,
    public selftext: string,
    public created: number,
    public num_comments: number,
    public author: string,
    public score: number
  ) {}
}