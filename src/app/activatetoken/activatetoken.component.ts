import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'activatetoken',
  templateUrl: './activatetoken.component.html',
  styleUrls: ['./activatetoken.component.css']
})
export class ActivatetokenComponent implements OnInit {

  private token: string;
  // private id: string;
  // private token: string;
  // result: any;
  // toke:any;
  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private router: Router,
  //   private dataservice: DataService
  // ) {}
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataservice: DataService) {
    // Print the parameter to the console. 
  };

  ngOnInit() {
    this.token = this.router.url.split('/').pop().substr(15);

    this.dataservice.activatetoken(this.token)
      .subscribe
      (results => {
        console.log(results)
      });

  }
}