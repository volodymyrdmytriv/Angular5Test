import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNoteInputComponent } from './new-note-input.component';

describe('NewNoteInputComponent', () => {
  let component: NewNoteInputComponent;
  let fixture: ComponentFixture<NewNoteInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNoteInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNoteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
