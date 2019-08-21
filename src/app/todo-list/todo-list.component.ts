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

  constructor() {}

  ngOnInit() {}
}
