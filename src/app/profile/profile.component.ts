import { Component, OnInit } from '@angular/core';
import { CeritaService } from '../cerita.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  listCerita
  username
  profile
  constructor(public cerita:CeritaService,private route: ActivatedRoute) { 
  }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let username = params.get('username');
      this.username = username;
      console.log(username)
      this.cerita.getListCeritaByUser(this.username).subscribe(actions=>{
        this.listCerita=[]
        actions.forEach(action=>{
          this.listCerita.push({'key':action.payload.key,'value':action.payload.val()})
          console.log(this.listCerita)
        })
      })
      this.cerita.getUser(username).subscribe(action=>{
        // this.ceritaPost=[]
        // actions.forEach(action=>{
        //   this.ceritaPost.push(action.payload.val())
        //   // this.ceritaPost = {'key':action.payload.key,'value':action.payload.val()}
        // })
        // console.log(actions.payload.val())
        this.profile = action.payload.val()
        console.log(this.profile)
        // this.profile.key=action.key
        // console.log(this.ceritaPost.comments)
      })
    })
  }

}
