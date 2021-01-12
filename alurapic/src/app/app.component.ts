import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://curiosamente.diariodepernambuco.com.br/wp-content/uploads/2017/07/le%C3%A3o.jpg',
      description: 'Leão 1'
    },
    {
      url: 'https://static5.depositphotos.com/1006472/535/i/600/depositphotos_5357980-stock-photo-white-lion.jpg',
      description: 'Leão 2'
    }
  ]

}
