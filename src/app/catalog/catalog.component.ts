import { Component } from '@angular/core';
import { Pizza } from '../model/pizza';
import { PizzaProvider } from '../providers/pizza.provider';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [PizzaProvider],
})

export class CatalogComponent {

  pizzaList: Pizza[];

  pizzaSelected: Pizza;

  constructor(private pizzaProvider: PizzaProvider) {
    this.pizzaProvider.getPizzas().then(pizzas => this.pizzaList = pizzas);
  }

  onSelect(pizza) {
    this.pizzaSelected = pizza;
  }

}
