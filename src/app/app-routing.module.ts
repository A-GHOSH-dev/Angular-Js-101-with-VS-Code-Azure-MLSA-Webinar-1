import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoitemsComponent } from './todoitems/todoitems.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  {path: 'todo', component: TodosComponent},
 
  { path: 'calc', component: CalculatorComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
