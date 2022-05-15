import { Component } from '@angular/core';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
  title: string = 'Contador App';
  count: number = 10;
  base: number = 2;

  sumar() {
    this.count += 1;
  }

  restar() {
    this.count -= 1;
  }

  acumular(valor: number) {
    this.count += valor;
  }
}
