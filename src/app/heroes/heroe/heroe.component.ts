import { Component } from '@angular/core';

@Component({ selector: 'app-heroe', templateUrl: 'heroe.component.html' })
export class HeroeComponent {
  title: string = 'Heroe';
  name: string = 'Ironman';
  age: number = 45;

  get nombreCapitalizado(): string {
    return this.name.toLocaleUpperCase();
  }
  getName(): string {
    return `${this.name}-${this.age}`;
  }

  rename(): void {
    this.name = 'Spiderman';
  }

  cambiarEdad(): void {
    this.age = 30;
  }
}
