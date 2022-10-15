import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewalltrain',
  templateUrl: './viewalltrain.component.html',
  styleUrls: ['./viewalltrain.component.css']
})
export class ViewalltrainComponent implements OnInit {

  constructor() { }
  name="Prabha"

  status:boolean=false
  readValues=()=>{
    this.name="Raju"
    this.status=true
  }


  ngOnInit(): void {
  }

}
