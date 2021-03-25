import {cell} from './cell';

export class board{
    _cellArr: cell[];
    _board: HTMLElement;
    _currentMove: string = 'O';
    constructor(size: number)
    {
        this._board = document.querySelector('.board');
        this._cellArr = new Array(size);
        for(let i = 0; i < size; i++)
        {
            const element: HTMLElement = document.createElement('div');
            element.classList.add('field');
            element.id = `${i}`;
            element.addEventListener('mouseup', e => console.log(e.target))
            let newCell = new cell(element);
            this._cellArr[i] = newCell;
        }
    }
    init(): void{
        for (const element of this._cellArr) {
            this._board.appendChild(element._htmlElement);
        }
    }
    move(){

    }
}