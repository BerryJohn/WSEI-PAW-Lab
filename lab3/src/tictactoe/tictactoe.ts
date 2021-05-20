import { Game } from "../game.model";
import { board } from '../../../lab2b-ticktoe/src/Classes/board';
import { disabled, enabled, watch } from "../decorators";

@enabled
export class TicTacToe implements Game {
    name: string;
    isDisabled: boolean;

    constructor() {
        this.name = "Kółko i krzyżyk";
    }
    
    @watch
    getGameElement(): HTMLElement {
        if(!this.isDisabled)
        {
            const div = document.createElement('div');
            const divWinner = document.createElement('div');
            divWinner.classList.add('winner');
            div.appendChild(divWinner);
            div.classList.add('board');
            const game: board = new board(3,div);
            game.init();
            return div;  
        }
    }
}