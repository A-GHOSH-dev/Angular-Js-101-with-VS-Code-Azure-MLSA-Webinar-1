import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Todo } from '../Todo'; //import Todo from Todo.ts

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null; //for saving data
  todos:Todo[]; //make array

  constructor() { //make array to put data
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
       
    this.todos = [];
    }
   else{
     this.todos=JSON.parse(this.localItem);
   }
   }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo){
    console.log(todo);
    //properly delete from array of js using splice method
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    //save in local STorage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  //add TODO
  addTodo(todo: Todo){
    console.log(todo);
    //properly add to array of js using push method
    
    this.todos.push(todo);
    //save in local STorage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  ToggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;

    //save in local STorage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
