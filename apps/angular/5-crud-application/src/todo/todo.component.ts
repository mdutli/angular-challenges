import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

export interface Todo {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  imports: [],
  selector: 'todo',
  template: `
    @for (todo of todos; track todo.id) {
      {{ todo.title }}
      <button (click)="update(todo)">Update</button>
      <button (click)="delete(todo)">Delete</button>
    }
  `,
  styles: [],
})
export class TodoComponent implements OnInit {
  todos!: Todo[];

  private todoService = inject(TodoService);

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  update(todo: Todo): void {
    this.todoService
      .updateTodos(todo)
      .subscribe((response) => console.log(response));
  }

  delete(todo: Todo): void {
    this.todoService.deleteTodo(todo);
  }
}
