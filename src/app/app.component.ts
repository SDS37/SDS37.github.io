import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fetching-reddit-posts';

  selectedValue: string = 'golf';

  categories: Category[] = [
    {value: 'golf', viewValue: 'golf'},
    {value: 'sweden', viewValue: 'sweden'}
  ];
}

export interface Category {
  value: string;
  viewValue: string;
}
