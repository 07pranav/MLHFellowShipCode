import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent {
  constructor( private data:DataService) { 
     
  }
  logx(x)
  {
    console.log(x)
  }
 submits(f)
 {  
   console.log(f);
  this.data.adminregister(f);
  
 }
}
