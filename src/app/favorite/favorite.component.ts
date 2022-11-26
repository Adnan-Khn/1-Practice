import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  temp:boolean = true;
  fontawesomeicon = "fa-user"
  title:string = "";
  changeIcon(){
    this.temp=!this.temp;
    console.log(this.temp);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
