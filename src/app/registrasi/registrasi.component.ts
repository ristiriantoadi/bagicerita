import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { CeritaService } from '../cerita.service';

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.css']
})
export class RegistrasiComponent implements OnInit {

  username;
  registrasiForm = new FormGroup({
    namaLengkap: new FormControl,
    email: new FormControl(),
    kota: new FormControl(),
    ttl: new FormControl(),
    aboutMe:new FormControl()
    // username: new FormControl(),
    // password: new FormControl()
  })
  constructor(public  afAuth:  AngularFireAuth, public cerita:CeritaService) { 
    this.afAuth.authState.subscribe(user => {
      if (user){
        // this.user = user;
        // this.userDisplayName = user.displayName
        this.username = user.displayName
        // localStorage.setItem('user', JSON.stringify(this.user));
        // this.isLoggedIn=true
        // console.log(this.userDisplayName)
      } else {
        // this.isLoggedIn=false
        // this.user=null
        this.username=""
        localStorage.setItem('user', null);
        
      }
    })
  }

  ngOnInit(): void {
  }

  registrasi(){
    var namaLengkap=this.registrasiForm.get('namaLengkap').value
    var email=this.registrasiForm.get('email').value 
    var kota=this.registrasiForm.get('kota').value
    var ttl=this.registrasiForm.get('ttl').value
    var aboutMe=this.registrasiForm.get('aboutMe').value

    this.cerita.registrasi(namaLengkap,email,kota,ttl,aboutMe,this.username)

  }

}
