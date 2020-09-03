import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent{

  constructor(
    private dataservice:DataService) {} 
 signIn(f)
{  
  console.log(f);
 this.dataservice.video(f)
 .subscribe(result => { 
   console.log(result)
  });
} 
}
