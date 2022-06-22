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
    public date: Date | undefined;

    ngOnChanges(changes: SimpleChanges): void {
        // could be used if data changes over time
        console.debug('changes', changes);
    }

    ngOnInit(): void {
        this.date = new Date(this.post.created*1000);
    }

    public handleMissingImage(event: Event): void {
        (event.target as HTMLImageElement).style.display = 'none';
    }

    public togglePostText(): void {
        this.isTextHidden = !this.isTextHidden

    }
}