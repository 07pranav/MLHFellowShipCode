import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  result: any;
  constructor(public dataservice: DataService, private activatedRoute: ActivatedRoute,) { }
  toke: any;
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params)
      this.toke = params["token"]
    })
  }

  signInc(f) {
    console.log(f)
    f["token"] = this.toke
    this.dataservice.forgotpassword(f)
      .subscribe
      (results => {
        console.log(results)
        this.result = results["msg"]
        alert("A mail has been Sent to your Email id")
      },
      (error: Response) => {
        if (error.status === 400)
          alert('Email Not Registered');
        else{
          alert('An unexpected error occured.');
          console.log(error);
        }
    })
}
      


  }



