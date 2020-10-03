import { Component } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bagicerita';

  constructor(public dialog:MatDialog){}

  openLogin(){
    // open(RegisterComponentComponent)
    const dialogRef = this.dialog.open(LoginComponent, {
    // width: '250px',
    // height:'500px'
    // data: {name: this.name, animal: this.animal}
    });
  }
   openRegister(){
    // open(RegisterComponentComponent)
    const dialogRef = this.dialog.open(RegisterComponent, {
    // width: '250px',
    // height:'500px'
    // data: {name: this.name, animal: this.animal}
    });
    }

}
