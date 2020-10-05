import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth/auth.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn
  user
  userDisplayName
  
  constructor(public dialog:MatDialog,private authService:AuthService,public  afAuth:  AngularFireAuth){
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        this.userDisplayName = user.displayName
        localStorage.setItem('user', JSON.stringify(this.user));
        this.isLoggedIn=true
        console.log(this.userDisplayName)
      } else {
        this.isLoggedIn=false
        this.user=null
        this.userDisplayName=""
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
    // this.isLoggedIn=false
    // console.log("hello")
  }

  ngOnInit(): void {
  }

}
