import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CeritaService {

  constructor(public db:AngularFireDatabase, private router:Router) { }

  getListCerita(){
    return this.db.list("/cerita").snapshotChanges()
  }

  getListCeritaByUser(user:string){
    return this.db.list("/cerita",ref=>ref.orderByChild("author").equalTo(user)).snapshotChanges()
  }

  getCeritaById(id){
    return this.db.object("/cerita/"+id).snapshotChanges()
  }

  getCommentsByCeritaId(id){
    return this.db.list("/cerita/"+id+"/comments").snapshotChanges()
  }

  sendComment(comment,id,author){
    this.db.list("/cerita/"+id+"/comments").push({"author":author,"content":comment})   
  }

  registrasi(namaLengkap,email,kota,ttl,aboutMe,username){
    this.db.object("user/"+username).update({
      "namaLengkap":namaLengkap,
      "email":email,
      "kota":kota,
      "ttl":ttl,
      "aboutMe":aboutMe,
      // "username":username
    }).then(()=>{
      this.router.navigate(['/profile',username])
    })
  }

  getUser(username){
    return this.db.object("/user/"+username).snapshotChanges()
  }

}
