import { Component, OnInit } from "@angular/core";
import { Todo } from "../todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
    {
      task: "Premier todo",
      isDone: false
    },
    {
      task: "Deuxième todo",
      isDone: true
    },
    {
      task: "Troisième todo",
      isDone: false
    }
  ];

  newTodo: string;

  constructor() {
    const todosInStorage: string | null = sessionStorage.getItem("todos");
    console.log("Mes todos : ", todosInStorage);
    if (todosInStorage) {
      this.todos = JSON.parse(todosInStorage);
    }
  }

  ngOnInit() {}

  updateTodosInStorage() {
    sessionStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo() {
    this.todos.push(new Todo(this.newTodo));
    this.updateTodosInStorage();
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => todo.task !== t.task);
    this.updateTodosInStorage();
  }
}
