import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  {path:'/',component:AppComponent}
  // {path:'employee',component:EmployeeComponent}
  ];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { 

}
