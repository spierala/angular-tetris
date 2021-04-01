import { Injectable } from '@angular/core';
import { TetrisKeyboard } from '@trungk18/interface/keyboard';
import { FeatureStore } from 'mini-rx-store';

export interface KeyboardState {
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  pause: boolean;
  sound: boolean;
  reset: boolean;
  drop: boolean;
}

export const createInitialState = (): KeyboardState => ({
  up: false,
  down: false,
  left: false,
  right: false,
  pause: false,
  sound: false,
  reset: false,
  drop: false
});

@Injectable({ providedIn: 'root' })
export class KeyboardStore extends FeatureStore<KeyboardState> {
  constructor() {
    super('AngularTetrisKeyboard', createInitialState());
  }
}
