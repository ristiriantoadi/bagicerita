import { Component, OnInit } from '@angular/core';
import { CeritaService } from '../cerita.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  listCerita
  constructor(public cerita:CeritaService) { 
    cerita.getListCeritaByUser("zeth").subscribe(actions=>{
      this.listCerita=[]
      actions.forEach(action=>{
        this.listCerita.push({'key':action.payload.key,'value':action.payload.val()})
        console.log(this.listCerita)
      })
    })
  }
  

  ngOnInit(): void {
  }

}
