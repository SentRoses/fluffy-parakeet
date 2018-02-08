import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})

export class CounterComponent {
  pizzaNumber: number = 0;
  @Output() plus: EventEmitter<any> = new EventEmitter();
  @Output() minus: EventEmitter<any> = new EventEmitter();
  
  onSelectMinus() {
    if (this.pizzaNumber != 0) {
      this.pizzaNumber--;
      this.minus.emit(-1);
    }
  }

  onSelectPlus() {
    this.pizzaNumber++;
    this.plus.emit(1);
  }

}
