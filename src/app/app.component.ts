import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  title = 'La pizzeria des 47 chameaux';

  changeTitle() {
    this.title = 'La pizzeria des ' + Math.floor(Math.random() * 1000) + ' chameaux';
  };
  
}
