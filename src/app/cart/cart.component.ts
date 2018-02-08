import { Component } from '@angular/core';
import { CartTotal } from '../model/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  cartTotal = {number: 0, value: 0};

  change(event) {
    this.cartTotal.number += event;
  }
}
