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
### Make a Todo.ts file in app folder
```
//create this file and put this class

export class Todo{
    slno: number
    title: string
    desc: string
    active: boolean
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
## Data sharing and Logic building

//Add todo- Form, store variables or data given in form, submit - DONE
//todo displayed - DONE
//store/save todo list- localsystem- DONE
//delete todo - DONE
//mark as done/undone- checkbox- toggle - DONE
//if there is no todo- display no todos to display - DONE