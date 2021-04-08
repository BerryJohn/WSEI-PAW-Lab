import { Factory } from "./factory.model";
import { Games } from "./game.enum";
import { Game } from "./game.model";
import { TicTacToe } from "./tictactoe/tictactoe";
import { BattleShips } from "./battleships/battleships";

export class gameFactory implements Factory{
    createGame(game: Games): Game{
        switch(game)
        {
            case Games.TicTacToe:
                return new TicTacToe();
            case Games.BattleShips:
                return new BattleShips();
            default:
                console.warn('dupa');
            break;
        }
    }
}