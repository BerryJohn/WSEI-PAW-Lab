import { disabled, watch } from "../decorators";
import { Game } from "../game.model";

@disabled
export class BattleShips implements Game {
    name: string;
    isDisabled: boolean;

    constructor() {
        this.name = "Statki";
    }
    
    @watch
    getGameElement(): HTMLElement {
        if(!this.isDisabled)
        {
            const div = document.createElement('div');
            div.appendChild(document.createTextNode("Hello BattleShips"));
            return div; 
        }

    }

}