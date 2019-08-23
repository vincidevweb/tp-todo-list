import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  static readonly BACK = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(TodoService.BACK + 'todos');
  }

  public createTodo(todo: Todo) {
    return this.http.post(TodoService.BACK + 'todos', todo);
  }

  public deleteTodo(todo: Todo) {
    return this.http.delete(TodoService.BACK + 'todos/' + todo.id);
  }

  public updateTodo(todo: Todo) {
    return this.http.put(TodoService.BACK + 'todos/' + todo.id, todo);
  }
}
