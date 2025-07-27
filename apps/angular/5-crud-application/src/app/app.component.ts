import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';

@Component({
  imports: [TodoComponent],
  selector: 'app-root',
  template: `
    <todo></todo>
  `,
  styles: [],
})
export class AppComponent {}
