import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service'

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => { this.todos = todos });
  }

  deleteTodo(todo: Todo){
    //Remove From UI
    this.todos =this.todos.filter(t=>t.id!==todo.id);
    //Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }
}