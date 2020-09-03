import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpasstwo',
  templateUrl: './forgotpasstwo.component.html',
  styleUrls: ['./forgotpasstwo.component.css']
})
export class ForgotpasstwoComponent implements OnInit {
  result: any;
  constructor(public dataservice: DataService) { }

  ngOnInit(): void {
  }

//   signInc()
//   {  
    

//    this.dataservice.forgotpasswordtwo()
//    .subscribe
//       (results => { 
//         console.log(results) 
//         this.result=results 
//         })
   

// }
// console.log(f)

}
