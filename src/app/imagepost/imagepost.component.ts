import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'imagepost',
  templateUrl: './imagepost.component.html',
  styleUrls: ['./imagepost.component.css']
}) 
export class ImagepostComponent{

  selectedFile: ImageSnippet;

  constructor( public imageService: DataService){}

  logx(x){

  }

  processFile(imageInput: any){
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file)
    });

    reader.readAsDataURL(file);
  }

}