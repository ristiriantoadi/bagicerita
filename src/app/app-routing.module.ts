import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path:'profile',component:ProfileComponent,pathMatch: 'full'}
  // {path:'employee',component:EmployeeComponent}
  ];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { 

}
