import { Injectable } from '@angular/core';
import { Pizza } from '../model/pizza';

@Injectable()

export class PizzaProvider {
    getPizzas() {
        return Promise.resolve([
            { id: 1, name: 'Reine', price: 12, img: "../assets/img/pizza-reine.png" },
            { id: 2, name: '4 fromages', price: 13, img: "../assets/img/pizza-4fromages.png" },
            { id: 3, name: 'Orientale', price: 11, img: "../assets/img/pizza-orientale.png" },
            { id: 4, name: 'Cannibale', price: 9, img: "../assets/img/pizza-cannibale.png" }
        ]);
    }
    getPizzasSlowly(): Promise<Pizza[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getPizzas()), 2000);
        });
    }
}