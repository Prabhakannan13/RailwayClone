import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewalltrain',
  templateUrl: './viewalltrain.component.html',
  styleUrls: ['./viewalltrain.component.css']
})
export class ViewalltrainComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewtrian().subscribe(
      (data)=>{
        this.viewtrain=data
      }
    )
   }
  name="Prabha"

  status:boolean=false
  readValues=()=>{
    this.name="Raju"
    this.status=true
  }

viewtrain:any=[]
  ngOnInit(): void {
  }

}
