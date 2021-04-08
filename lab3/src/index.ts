import { Games } from "./game.enum";
import { gameFactory } from "./gameFactory.class";


class App {
    private _gameFactory: gameFactory;
    private gameContainer: HTMLDivElement;

    constructor() {
        this._gameFactory = new gameFactory();
        this.initMenu();        
    }

    changeGame(name: string): void{
        const game = this._gameFactory.createGame(Games[name]);
        this.gameContainer.innerHTML = ''; //clear
        this.gameContainer.appendChild(game.getGameElement());
    }

    initMenu(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div')); // kontener menu dostępnych gier
        this.gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener główny ekranu z grą
        const list = document.createElement('ul'); // lista pozycji w menu dostępnych gier

        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
        // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
        // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer.
        // Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartoťciach enum'a
        for(let element in Games)
        {
            if(isNaN(Number(element)))
                {
                    const gameName = <HTMLLIElement>(document.createElement('li'));
                    gameName.innerText = `${element}`;
                    gameName.addEventListener('click', e => {
                        const newGameName: string = (e.target as HTMLElement).innerText;
                        this.changeGame( newGameName )
                    });
                    list.appendChild(gameName);
                }
        }

        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(this.gameContainer);
    }
}

new App(); 