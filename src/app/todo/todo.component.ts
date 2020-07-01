import { Component, OnInit } from '@angular/core';
import { ToDo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList: ToDo[] = [
    { task: 'wash my hands', completed: false },
    { task: 'walk the dog', completed: true },
    { task: 'walk the cat', completed: true },
    { task: 'walk the car', completed: false },
  ];

  constructor() {}

  itemClicked(item: ToDo) {
    console.log(item);
    item.completed = !item.completed;
  }

  ngOnInit(): void {}
}


// import { Component, OnInit } from '@angular/core';
// import { ToDo } from '../interfaces/todo';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css'],
// })
// export class TodoComponent implements OnInit {
//   todos: ToDo[] = [
//     { task: 'Clean clothes', completed: true },
//     { task: 'Walk Dog', completed: false },
//     { task: 'Feed the fish', completed: false },
//     { task: 'Clean room', completed: true },
//     { task: 'Take out trash', completed: false },
//     { task: 'Wash car', completed: false },
//   ];

//   constructor() {}

//   ngOnInit(): void {}
// }