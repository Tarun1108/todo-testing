import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable()
export class TodoService {

  private todos: Todo[];
  private nextId: number;

  constructor() {
    const todos = this.getTodos();
    if (todos.length === 0) {
      this.nextId = 0;
    } else {
      const maxID = todos[todos.length - 1].id;
      this.nextId = maxID + 1;
    }

    // this.todos = [
    //   new Todo(0, "Make dinner tonight!"),
    //   new Todo(1, "Fold the laundry."),
    //   new Todo(2, "Learn to make a React app!")
    // ];
    //
    // this.nextId = 3;
  }

  public addTodo(text: string): void {
    // let todo = new Todo(this.nextId, text);
    // this.todos.push(todo);
    // this.nextId++;

    const todo = new Todo(this.nextId, text, 0);
    const todos = this.getTodos();
    todos.push(todo);
    this.setLocalStorageComments(todos);
    this.nextId++;
  }

  public addLikes(id: number): void {
    // const comments = JSON.parse(localStorage.getItem('todos'));
    // for (let i = 0; i < comments.todos.length; i++) {
    //   if (comments.todos[i].id === id) {
    //     comments.todos[i].numberOfLikes++;
    //   }
    // }
    // localStorage.setItem('todos', JSON.stringify(comments.todos));
  }

  public setLocalStorageComments(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify({todos: todos}));
  }

  public getTodos(): Todo[] {
    const localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return  localStorageItem == null ? [] : localStorageItem.todos;
  }

  // public getTodos(): Todo[] {
  //   return this.todos;
  // }

  public removeTodo(id: number): void {
    this.todos = this.todos.filter((todo)=> todo.id != id);
  }

}
