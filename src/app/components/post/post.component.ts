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
        selftext: ''
    };
  
    public isTextHidden = false;

    ngOnChanges(changes: SimpleChanges): void {
        // could be used if data changes over time
        console.debug('changes', changes);
    }

    ngOnInit(): void {

    }

    public handleMissingImage(event: Event): void {
        (event.target as HTMLImageElement).style.display = 'none';
    }

    public togglePostText(): void {
        this.isTextHidden = !this.isTextHidden

    }
}