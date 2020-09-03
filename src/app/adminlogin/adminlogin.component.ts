import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent  {

  invalidLogin: boolean; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dataservice:DataService ) { }
    //route used to access variable sent through path or query prams
    signIn(f)
    {  
      console.log(f);
     this.dataservice.adminlogin(f)
     .subscribe(result => { 
       console.log(result)
       if (result) {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')
        this.router.navigate(['/adminall'])
        // this.router.navigate([returnUrl]  )
       }
      },
      (error: Response) => {
        if (error.status === 400)
          alert('Invalid Credentials');
        else{
          alert('An unexpected error occured.');
          console.log(error);
        }
    })
}
      
    } 
  