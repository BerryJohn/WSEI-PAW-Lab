import { Games } from "./game.enum";
import { gameFactory } from "./gameFactory.class";


class App {
    private _gameFactory: gameFactory;

    constructor() {
        this._gameFactory = new gameFactory();
        this.initMenu();     
    }

    initMenu(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div')); // kontener menu dostępnych gier
        const gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener główny ekranu z grą
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
                        const selectedGame: string = (e.target as HTMLElement).innerText;
                        this._gameFactory.createGame(Games[selectedGame])
                    });
                    list.appendChild(gameName);
                }
        }
        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
    }
}

new App();