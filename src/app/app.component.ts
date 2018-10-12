import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public notes: Array<any> = [
  ];

  constructor(private postService: PostService) {
    postService.get().subscribe((posts: any) => {
      this.notes = posts;
    } );
  }

  addNote(note: any) {
    this.notes.push(note);
  }

}
