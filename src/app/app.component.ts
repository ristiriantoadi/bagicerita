import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bagicerita';
  isLoggedIn;
  user=null

  constructor(public dialog:MatDialog,private authService:AuthService,public  afAuth:  AngularFireAuth){
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user.email;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.isLoggedIn=true
      } else {
        this.user=""
        localStorage.setItem('user', null);
      }
    })
  }

  async openLogin(){
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
    })
  }
  logout(){
    this.authService.logout()
    this.isLoggedIn=false
    // console.log("hello")
  }

}
