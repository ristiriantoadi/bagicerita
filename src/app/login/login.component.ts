import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn
  user
  loginForm = new FormGroup({
    email: new FormControl(),
    // username: new FormControl(),
    password: new FormControl()
  })

  constructor(public  afAuth:  AngularFireAuth,private authService:AuthService,public dialogRef: MatDialogRef<LoginComponent>) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.dialogRef.close()
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.isLoggedIn)
    var email=this.loginForm.get('email').value
    var pass=this.loginForm.get('password').value 
    
    console.log(email)
    console.log(pass)

    // if(this.authService.login(email,pass)){
    //   console.log("success")
    //   this.dialogRef.close()
    // }
    this.authService.login(email,pass,this.dialogRef)

    // if(this.authService.isLoggedIn){
    //   // console.log(this.authService.getUser().email)
    //   // this.user=this.authService.getUser()
    //   this.dialogRef.close('Pizza!');
    // }
  }

}
