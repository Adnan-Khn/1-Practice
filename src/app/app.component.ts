import { FavIconArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '1-Practice';
  post = {
    title : "Title",
    isFav : false
  }
  onFavChng(temp: FavIconArgs){
    console.log("Clicked!!!",temp);
    
  }
}
