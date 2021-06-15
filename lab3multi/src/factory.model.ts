import {Game} from './game.model';
import {Games} from './game.enum';

export interface Factory {
    createGame(game: Games): Game;
  }