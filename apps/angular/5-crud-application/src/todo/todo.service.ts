import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { randText } from '@ngneat/falso';
import { Observable } from 'rxjs';
import { Todo } from './todo.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient);

  //test

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  updateTodos(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
      JSON.stringify({
        todo: todo.id,
        title: randText(),
        body: todo.body,
        userId: todo.userId,
      }),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  }

  deleteTodo(todo: Todo): void {
    this.http.delete<void>(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
    );
  }
}
