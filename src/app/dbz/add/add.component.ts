import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  @Input() nuevo: Character = {
    name: '',
    power: 0,
  };

  constructor(private dbzService: DbzService) {}
  /*   @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter(); */

  agregar() {
    const { name } = this.nuevo;
    if (name.trim().length === 0) return;
    this.dbzService.addNewCharacter(this.nuevo);
    /*      this.onNewCharacter.emit(this.nuevo); */
    this.nuevo = {
      name: '',
      power: 0,
    };
  }
}
