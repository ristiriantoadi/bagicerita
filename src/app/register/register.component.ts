import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
  }

  register(){
    var email=this.registerForm.get('email').value
    var pass=this.registerForm.get('password').value 
    var username=this.registerForm.get("username").value
    
    console.log(email)
    console.log(pass)

    this.authService.register(email,pass,username)

    // this.auth.createUserWithEmailAndPassword(email,pass)
    //   .then(()=>{
    //     console.log("user registered")
    //   })

  }

}
