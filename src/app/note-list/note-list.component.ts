import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  
  @Input() notes: Array<any>;

  constructor() { }

  ngOnInit() {
  }
  
  removeNote(index: number) {
    this.notes.splice(index, 1);
  }

}
