import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent, AddTodoComponent, NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[]
  constructor() {
    if(localStorage.getItem('todos') == null) {
      this.todos = []
    }
    else {
      this.todos = JSON.parse(localStorage.getItem('todos') !)
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  toogleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
