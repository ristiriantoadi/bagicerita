import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(),
    // username: new FormControl(),
    password: new FormControl()
  })

  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
  }

  login(){
    var email=this.loginForm.get('email').value
    var pass=this.loginForm.get('password').value 
    
    console.log(email)
    console.log(pass)

    this.authService.login(email,pass)
    if(this.authService.isLoggedIn){
      console.log(this.authService.getUser().email)
    }
  }

}
