import { Component, EventEmitter, Output, Input, OnInit, HostListener } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  readonly:boolean = true;

  @Input() note:any;

  @Output() onNoteRemove = new EventEmitter<NoteComponent>();  

  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  removeNote() {
    this.postService.remove(this.note).toPromise()
      .then(() => {
        this.onNoteRemove.emit(this);
      })
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Enter" && !this.readonly) {
      this.finishEdit();
     }
  }

  doEdit() {
    this.readonly = false;
  }

  finishEdit() {
    this.postService.update(this.note).toPromise().then(() => {
      this.readonly = true;
    });
  }

}
