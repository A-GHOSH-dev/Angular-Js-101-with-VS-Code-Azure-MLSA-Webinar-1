## Install VS Code
## Install NodeJs
## Install Angular CLI
```
npm install @angular/cli –g
```
## Create project
```
ng new myangularapp
```
## Install Bootstrap
```
npm install bootstrap
```
## Install JQuery
```
npm install jquery
```
### In angular.json file:
```
 "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": ["./node_modules/bootstrap/dist/js/bootstrap.js",
              "./node_modules/jquery/dist/jquery.js"]
```
## Generate Components
```
ng g c todos
```
then
```
ng g c todoitems
```
then
```
ng g c addtodo
```
then
```
ng g c calculator
```
## Routing
### In app.module.ts:
```
import { RouterModule } from '@angular/router';
```
### In app-routing.module.ts:
```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Include the components from app.module.ts
import { TodosComponent } from './todos/todos.component';
import { TodoitemsComponent } from './todoitems/todoitems.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
    //add the paths for each component you want in routing
  {path: 'todo', component: TodosComponent},
 
  { path: 'calc', component: CalculatorComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```
## Deciding requirements of a ToDo list
- ### Make a Todo.ts file in app folder
```
//create this file and put this class

export class Todo{
    slno: number
    title: string
    desc: string
    active: boolean
}
```
- ### In todos.component.ts, make an array todos to store all Todos
```
todos:Todo[]; //make array
this.todos = [];
```
- ### Store/Save the todos so that when page reloads, the data is not lost, so we save the data in localStorage
```
//initialize variable localItem which will store data in localStorage
localItem: string | null; //for saving data
  todos:Todo[]; //make array

  constructor() { //make array to put data
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){ //if no items are recieved by localStorage
       
    this.todos = []; //keeping array empty  
    }
   else{ //if item is stored in localstorage, then 
     this.todos=JSON.parse(this.localItem);
     //for json.parse():
     //https://www.w3schools.com/Js/tryit.asp?filename=tryjson_parse
     //https://www.w3schools.com/Js/tryit.asp?filename=tryjson_parse_array
   }
   }
```
- ### Complete todos.component.ts file code:
```
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
```
## HTML Template creation
### In app.component.html make the navigation bar:
```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Angular Project</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" routerLink="/todo" routerLinkActive="active">ToDo List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/calc" routerLinkActive="active">Calculator</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Quiz App</a>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
```
#### In above code, 
```
routerLink="/pathname" routerLinkActive="active"
```
#### this denotes routing paths. When user clicks on the button, the component in that path appears.
### In app.component.html make the carousel slider:
```
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.infinijith.com:3443/storage/blog/97/medium.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/pXg6C3d8IJ0/maxresdefault.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/e5/74/95/e57495d284e71ad96d792111361e6f8a.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```
### In app.component.html add the router:
```
<router-outlet></router-outlet>
```
## Listing out the working of Todo app
### Add ToDo
- #### Make a HTML Form using Bootstrap for taking user input
```
<h3 class="m-5">Add a Todo Task</h3>
<form class="m-5" (ngSubmit)="onSubmit()">
    <div class="mb-3">
      <label for="title" class="form-label">Todo Title</label>
      <input type="text" [(ngModel)]="title" class="form-control" name="title" id="title" aria-describedby="emailHelp">
     
    </div>
    <div class="mb-3">
      <label for="desc" class="form-label">Todo Description</label>
      <input type="text" [(ngModel)]="desc" class="form-control" name="desc" id="desc">
    </div>
    
    <button type="submit" class="btn btn-primary">Add Todo</button>
  </form>
```
- #### Store the input by users in variables so that we can use that variable to display it on our page:
##### For this purpose we are using this in form
```
[(ngModel)]="title"
```
- #### Submit 
##### For submitting the form, we create a submit function and call the function when form is submitted.
```
(ngSubmit)="onSubmit()"
```
##### In addtodo.component.ts we have to build the function for submit.
- Initialize the variables which will store the user data
```
export class AddtodoComponent implements OnInit {
title: string;
desc: string;
```
- Make onSubmit function:
```
onSubmit(){
    const todo = {
      slno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }
```
- The event todoAdd I have to emit to the parent component todos
```
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
```
- The complete Code for addtodo.component.ts:
```
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
title: string;
desc: string;
@Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      slno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
```
- the ading Todo function has to be created in todos.component.ts:
```
//add TODO
  addTodo(todo: Todo){
    console.log(todo);
    //properly add to array of js using push method
    
    this.todos.push(todo);
    //save in local STorage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
```
- The complete Code for todos.component.ts:
```
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
  //add TODO
  addTodo(todo: Todo){
    console.log(todo);
    //properly add to array of js using push method
    
    this.todos.push(todo);
    //save in local STorage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
```
- #### In todos.component.html we need to add the app-addtodo component:
```
<div class="m-5">
<h1 class="text-center">My Todo App</h1>
<app-addtodo (todoAdd)="addTodo($event)"></app-addtodo>
```
addTodo -> from Parent -> todos.component.ts
todoAdd -> from child -> addtodo.component.ts

### Display the Added Todo on page
- #### In todoitems.component.html, make the html template
```
<div class="my-5">
        <h3>{{todo.title}}</h3>
     
         <p>{{todo.desc}}</p>
     
         <div class="mb-3 form-check">
             <input type="checkbox" class="form-check-input" id="exampleCheck1">
             <label class="form-check-label" for="exampleCheck1">Mark As Done</label>
           </div>
     
     
         <button class="btn btn-danger">Delete</button>
         </div>
```
- #### In todos.component.html, add the app-todoitems, and use for loop to add the todos there
```
<h3 class="m-5">Your Todo Tasks List</h3>
    <div *ngFor = "let todo of todos" class="m-5">
        <app-todoitems [todo]="todo"></app-todoitems>
    </div>
```

### Delete Todo
- #### In todoitems.component.html, for the delete button, add this
```
<button class="btn btn-danger" (click)="onClick(todo)">Delete</button>
```
##### onClick is a function that we have called here. We have to now build/define this function.
- #### In todoitems.components.ts we define the onClick function
```
onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }
```
- #### In todoitems.component.ts we have to
```
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//input parent to child
  @Input() todo: Todo;
  //event emitter for deleting action- child to parent
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
```
- #### Complete Code in todoitems.component.ts:
```
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {
  //input parent to child
  @Input() todo: Todo;
  //event emitter for deleting action- child to parent
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }

}
```
- #### In todos.component.ts we have to make the function defination and what will happen when function is called
```
deleteTodo(todo: Todo){
    console.log(todo);
    //properly delete from array of js using splice method
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    //save in local Storage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
```
- #### Complete code of todos.component.ts:
```
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
    //save in local Storage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
```
- #### In todos.component.html, we need to assign the event to the function
```
 <div *ngFor = "let todo of todos" class="m-5">
        <app-todoitems [todo]="todo" (todoDelete)="deleteTodo($event)"></app-todoitems>
    </div>
```
deleteTodo -> from parent component -> todos.component.ts
todoDelete -> from child component -> todoitems.component.ts
- #### Complete code for todos.component.html
```
<div class="m-5">
    <h1 class="text-center">My Todo App</h1>
<app-addtodo (todoAdd)="addTodo($event)"></app-addtodo>
<h3 class="m-5">Your Todo Tasks List</h3>
    <div *ngFor = "let todo of todos" class="m-5">
        <app-todoitems [todo]="todo" (todoDelete)="deleteTodo($event)"></app-todoitems>
    </div>
</div>
```

### Mark as Done/Undone using the checkbox
- #### In todoitems.component.html add this onCheckboxClick function in input checkbox field
```
 <input type="checkbox" class="form-check-input" id="exampleCheck1" (click)="onCheckboxClick(todo)">
```
- #### In todoitems.component.ts
```
@Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

onCheckboxClick(todo: any){
    this.todoCheckbox.emit(todo);
  }
```
- #### Complete code in todoitem.component.ts is
```
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todoitems',
  templateUrl: './todoitems.component.html',
  styleUrls: ['./todoitems.component.css']
})
export class TodoitemsComponent implements OnInit {
  //input parent to child
  @Input() todo: Todo;
  //event emitter for deleting action- child to parent
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }
  onCheckboxClick(todo: any){
    this.todoCheckbox.emit(todo);
  }

}
```
- #### In todos.component.ts we have build the logic and function
```
ToggleTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;

    //save in local STorage
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
```
- #### Complete code in todos.component.ts:
```
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
```
- #### In todos.component.html we have to assign the function the event
```
<div *ngFor = "let todo of todos" class="m-5">
        <app-todoitems [todo]="todo" (todoDelete)="deleteTodo($event)" (todoCheckbox)="ToggleTodo($event)"></app-todoitems>
    </div>
```
ToggleTodo -> from parent
todoCheckbox -> from child
- #### Complete code for todos.component.html:
```
<div class="m-5">
    <h1 class="text-center">My Todo App</h1>
<app-addtodo (todoAdd)="addTodo($event)"></app-addtodo>
<h3 class="m-5">Your Todo Tasks List</h3>
    <div *ngFor = "let todo of todos" class="m-5">
        <app-todoitems [todo]="todo" (todoDelete)="deleteTodo($event)" (todoCheckbox)="ToggleTodo($event)"></app-todoitems>
    </div>
</div>
```
- #### Strike off the title of todo which we mark as done, and unstrike the one we mark from one to undone. In todoitems.component.html:
```
 <h3 [ngClass]="{'strike': !todo.active}">{{todo.title}}</h3>
```
- #### In todoitems.component.css:
```
.strike{
    text-decoration: line-through;
}
```
- #### Complete code for todoitems.component.html:
```
<div class="my-5">
        <h3 [ngClass]="{'strike': !todo.active}">{{todo.title}}</h3>    
         <p>{{todo.desc}}</p>    
         <div class="mb-3 form-check">
             <input type="checkbox" class="form-check-input" id="exampleCheck1" (click)="onCheckboxClick(todo)">
             <label class="form-check-label" for="exampleCheck1">Mark As Done</label>
           </div>
         <button class="btn btn-danger" (click)="onClick(todo)">Delete</button>
</div>
```

### If No todo, Display todolist empty
- #### We need a if else here. If todos array length is 0 then we have to display 'No todos to display', else, display the available todos from array. In todos.component.html:
```
<div *ngIf="this.todos.length===0; else elseBlock" class="m-5">No todos to display</div>
<ng-template #elseBlock>
    <div *ngFor = "let todo of todos" class="m-5">
        <app-todoitems [todo]="todo" (todoDelete)="deleteTodo($event)" (todoCheckbox)="ToggleTodo($event)"></app-todoitems>
    </div>
    </ng-template>
</div>
```
- #### Complete code for todos.component.html:
```
<div class="m-5">
    <h1 class="text-center">My Todo App</h1>
<app-addtodo (todoAdd)="addTodo($event)"></app-addtodo>
<h3 class="m-5">Your Todo Tasks List</h3>
<div *ngIf="this.todos.length===0; else elseBlock" class="m-5">No todos to display</div>
<ng-template #elseBlock>
    <div *ngFor = "let todo of todos" class="m-5">
        <app-todoitems [todo]="todo" (todoDelete)="deleteTodo($event)" (todoCheckbox)="ToggleTodo($event)"></app-todoitems>
    </div>
    </ng-template>
</div>
```
## Data sharing and Logic building
