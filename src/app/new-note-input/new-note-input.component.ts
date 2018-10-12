import { Component, EventEmitter, OnInit, Output, HostListener } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-note-input',
  templateUrl: './new-note-input.component.html',
  styleUrls: ['./new-note-input.component.css'],
})
export class NewNoteInputComponent implements OnInit {

  public newNote: any = {userId: 1, title: '', body: '', id: 0};
  
  @Output() onNoteAdd = new EventEmitter<string>();

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Enter" && this.newNote.title.length > 0 && this.newNote.body.length > 0 ) {
      this.addNote();
     }
  }

  addNote() {
    this.postService.add(this.newNote).toPromise()
      .then(
        (res: any) => { // Success
          this.newNote.id = res.id;
          this.onNoteAdd.emit(Object.assign({}, this.newNote));
          this.newNote.title = '';
          this.newNote.body = '';
          this.newNote.id = 0;
        }
      );
    
  }


}
