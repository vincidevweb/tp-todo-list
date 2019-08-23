import { Component, OnInit } from "@angular/core";
import { Todo } from "../todo";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  newTodo: string;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.refreshTodos();
  }

  private refreshTodos() {
    this.todoService
    .getTodos()
    .subscribe(
      result => (this.todos = result),
      error => console.error("Une erreur est survenue", error)
    );
  }

  updateTodosInStorage(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(() => this.refreshTodos());
  }

  addTodo() {
    const todoToAdd = new Todo(this.newTodo)
    this.todoService.createTodo(todoToAdd).subscribe(() => this.refreshTodos())
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(() => this.refreshTodos())
  }
}
