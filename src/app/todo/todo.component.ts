import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Output()
  delete = new EventEmitter<Todo>()

  @Input()
  todo: Todo

  deleteMe() {
    this.delete.emit(this.todo)
  }
}
