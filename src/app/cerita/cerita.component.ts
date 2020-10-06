import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CeritaService } from '../cerita.service';

@Component({
  selector: 'app-cerita',
  templateUrl: './cerita.component.html',
  styleUrls: ['./cerita.component.css']
})
export class CeritaComponent implements OnInit {

  ceritaId;
  ceritaPost

  constructor(private route: ActivatedRoute,private cerita:CeritaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.ceritaId = id;
      this.cerita.getCeritaById(id).subscribe(actions=>{
        // this.ceritaPost=[]
        // actions.forEach(action=>{
        //   this.ceritaPost.push(action.payload.val())
        //   // this.ceritaPost = {'key':action.payload.key,'value':action.payload.val()}
        // })
        // console.log(actions.payload.val())
        this.ceritaPost = actions.payload.val()
        this.ceritaPost.key=actions.key
      })
    })
  }

}
