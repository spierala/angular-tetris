import { Injectable } from '@angular/core';
import { KeyboardStore, KeyboardState } from './keyboard.store';

@Injectable({ providedIn: 'root' })
export class KeyboardQuery {
  up$ = this.store.select(createKeySelector('up'));
  down$ = this.store.select(createKeySelector('down'));
  left$ = this.store.select(createKeySelector('left'));
  right$ = this.store.select(createKeySelector('right'));
  drop$ = this.store.select(createKeySelector('drop'));
  pause$ = this.store.select(createKeySelector('pause'));
  sound$ = this.store.select(createKeySelector('sound'));
  reset$ = this.store.select(createKeySelector('reset'));

  constructor(protected store: KeyboardStore) {
  }
}

const createKeySelector = (key: string) => (featureState: KeyboardState) => featureState[key];

