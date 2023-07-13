import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  public name: String = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  };

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando un turno.',
    '=1': 'tenemos un cliente esperando un turno.',
    '=2': 'tenemos dos clientes esperando un turno.',
    'other': 'tenemos # clientes esperando un turno.',
  }

  public clients: string[] = [
    'Fernando',
    'Melissa',
    'Juan',
    'Luis',
    'Luisa',
    'Jorge',
    'Maria',
    'Pedro',
  ];

  public person = {
    name: 'Fernando',
    age: 30,
    gender: 'male',
  };

  public myObervable = interval(1000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 2000);
  });

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  };

  deleteClient() {
    this.clients.shift();
  };
}
