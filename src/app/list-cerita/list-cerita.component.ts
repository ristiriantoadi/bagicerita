import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cerita',
  templateUrl: './list-cerita.component.html',
  styleUrls: ['./list-cerita.component.css']
})
export class ListCeritaComponent implements OnInit {

  @Input() public listCerita;
  constructor() { 
    console.log("hello")
    console.log(this.listCerita)
  }

  ngOnInit(): void {
  }

}
