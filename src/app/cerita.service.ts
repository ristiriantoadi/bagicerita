import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CeritaService {

  constructor(public db:AngularFireDatabase) { }

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

  getUser(username){
    return this.db.object("/user/"+username).snapshotChanges()
  }

}
