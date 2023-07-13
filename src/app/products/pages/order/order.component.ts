import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';



@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;
  public heroes: Hero[] = [
    {
      name: 'DareDevil',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    }
  ]

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }

}
