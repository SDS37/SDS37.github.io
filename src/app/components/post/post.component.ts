import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/models/post.class';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {

    @Input() post: Post = {
        title: '',
        imageUrl: '',
        selftext: '',
        created: 0,
        num_comments: 0,
        author: '',
        score: 0
    };
  
    public isTextHidden = false;
    public dateCreated: Date | undefined;
    public thumbNail: string = '';

    ngOnChanges(changes: SimpleChanges): void {
        if (changes && changes.post.currentValue.imageUrl !== changes.post?.previousValue?.imageUrl) {
            this.thumbNail = changes.post.currentValue.imageUrl;
        }
    }

    ngOnInit(): void {
        this.dateCreated = new Date(this.post.created*1000);
    }

    public handleMissingImage(event: Event): void {
        (event.target as HTMLImageElement).style.display = 'none';
    }

    public togglePostText(): void {
        this.isTextHidden = !this.isTextHidden
    }

}
