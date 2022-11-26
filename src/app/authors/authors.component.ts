import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title = "List of Authors"
  ImgURL="https://picsum.photos/800/400";
  isActive=true;
  onClick($event:any){
    console.log("Button was Clicked.",$event);
  }
  authors;
  constructor(aservice:AuthorsService) { 
    this.authors=aservice.getAuthors();
  }

  ngOnInit(): void {
  }

}
