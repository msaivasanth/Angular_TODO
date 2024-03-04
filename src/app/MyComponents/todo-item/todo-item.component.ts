import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() "todo": Todo;
  @Input() "i": number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  
  constructor(){}

  onClick(todo: Todo) {
    this.todoDelete.emit(todo)
    console.log("Delete has been clicked")
  }

  onCheckClick(todo: Todo) {
    this.todoCheckBox.emit(todo)
  }
}
