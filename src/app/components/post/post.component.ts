import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent implements OnInit {

    @Input() post: any;
  
    public isTextHidden = false;

    constructor(
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes', changes);
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