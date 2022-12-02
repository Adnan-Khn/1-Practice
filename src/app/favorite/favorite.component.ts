import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input() temp:boolean | undefined;
  // @Input() isFav:boolean | undefined;
  @Output() change = new EventEmitter();
  fontawesomeicon = "fa-user"
  title:string = "";
  changeIcon(){
    this.temp=!this.temp;
    this.change.emit({newValue:this.temp});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
export interface FavIconArgs{
  newValue:boolean;
}
