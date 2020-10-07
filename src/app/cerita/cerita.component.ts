import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CeritaService } from '../cerita.service';

@Component({
  selector: 'app-cerita',
  templateUrl: './cerita.component.html',
  styleUrls: ['./cerita.component.css']
})
export class CeritaComponent implements OnInit {

  ceritaId;
  ceritaPost;
  isLoggedIn;
  user;
  commentForm = new FormGroup({
    // email: new FormControl(),
    // username: new FormControl(),
    comment: new FormControl()
  })

  constructor(private route: ActivatedRoute,private cerita:CeritaService,public  afAuth:  AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        // this.user = user;
        // this.userDisplayName = user.displayName
        // localStorage.setItem('user', JSON.stringify(this.user));
        this.isLoggedIn=true
        this.user=user;
        // console.log(this.userDisplayName)
      } else {
        this.isLoggedIn=false
        this.user=null
        // this.userDisplayName=""
        localStorage.setItem('user', null);
        
      }
    })
  }

  sendComment(){
    var comment=this.commentForm.get('comment').value;
    // console.log(comment) 
    // console.log(this.user)
    this.cerita.sendComment(comment,this.ceritaId,this.user.displayName)
    // this.commentForm.get('comment').value=""
    // this.commentForm.get("comments").setValue("")
    this.commentForm.reset()
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.ceritaId = id;
      this.cerita.getCeritaById(id).subscribe(action=>{
        // this.ceritaPost=[]
        // actions.forEach(action=>{
        //   this.ceritaPost.push(action.payload.val())
        //   // this.ceritaPost = {'key':action.payload.key,'value':action.payload.val()}
        // })
        // console.log(actions.payload.val())
        this.ceritaPost = action.payload.val()
        this.ceritaPost.key=action.key
        // console.log(this.ceritaPost.comments)
        this.cerita.getCommentsByCeritaId(id).subscribe(actions=>{
          // this.ceritaPost.comments.push({'key':action.key,'value':action.payload.val().value})
          this.ceritaPost.comments=[]
          actions.forEach(action=>{
            this.ceritaPost.comments.push({'key':action.payload.key,'value':action.payload.val()})
          })
          this.ceritaPost.comments.reverse()          
        })
        console.log(this.ceritaPost)

      })
    })
  }

}
