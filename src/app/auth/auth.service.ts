import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  constructor(public  afAuth:  AngularFireAuth,public router:Router) { 
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async login(email: string, password: string,dialogRef:MatDialogRef<LoginComponent>) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
    // this.router.navigate(['admin/list']);
    // console.log(result)
    // this.router.navigate(['/']);

  }

  register(email: string, password: string,username:string,dialogRef:MatDialogRef<RegisterComponent>) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((cred)=>{
        console.log(cred.user)
        cred.user.updateProfile({
          displayName:username
        }).then(()=>{
          this.router.navigate(['/registrasi'])
        })
      })
    // console.log(result)
    // ;(await this.afAuth.currentUser).updateProfile({
    //   displayName:username
    // })
    // console.log()
    // this.router.navigate['registrasi']
    // await this.user.updateProfile({
    //   displayName:username
    // })
    // console.log(result);
  }

  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  async logout(){
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    console.log("logout")
    // this.router.navigate(['/']);
}
}
